import { useEffect, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import { useT } from '../../i18n';

/**
 * Cảnh bàn làm việc isometric (SVG) ở giữa bàn xử lý ảnh: tấm bệ gỗ nhiều lớp, tấm kính có lưới, ảnh chính,
 * thẻ metadata có bút đang sửa, ảnh phụ, màn hình ngắm, kính lúp, cục tẩy; chip "Edit Metadata" và nút tạm dừng.
 *
 * Khi không có ảnh nào đang được làm sạch, cảnh chạy vòng lặp minh họa. Khi có (`live`), ảnh chính trên tấm kính
 * là chính ảnh của người dùng và chip hiện trạng thái thật với thanh tiến độ chạy đúng thời gian của lượt đó.
 *
 * Hệ tọa độ: viewBox 600×440. Các vật nằm trên mặt bàn được vẽ trong mặt phẳng bàn rồi chiếu bằng ISO
 * (xoay −30°, ép dọc 0.6 — isometric nhẹ); các vật đứng (bút, kính lúp, màn hình, cục tẩy) vẽ thẳng trên màn hình.
 * Lưu ý: phần tử có animation CSS không mang thuộc tính transform (CSS sẽ ghi đè) — luôn bọc trong <g> riêng.
 */

const ISO = 'translate(300 225) scale(1 0.6) rotate(-30)';
/** Mặt bàn trong mặt phẳng bàn (trước khi chiếu). */
const DESK = { x: -190, y: -140, w: 380, h: 280, r: 30 };
/** Số lớp gỗ/giấy lộ ra ở cạnh trước và cạnh phải, mỗi lớp dày 5px. */
const DESK_LAYERS = [6, 5, 4, 3, 2, 1];

const TEAL = '#0B6E8A';
const TEAL_MID = '#12A0B5';
const NS = { vectorEffect: 'non-scaling-stroke' } as const;

export interface LiveScene {
  /** Đổi khi sang ảnh khác để ảnh "đặt xuống" lại từ đầu. */
  key: string;
  file: File;
  ext: string;
  /** Thời gian ảnh nằm trên bàn (ms) — thanh tiến độ của chip chạy đúng bằng chừng này. */
  dwell: number;
  status: string;
}

/** URL tạm cho tệp của người dùng (thu hồi khi đổi tệp / gỡ cảnh). */
function useFileUrl(file: File | undefined) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!file) return setUrl(null);
    const u = URL.createObjectURL(file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [file]);
  return url;
}

// ---------- Tranh phong cảnh flat (dùng cho ảnh chính và ảnh phụ) ----------

function Landscape({ x, y, w, h, id }: { x: number; y: number; w: number; h: number; id: string }) {
  // Tọa độ tương đối theo khung ảnh để dùng lại ở mọi kích thước.
  const X = (f: number) => x + f * w;
  const Y = (f: number) => y + f * h;
  return (
    <g clipPath={`url(#${id})`}>
      <rect x={x} y={y} width={w} height={h} fill="#CFEFF6" />
      <circle cx={X(0.3)} cy={Y(0.3)} r={h * 0.13} fill="#F4A04B" />
      {/* đồi xa */}
      <path d={`M${x} ${Y(0.62)} Q${X(0.25)} ${Y(0.42)} ${X(0.5)} ${Y(0.6)} T${X(1)} ${Y(0.52)} V${Y(1)} H${x} Z`} fill="#4CB8BC" />
      {/* hai ngôi nhà nhỏ */}
      {[0.58, 0.72].map((f, i) => (
        <g key={f} fill="#3D4652">
          <rect x={X(f)} y={Y(0.55 - i * 0.03)} width={w * 0.08} height={h * 0.12} />
          <path d={`M${X(f) - w * 0.012} ${Y(0.555 - i * 0.03)} L${X(f + 0.04)} ${Y(0.47 - i * 0.03)} L${X(f + 0.092)} ${Y(0.555 - i * 0.03)} Z`} />
        </g>
      ))}
      {/* sóng/đồi gần */}
      <path d={`M${x} ${Y(0.74)} Q${X(0.2)} ${Y(0.62)} ${X(0.42)} ${Y(0.74)} T${X(0.84)} ${Y(0.72)} T${X(1.1)} ${Y(0.7)} V${Y(1)} H${x} Z`} fill="#0E7C8C" />
    </g>
  );
}

