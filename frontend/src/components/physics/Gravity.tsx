import { createContext, useContext, useEffect, useId, useImperativeHandle, useRef, type AriaRole, type ReactNode, type Ref } from 'react';
import type * as MatterTypes from 'matter-js';

/**
 * Hiệu ứng trọng lực cho phần tử HTML, dựa trên Matter.js.
 *
 *   <Gravity gravity={{ x: 0, y: 1 }}>
 *     <MatterBody x="50%" y="20%"><div>Hello</div></MatterBody>
 *   </Gravity>
 *
 * Gravity tạo thế giới vật lý (engine, runner, tường bao quanh khung, chuột để kéo/ném), mỗi MatterBody đăng ký
 * phần tử của nó qua Context → thành một vật thể cùng kích thước; mỗi khung hình, vị trí/góc của vật thể được chép
 * ngược lên phần tử bằng transform. Điều khiển qua `ref`: start(), stop(), reset().
 *
 * - Matter.js chỉ được tải (chunk riêng) khi hiệu ứng thật sự chạy.
 * - HTML ban đầu (cả bản prerender) đặt sẵn các phần tử ở vị trí x/y → không nhảy bố cục khi hydrate.
 * - Màn hình hẹp hơn `minWidth` hoặc người dùng chọn giảm chuyển động: không chạy vật lý; CSS (.gravity-arena)
 *   xếp các phần tử thành lưới tĩnh.
 * - Không chặn cuộn trang: bỏ trình nghe wheel/touch mà Matter.Mouse gắn sẵn.
 */

type Matter = typeof MatterTypes;
type BodyType = 'rectangle' | 'circle';
type Pos = number | string;

export interface GravityHandle {
  start(): void;
  stop(): void;
  reset(): void;
}

interface Entry {
  el: HTMLElement;
  x: Pos;
  y: Pos;
  angle: number;
  bodyType: BodyType;
  options?: MatterTypes.IBodyDefinition;
  body?: MatterTypes.Body;
  w: number;
  h: number;
}

interface Registry {
  register(id: string, entry: Entry): void;
  unregister(id: string): void;
}

const GravityContext = createContext<Registry | null>(null);

/** "30%" → 30% của `size`; số → px. */
const toPx = (v: Pos, size: number) => (typeof v === 'number' ? v : v.trim().endsWith('%') ? (parseFloat(v) / 100) * size : parseFloat(v));
const toCss = (v: Pos) => (typeof v === 'number' ? `${v}px` : v);
const WALL = 80;