// ---------- Ảnh in (card trắng viền dày) nằm trên mặt bàn, tọa độ trong mặt phẳng bàn ----------

function PhotoCard({ x, y, w, h, rotate, id, image, badge }: { x: number; y: number; w: number; h: number; rotate: number; id: string; image?: string | null; badge?: string }) {
  const b = Math.max(5, w * 0.055); // viền
  const inner = { x: x + b, y: y + b, w: w - 2 * b, h: h - b * 2.6 };
  return (
    <g transform={`rotate(${rotate} ${x + w / 2} ${y + h / 2})`}>
      <defs>
        <clipPath id={id}>
          <rect x={inner.x} y={inner.y} width={inner.w} height={inner.h} rx={2} />
        </clipPath>
      </defs>
      <rect x={x + 4} y={y + 7} width={w} height={h} rx={4} fill="#2b3a40" opacity={0.16} filter="url(#desk-soft)" />
      <rect x={x} y={y} width={w} height={h} rx={4} fill="#FFFFFF" />
      {image ? (
        <image href={image} x={inner.x} y={inner.y} width={inner.w} height={inner.h} preserveAspectRatio="xMidYMid slice" clipPath={`url(#${id})`} />
      ) : (
        <Landscape {...inner} id={id} />
      )}
      {badge && (
        <g>
          <rect x={inner.x + 4} y={inner.y + 4} width={30} height={13} rx={6.5} fill={TEAL} />
          <text x={inner.x + 19} y={inner.y + 13.4} textAnchor="middle" fontSize={8.5} fontWeight={800} fill="#FFFFFF" fontFamily="ui-sans-serif, system-ui, sans-serif">
            {badge}
          </text>
        </g>
      )}
    </g>
  );
}

// ---------- Thẻ metadata (nhãn có lỗ xỏ dây), tọa độ trong mặt phẳng bàn ----------

/** Dòng metadata: chiều dài và màu (teal / xám). Dòng 2 là dòng đang được bút sửa. */
const TAG_ROWS = [
  { end: 100, teal: true },
  { end: 88, teal: false },
  { end: 102, teal: true },
  { end: 80, teal: false },
  { end: 94, teal: true },
];
const ACTIVE_ROW = 2;

function MetadataTag() {
  return (
    <g>
      {/* dây buộc */}
      <path d="M27 45 C 12 52, 2 70, -12 76" fill="none" stroke={TEAL} strokeWidth={1.6} strokeLinecap="round" {...NS} />
      <path d="M33 11 H109 a6 6 0 0 1 6 6 V79 a6 6 0 0 1 -6 6 H33 L15 69 V27 Z" fill="#2b3a40" opacity={0.14} transform="translate(3 6)" filter="url(#desk-soft)" />
      <path d="M33 5 H109 a6 6 0 0 1 6 6 V79 a6 6 0 0 1 -6 6 H33 L15 69 V21 Z" fill="#FFFFFF" />
      {/* lỗ xỏ dây */}
      <circle cx={27} cy={45} r={5} fill="#E8F4F6" stroke="#B8CDD3" strokeWidth={1.2} {...NS} />
      {TAG_ROWS.map((row, i) => {
        const y = 17 + i * 12;
        const bar = <rect x={38} y={y} width={row.end - 38} height={7} rx={3.5} fill={row.teal ? TEAL : '#C9D6DC'} opacity={row.teal ? 0.85 : 1} />;
        if (i !== ACTIVE_ROW) return <g key={i}>{bar}</g>;
        return (
          <g key={i}>
            <rect x={34} y={y - 3} width={72} height={13} rx={6.5} fill="rgb(11 110 138 / 0.08)" stroke={TEAL} strokeWidth={1.6} {...NS} />
            {/* dòng đang sửa: bị xóa dần theo đầu bút rồi hiện lại */}
            <g className="scene-erase">{bar}</g>
          </g>
        );
      })}
    </g>
  );
}