export function Gravity({
  children,
  gravity = { x: 0, y: 1 },
  debug = false,
  autoStart = true,
  startWhenVisible = true,
  minWidth = 640,
  className = '',
  role,
  ref,
}: {
  children: ReactNode;
  /** Hướng và độ lớn trọng lực (mặc định rơi xuống). */
  gravity?: { x: number; y: number };
  /** Vẽ khung vật thể Matter.js chồng lên để dò lỗi. */
  debug?: boolean;
  autoStart?: boolean;
  /** Chỉ bắt đầu rơi khi khung lọt vào màn hình (để người xem thấy cảnh rơi). */
  startWhenVisible?: boolean;
  /** Bề ngang cửa sổ tối thiểu để chạy vật lý — phải khớp media query của .gravity-arena trong src/index.css. */
  minWidth?: number;
  className?: string;
  role?: AriaRole;
  ref?: Ref<GravityHandle>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const entries = useRef(new Map<string, Entry>());
  const world = useRef<{
    M: Matter;
    engine: MatterTypes.Engine;
    runner: MatterTypes.Runner;
    render?: MatterTypes.Render;
    /** Gỡ các trình nghe chuột đã gắn lên khung. */
    unlisten: () => void;
    frame: number;
    running: boolean;
  } | null>(null);
  const controls = useRef<GravityHandle>({ start: () => {}, stop: () => {}, reset: () => {} });
  const wantRunning = useRef(false);
  const gravityRef = useRef(gravity);
  gravityRef.current = gravity;

  const registry = useRef<Registry>({
    register: (id, entry) => entries.current.set(id, entry),
    unregister: (id) => entries.current.delete(id),
  }).current;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let disposed = false;
    let M: Matter | null = null;

    // Cùng điều kiện với CSS của .gravity-arena (media query), để JS và lưới tĩnh không bao giờ lệch nhau.
    const allowed = () =>
      window.matchMedia(`(min-width: ${minWidth}px)`).matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /** Trả các phần tử về vị trí ban đầu do HTML/CSS quyết định (khi tắt vật lý). */
    const restoreElements = () => {
      for (const e of entries.current.values()) {
        e.el.style.left = toCss(e.x);
        e.el.style.top = toCss(e.y);
        e.el.style.transform = `translate(-50%, -50%) rotate(${e.angle}deg)`;
        e.body = undefined;
      }
    };

    const teardown = () => {
      const w = world.current;
      if (!w) return;
      cancelAnimationFrame(w.frame);
      w.unlisten();
      w.M.Runner.stop(w.runner);
      if (w.render) {
        w.M.Render.stop(w.render);
        w.render.canvas.remove();
      }
      w.M.World.clear(w.engine.world, false);
      w.M.Engine.clear(w.engine);
      world.current = null;
      container.dataset.active = 'false';
      restoreElements();
    };

    const build = async () => {
      teardown();
      if (!allowed()) return;
      if (!M) {
        const mod = (await import('matter-js')) as unknown as Matter & { default?: Matter };
        M = mod.default ?? mod;
      }
      if (disposed || !M) return;
      const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Render } = M;
      const W = container.clientWidth;
      const H = container.clientHeight;

      const engine = Engine.create({ gravity: { ...gravityRef.current, scale: 0.001 } });
      const runner = Runner.create();

      // Tường bao: sàn, trần, hai bên — vật thể không thể rơi/ném ra ngoài khung.
      const wall = { isStatic: true, render: { visible: debug } };
      Composite.add(engine.world, [
        Bodies.rectangle(W / 2, H + WALL / 2, W * 2, WALL, wall),
        Bodies.rectangle(W / 2, -WALL / 2, W * 2, WALL, wall),
        Bodies.rectangle(-WALL / 2, H / 2, WALL, H * 4, wall),
        Bodies.rectangle(W + WALL / 2, H / 2, WALL, H * 4, wall),
      ]);

      // Mỗi phần tử → một vật thể cùng kích thước, đặt tại vị trí ban đầu.
      for (const e of entries.current.values()) {
        e.w = e.el.offsetWidth;
        e.h = e.el.offsetHeight;
        const x = toPx(e.x, W);
        const y = toPx(e.y, H);
        const opts: MatterTypes.IBodyDefinition = {
          friction: 0.3,
          restitution: 0.3,
          ...e.options,
          angle: (e.angle * Math.PI) / 180,
          render: { visible: debug },
        };
        e.body = e.bodyType === 'circle' ? Bodies.circle(x, y, Math.max(e.w, e.h) / 2, opts) : Bodies.rectangle(x, y, e.w, e.h, { chamfer: { radius: 12 }, ...opts });
        Composite.add(engine.world, e.body);
        e.el.style.left = '0px';
        e.el.style.top = '0px';
      }

      // Kéo / ném bằng chuột. Bỏ trình nghe wheel và touch của Matter.Mouse để trang vẫn cuộn bình thường.
      const mouse = Mouse.create(container);
      const m = mouse as unknown as Record<string, EventListener>;
      container.removeEventListener('wheel', m.mousewheel);
      container.removeEventListener('DOMMouseScroll', m.mousewheel);
      container.removeEventListener('touchstart', m.mousedown);
      container.removeEventListener('touchmove', m.mousemove);
      container.removeEventListener('touchend', m.mouseup);
      // Con trỏ rời khung khi đang kéo → thả vật thể ra (không để dính theo chuột).
      container.addEventListener('mouseleave', m.mouseup);
      const unlisten = () => {
        container.removeEventListener('mousemove', m.mousemove);
        container.removeEventListener('mousedown', m.mousedown);
        container.removeEventListener('mouseup', m.mouseup);
        container.removeEventListener('mouseleave', m.mouseup);
      };
      Composite.add(engine.world, MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: debug } } }));

      let render: MatterTypes.Render | undefined;
      if (debug) {
        render = Render.create({ element: container, engine, options: { width: W, height: H, wireframes: true, background: 'transparent' } });
        Object.assign(render.canvas.style, { position: 'absolute', inset: '0', pointerEvents: 'none', zIndex: '10' });
        Render.run(render);
      }

      // Đồng bộ vị trí vật thể → phần tử HTML mỗi khung hình.
      const sync = () => {
        for (const e of entries.current.values()) {
          if (!e.body) continue;
          const { x, y } = e.body.position;
          e.el.style.transform = `translate(${x - e.w / 2}px, ${y - e.h / 2}px) rotate(${e.body.angle}rad)`;
        }
        if (world.current) world.current.frame = requestAnimationFrame(sync);
      };

      world.current = { M, engine, runner, render, unlisten, frame: 0, running: false };
      container.dataset.active = 'true';
      sync();
      if (wantRunning.current) start();
    };

    const start = () => {
      wantRunning.current = true;
      const w = world.current;
      if (!w || w.running) return;
      w.M.Runner.run(w.runner, w.engine);
      w.running = true;
    };
    const stop = () => {
      wantRunning.current = false;
      const w = world.current;
      if (!w || !w.running) return;
      w.M.Runner.stop(w.runner);
      w.running = false;
    };
    controls.current = { start, stop, reset: () => void build() };

    void build();

    // Bắt đầu khi khung lọt vào màn hình (hoặc ngay lập tức).
    let io: IntersectionObserver | undefined;
    if (autoStart) {
      if (startWhenVisible) {
        io = new IntersectionObserver(
          (items) => {
            if (items.some((i) => i.isIntersecting)) {
              start();
              io?.disconnect();
            }
          },
          { threshold: 0.35 },
        );
        io.observe(container);
      } else start();
    }

    // Đổi kích thước khung → dựng lại thế giới theo kích thước mới (trễ một nhịp để không dựng liên tục).
    let lastW = container.clientWidth;
    let timer = 0;
    const ro = new ResizeObserver(() => {
      if (container.clientWidth === lastW) return;
      lastW = container.clientWidth;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void build(), 200);
    });
    ro.observe(container);

    return () => {
      disposed = true;
      io?.disconnect();
      ro.disconnect();
      window.clearTimeout(timer);
      teardown();
    };
    // Dựng một lần; gravity mới được đọc qua gravityRef khi reset.
  }, [debug, minWidth, autoStart, startWhenVisible]);

  useImperativeHandle(ref, () => ({
    start: () => controls.current.start(),
    stop: () => controls.current.stop(),
    reset: () => controls.current.reset(),
  }));

  // Đổi hướng trọng lực khi đang chạy.
  useEffect(() => {
    const w = world.current;
    if (w) {
      w.engine.gravity.x = gravity.x;
      w.engine.gravity.y = gravity.y;
    }
  }, [gravity.x, gravity.y]);

  return (
    <GravityContext.Provider value={registry}>
      <div ref={containerRef} className={`gravity-arena ${className}`} data-active="false" role={role}>
        {children}
      </div>
    </GravityContext.Provider>
  );
}

/**
 * Phần tử chịu tác động vật lý. `x`, `y`: vị trí tâm ban đầu (px hoặc % của khung); `angle`: góc ban đầu (độ).
 * Kích thước vật thể lấy theo kích thước thật của phần tử.
 */
export function MatterBody({
  children,
  x = '50%',
  y = '50%',
  angle = 0,
  bodyType = 'rectangle',
  matterBodyOptions,
  className = '',
  role,
}: {
  children: ReactNode;
  x?: Pos;
  y?: Pos;
  angle?: number;
  bodyType?: BodyType;
  /** Tùy chọn Matter.js Body: friction, restitution, density, isStatic… */
  matterBodyOptions?: MatterTypes.IBodyDefinition;
  className?: string;
  role?: AriaRole;
}) {
  const registry = useContext(GravityContext);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  // Đăng ký một lần: hiệu ứng của con chạy trước của cha nên Gravity thấy đủ phần tử khi dựng thế giới.
  const props = useRef({ x, y, angle, bodyType, matterBodyOptions });
  props.current = { x, y, angle, bodyType, matterBodyOptions };
  useEffect(() => {
    if (!registry || !ref.current) return;
    const p = props.current;
    registry.register(id, { el: ref.current, x: p.x, y: p.y, angle: p.angle, bodyType: p.bodyType, options: p.matterBodyOptions, w: 0, h: 0 });
    return () => registry.unregister(id);
  }, [registry, id]);

  return (
    <div
      ref={ref}
      role={role}
      className={`gravity-body ${className}`}
      style={{ position: 'absolute', left: toCss(x), top: toCss(y), transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
    >
      {children}
    </div>
  );
}