// ---------- Bút stylus (vẽ thẳng đứng, đầu bút ở gốc tọa độ, nghiêng 28°) ----------

function Stylus() {
  return (
    <g>
      <ellipse cx={3} cy={2} rx={6} ry={2.2} fill="#2b3a40" opacity={0.18} />
      <g transform="rotate(28)">
        <path d="M0 0 L-4 -12 H4 Z" fill="#23404A" />
        <rect x={-5.5} y={-30} width={11} height={19} rx={3} fill="#0A5E75" />
        <rect x={-6} y={-118} width={12} height={92} rx={6} fill={TEAL_MID} />
        <rect x={-3} y={-110} width={3} height={78} rx={1.5} fill="#FFFFFF" opacity={0.35} />
        <rect x={-6} y={-128} width={12} height={16} rx={6} fill={TEAL} />
        <rect x={-6} y={-112} width={12} height={3} fill="#0A5E75" />
      </g>
    </g>
  );
}

// ---------- Kính lúp ----------

function Magnifier() {
  return (
    <g>
      <g transform="rotate(42)">
        <rect x={-5} y={28} width={10} height={44} rx={5} fill={TEAL} />
        <rect x={-6} y={26} width={12} height={9} rx={3} fill="#0A5E75" />
      </g>
      <circle r={27} fill="rgb(207 243 249 / 0.35)" stroke={TEAL} strokeWidth={7} />
      <path d="M-15 -8 A 17 17 0 0 1 -4 -16" fill="none" stroke="#FFFFFF" strokeWidth={3.5} strokeLinecap="round" opacity={0.85} />
    </g>
  );
}

// ---------- Cục tẩy (khối isometric nhỏ, trắng – xanh) ----------

function Eraser() {
  return (
    <g>
      <ellipse cx={25} cy={22} rx={28} ry={6} fill="#2b3a40" opacity={0.14} />
      <path d="M0 0 L22 10 L22 24 L0 14 Z" fill={TEAL_MID} />
      <path d="M22 10 L50 0 L50 14 L22 24 Z" fill="#DCEEF2" />
      <path d="M0 0 L28 -10 L50 0 L22 10 Z" fill="#FAFDFE" />
      {/* vỏ giấy xanh bọc nửa cục tẩy */}
      <path d="M0 0 L14 -5 L36 5 L22 10 Z" fill="#1BB0C4" />
    </g>
  );
}

// ---------- Màn hình ngắm (viewfinder) trên chân đế ----------

function Viewfinder() {
  const brackets = [
    'M102 56 V48 H110',
    'M190 48 H198 V56',
    'M198 100 V108 H190',
    'M110 108 H102 V100',
  ];
  return (
    <g>
      {/* chân đế */}
      <ellipse cx={150} cy={203} rx={24} ry={7} fill="#9CB6BD" />
      <ellipse cx={150} cy={201} rx={24} ry={7} fill="#C3D6DB" />
      <rect x={146} y={118} width={8} height={84} rx={4} fill="#9CB6BD" />
      {/* khung màn hình */}
      <g transform="rotate(-3 150 78)">
        <rect x={90} y={36} width={120} height={84} rx={12} fill="#14303A" />
        <rect x={96} y={42} width={108} height={72} rx={8} fill="#0B2229" />
        {brackets.map((d) => (
          <path key={d} d={d} fill="none" stroke="#BDF0F7" strokeOpacity={0.75} strokeWidth={2.2} strokeLinecap="round" />
        ))}
        {/* ngôi sao lấp lánh */}
        <g transform="translate(150 78)">
          <g className="scene-twinkle">
            <path d="M0 -15 Q2 -2 15 0 Q2 2 0 15 Q-2 2 -15 0 Q-2 -2 0 -15 Z" fill="#BDF0F7" />
          </g>
        </g>
        <g transform="translate(168 62)">
          <g className="scene-twinkle" style={{ animationDelay: '-0.9s' } as CSSProperties}>
            <path d="M0 -6 Q1 -1 6 0 Q1 1 0 6 Q-1 1 -6 0 Q-1 -1 0 -6 Z" fill="#FFFFFF" />
          </g>
        </g>
      </g>
    </g>
  );
}

/** Nhóm trôi nổi nhẹ lên xuống; mỗi vật một chu kỳ / độ lệch pha riêng. */
function Float({ dur, delay, children }: { dur: number; delay: number; children: ReactNode }) {
  return (
    <g className="scene-float" style={{ '--dur': `${dur}s`, '--delay': `${delay}s` } as CSSProperties}>
      {children}
    </g>
  );
}

// ---------- Cảnh hoàn chỉnh ----------

const CHIP_STEPS = ['Edit Metadata', 'Remove EXIF', 'Clean AI Data'];

export function DeskScene({ live }: { live: LiveScene | null }) {
  const t = useT();
  const [paused, setPaused] = useState(false);
  const liveUrl = useFileUrl(live?.file);

  const toggle = (e: MouseEvent) => {
    e.stopPropagation(); // không mở hộp chọn ảnh khi bàn còn trống
    setPaused((p) => !p);
  };

  return (
    <div className={`scene relative ${paused ? 'scene-paused' : ''}`}>
      <svg viewBox="0 0 600 440" className="block h-auto w-full" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="desk-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E6D8C3" />
            <stop offset="1" stopColor="#D4C2A6" />
          </linearGradient>
          <pattern id="desk-grid" width="17" height="17" patternUnits="userSpaceOnUse">
            <path d="M17 0H0V17" fill="none" stroke={TEAL} strokeOpacity={0.18} strokeWidth={0.8} {...NS} />
          </pattern>
          <filter id="desk-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <filter id="desk-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="desk-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ===== Glow cyan phía sau tâm bàn ===== */}
        <circle cx={300} cy={205} r={150} fill="#BDF0F7" opacity={0.85} filter="url(#desk-glow)" />

        {/* ===== Bàn / tấm bệ: bóng đổ, các lớp gỗ ở cạnh trước & phải, mặt bàn ===== */}
        <g transform="translate(8 46)">
          <g transform={ISO}>
            <rect x={DESK.x} y={DESK.y} width={DESK.w} height={DESK.h} rx={DESK.r} fill="#4A3A22" opacity={0.28} filter="url(#desk-shadow)" />
          </g>
        </g>
        {DESK_LAYERS.map((i) => (
          <g key={i} transform={`translate(0 ${i * 5})`}>
            <g transform={ISO}>
              <rect
                x={DESK.x}
                y={DESK.y}
                width={DESK.w}
                height={DESK.h}
                rx={DESK.r}
                fill={i === DESK_LAYERS[0] ? '#DDB377' : '#E9C995'}
                stroke="#CF9F5C"
                strokeWidth={1.1}
                {...NS}
              />
            </g>
          </g>
        ))}
        <g transform={ISO}>
          <rect x={DESK.x} y={DESK.y} width={DESK.w} height={DESK.h} rx={DESK.r} fill="url(#desk-top)" />
          <rect x={DESK.x + 6} y={DESK.y + 6} width={DESK.w - 12} height={DESK.h - 12} rx={DESK.r - 5} fill="none" stroke="#FFFFFF" strokeOpacity={0.45} strokeWidth={1.2} {...NS} />
        </g>

        {/* ===== Màn hình ngắm trên chân đế (góc trên trái) ===== */}
        <Float dur={7} delay={-1.5}>
          <Viewfinder />
        </Float>

        {/* ===== Tấm kính trong suốt: lưới mảnh + 4 góc ngắm ===== */}
        <g transform={ISO}>
          <rect x={-131} y={-89} width={205} height={170} rx={12} fill="#2b3a40" opacity={0.1} filter="url(#desk-soft)" />
          <rect x={-135} y={-95} width={205} height={170} rx={12} fill="#D4F4FA" fillOpacity={0.55} stroke="#FFFFFF" strokeOpacity={0.9} strokeWidth={1.5} {...NS} />
          <rect x={-135} y={-95} width={205} height={170} rx={12} fill="url(#desk-grid)" />
          {['M-126 -70 V-86 H-110', 'M45 -86 H61 V-70', 'M61 50 V66 H45', 'M-110 66 H-126 V50'].map((d) => (
            <path key={d} d={d} fill="none" stroke={TEAL} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" {...NS} />
          ))}
        </g>

        {/* ===== Ảnh chính trên tấm kính (ảnh thật của người dùng khi đang làm sạch) ===== */}
        <Float dur={6} delay={0}>
          <g transform={ISO}>
            <g key={live?.key ?? 'demo'} className={live ? 'scene-arrive' : undefined}>
              <PhotoCard x={-112} y={-72} w={142} h={106} rotate={-6} id="desk-photo-main" image={live ? liveUrl : null} badge={live?.ext ?? 'JPG'} />
            </g>
          </g>
        </Float>

        {/* ===== Ảnh phụ ở mép phải bàn ===== */}
        <Float dur={8} delay={-3}>
          <g transform={ISO}>
            <PhotoCard x={118} y={48} w={64} h={50} rotate={8} id="desk-photo-side" />
          </g>
        </Float>

        {/* ===== Thẻ metadata + bút đang sửa dòng được highlight ===== */}
        <Float dur={6.5} delay={-2}>
          <g transform={ISO}>
            <MetadataTag />
          </g>
          {/* Đầu bút đặt đúng điểm đầu dòng đang sửa (đã chiếu ISO), rồi chạy dọc dòng */}
          <g transform="translate(358.6 235.5)">
            <g className="scene-pen">
              <Stylus />
            </g>
          </g>
        </Float>

        {/* ===== Cục tẩy (giữa cạnh dưới) ===== */}
        <g transform="translate(206 314)">
          <Float dur={5.5} delay={-1}>
            <Eraser />
          </Float>
        </g>

        {/* ===== Kính lúp (góc dưới phải) quét chậm qua ảnh ===== */}
        <g transform="translate(446 268)">
          <Float dur={6} delay={-4}>
            <g className="scene-sweep">
              <Magnifier />
            </g>
          </Float>
        </g>
      </svg>

      {/* ===== Chip nổi "Edit Metadata" (góc trên phải) ===== */}
      <div className="scene-chip absolute end-[3%] top-[4%] flex items-center gap-2 overflow-hidden rounded-xl bg-white py-2 ps-2 pe-3.5 shadow-[0_10px_24px_-10px_rgba(11,60,75,0.45)]" dir="ltr">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg" style={{ background: TEAL }}>
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
            <path d="M13.6 3.2l3.2 3.2-9.3 9.3-4 .8.8-4z M12 4.8l3.2 3.2" fill="none" stroke="#FFFFFF" strokeWidth={1.7} strokeLinejoin="round" />
          </svg>
        </span>
        <span className="grid text-[0.8rem] font-bold whitespace-nowrap text-[#0F2A33]">
          {live ? (
            <span className="max-w-36 truncate">{live.status}</span>
          ) : (
            CHIP_STEPS.map((s, i) => (
              <span key={s} className="scene-chip-text" style={{ '--delay': `${i * 3}s` } as CSSProperties}>
                {s}
              </span>
            ))
          )}
        </span>
        <span className="absolute inset-x-2 bottom-1 h-[3px] overflow-hidden rounded-full bg-[#DFF3F7]">
          <span
            key={live?.key ?? 'loop'}
            className={`block h-full rounded-full ${live ? 'scene-bar-live' : 'scene-bar'}`}
            style={{ background: TEAL, '--dwell': `${live?.dwell ?? 0}ms` } as CSSProperties}
          />
        </span>
      </div>

      {/* ===== Nút tạm dừng / chạy lại hiệu ứng (góc dưới phải) ===== */}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={paused}
        aria-label={t.workspace.pauseAnimation}
        title={t.workspace.pauseAnimation}
        className="scene-toggle absolute end-[2%] bottom-[3%] grid h-9 w-9 place-items-center rounded-full bg-white text-[#0B6E8A] shadow-[0_6px_16px_-6px_rgba(11,60,75,0.5)] transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="currentColor">
          {paused ? <path d="M6.5 4.5v11l9-5.5z" /> : <path d="M5.5 4.5h3v11h-3zM11.5 4.5h3v11h-3z" />}
        </svg>
      </button>
    </div>
  );
}
