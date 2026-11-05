import type { ReactNode } from 'react';
import type { GuideSlug } from '../../content/seo';
import { iconPath, type IconName } from '../ui';

/**
 * Ảnh minh họa SVG cho từng bài — mỗi bài một cảnh riêng theo đúng chủ đề (bản đồ GPS, sơ đồ node ComfyUI,
 * bảng cài đặt Photoshop, cửa sổ thuộc tính tệp…), cùng một phong cách phẳng.
 * Vẽ bằng biến màu của giao diện (var(--color-…)) nên tự đổi theo chế độ Sáng/Tối; ảnh OG thay biến bằng mã hex
 * (src/seo/og.tsx). Không dùng id/gradient/filter vì nhiều ảnh nằm chung một trang.
 * Chữ trong hình là thuật ngữ kỹ thuật, giống nhau ở mọi ngôn ngữ.
 */

const W = 640;
const H = 360;
const c = (name: string) => `var(--color-${name})`;
const MONO = "'JetBrains Mono Variable', 'JetBrains Mono', Consolas, monospace";
const SANS = "'Be Vietnam Pro', 'Segoe UI', Arial, sans-serif";

type Tone = 'cobalt' | 'rose' | 'amber' | 'fix' | 'sky';

// ======================= Thành phần dùng chung =======================

/** Ảnh phong cảnh nhỏ (trời, mặt trời, đồi) co giãn vào khung x,y,w,h. */
function Photo({ x, y, w, h, tone = 'cobalt', r = 4 }: { x: number; y: number; w: number; h: number; tone?: Tone; r?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={c(`${tone}-soft`)} />
      <g transform={`translate(${x} ${y}) scale(${w / 100} ${h / 70})`}>
        <circle cx={72} cy={20} r={8} fill={c('amber')} opacity={0.9} />
        <path d="M0 70 L32 34 L50 52 L64 40 L100 70 Z" fill={c(tone)} />
        <path d="M0 70 L20 48 L38 70 Z" fill={c(tone)} opacity={0.55} />
      </g>
    </g>
  );
}

/** Tấm thẻ nền trắng có bóng phẳng phía dưới. */
function Panel({ x, y, w, h, r = 10, fill = 'sheet', children }: { x: number; y: number; w: number; h: number; r?: number; fill?: string; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 4} y={y + 6} width={w} height={h} rx={r} fill={c('line')} opacity={0.6} />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={c(fill)} stroke={c('line')} strokeWidth={1.2} />
      {children}
    </g>
  );
}

/** Nhãn dạng pill: gạch ngang = bị xóa; `kept` = giữ lại / tìm thấy (dấu tích). */
function Pill({
  x,
  y,
  text,
  tone = 'rose',
  strike = false,
  kept = false,
  mono = true,
  size = 14,
}: {
  x: number;
  y: number;
  text: string;
  tone?: Tone;
  strike?: boolean;
  kept?: boolean;
  mono?: boolean;
  size?: number;
}) {
  const t: Tone = kept ? 'fix' : tone;
  const w = 26 + text.length * size * (mono ? 0.61 : 0.55) + (kept ? 18 : 0);
  const h = size * 2.2;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx={h / 2} fill={c(`${t}-soft`)} />
      <text x={13} y={h / 2 + size * 0.36} fontFamily={mono ? MONO : SANS} fontSize={size} fontWeight={mono ? 500 : 700} fill={c(t)}>
        {text}
      </text>
      {strike && <line x1={10} y1={h / 2} x2={w - 10} y2={h / 2} stroke={c(t)} strokeWidth={2} strokeLinecap="round" />}
      {kept && <path d={`M${w - 24} ${h / 2}l4 4 8-9`} fill="none" stroke={c('fix')} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />}
    </g>
  );
}

/** Icon của giao diện (lưới 24) đặt tại x,y với cạnh `size`. */
function Glyph({ name, x, y, size = 24, color = 'cobalt', width = 1.8 }: { name: IconName; x: number; y: number; size?: number; color?: string; width?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 24})`}>
      <path d={iconPath(name)} fill="none" stroke={c(color)} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/** Ngôi sao lấp lánh 4 cánh (dấu hiệu AI). */
function Sparkle({ x, y, r, color = 'cobalt' }: { x: number; y: number; r: number; color?: string }) {
  const k = r * 0.22;
  return <path d={`M${x} ${y - r}Q${x + k} ${y - k} ${x + r} ${y}Q${x + k} ${y + k} ${x} ${y + r}Q${x - k} ${y + k} ${x - r} ${y}Q${x - k} ${y - k} ${x} ${y - r}Z`} fill={c(color)} />;
}

/** Thanh chữ giả (dòng văn bản mờ). */
const Bar = ({ x, y, w, h = 8, color = 'wash' }: { x: number; y: number; w: number; h?: number; color?: string }) => (
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c(color)} />
);

/** Cửa sổ ứng dụng / trình duyệt có thanh tiêu đề 3 chấm. */
function Window({ x, y, w, h, title, dark = false, children }: { x: number; y: number; w: number; h: number; title?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <Panel x={x} y={y} w={w} h={h} r={10} fill={dark ? 'film' : 'sheet'}>
      <path d={`M${x} ${y + 10}a10 10 0 0 1 10-10h${w - 20}a10 10 0 0 1 10 10v18H${x}z`} fill={c(dark ? 'ink-2' : 'wash')} opacity={dark ? 0.35 : 1} />
      {['rose', 'amber', 'fix'].map((t, i) => (
        <circle key={t} cx={x + 16 + i * 14} cy={y + 14} r={4.2} fill={c(t)} opacity={0.85} />
      ))}
      {title && (
        <text x={x + w / 2} y={y + 18.5} textAnchor="middle" fontFamily={SANS} fontSize={11.5} fontWeight={600} fill={c(dark ? 'film-hole' : 'ink-2')}>
          {title}
        </text>
      )}
      {children}
    </Panel>
  );
}

/** Điện thoại: thân tối, màn hình sáng; nội dung màn hình truyền qua children (tọa độ tuyệt đối). */
function Phone({ x, y, w, h, notch = 'island', children }: { x: number; y: number; w: number; h: number; notch?: 'island' | 'hole'; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 5} y={y + 8} width={w} height={h} rx={26} fill={c('line')} opacity={0.6} />
      <rect x={x} y={y} width={w} height={h} rx={26} fill={c('ink')} />
      <rect x={x + 7} y={y + 7} width={w - 14} height={h - 14} rx={20} fill={c('sheet')} />
      {notch === 'island' ? (
        <rect x={x + w / 2 - 22} y={y + 14} width={44} height={11} rx={5.5} fill={c('ink')} />
      ) : (
        <circle cx={x + w / 2} cy={y + 19} r={5} fill={c('ink')} />
      )}
      {children}
    </g>
  );
}

/** Mũi tên ngang. */
const Arrow = ({ x1, x2, y, color = 'cobalt' }: { x1: number; x2: number; y: number; color?: string }) => (
  <g stroke={c(color)} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none">
    <line x1={x1} y1={y} x2={x2} y2={y} />
    <path d={`M${x2 - 9} ${y - 8}L${x2} ${y}L${x2 - 9} ${y + 8}`} />
  </g>
);

/** Thẻ nhãn (hình nhãn treo, có lỗ xỏ dây), xoay `rot` độ quanh tâm. */
function TagShape({ x, y, w, h, rot = 0, tone = 'rose', text }: { x: number; y: number; w: number; h: number; rot?: number; tone?: Tone; text: string }) {
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <path d={`M${x + 18} ${y}H${x + w - 6}a6 6 0 0 1 6 6v${h - 12}a6 6 0 0 1-6 6H${x + 18}L${x} ${y + h / 2}Z`} fill={c(`${tone}-soft`)} stroke={c(tone)} strokeWidth={1.6} />
      <circle cx={x + 16} cy={y + h / 2} r={4} fill={c('sheet')} stroke={c(tone)} strokeWidth={1.4} />
      <text x={x + 30} y={y + h / 2 + 5} fontFamily={SANS} fontSize={15} fontWeight={700} fill={c(tone)}>
        {text}
      </text>
    </g>
  );
}

// ======================= Cảnh của từng bài =======================

const SCENES: Record<GuideSlug, () => ReactNode> = {
  // Ảnh thật trên mạng xã hội bị gắn "AI info"; nhãn bị gỡ bay ra ngoài.
  'made-with-ai-label': () => (
    <g>
      <circle cx={470} cy={120} r={92} fill={c('rose-soft')} opacity={0.7} />
      <Phone x={196} y={22} w={170} h={320}>
        <circle cx={226} cy={60} r={11} fill={c('cobalt-soft')} />
        <Bar x={244} y={52} w={70} h={7} color="line" />
        <Bar x={244} y={63} w={44} h={6} />
        <Photo x={210} y={80} w={142} h={150} tone="cobalt" r={6} />
        <Pill x={216} y={196} text="AI info" tone="rose" mono={false} size={12} strike />
        <g fill="none" stroke={c('ink-3')} strokeWidth={2} strokeLinecap="round">
          <path d="M218 252c0-6 9-6 9 0 0-6 9-6 9 0 0 7-9 12-9 12s-9-5-9-12z" />
          <circle cx={262} cy={252} r={8} />
        </g>
        <Bar x={216} y={276} w={118} h={7} color="line" />
        <Bar x={216} y={290} w={84} h={7} />
      </Phone>
      <TagShape x={392} y={92} w={168} h={46} rot={-14} text="Made with AI" />
      <line x1={410} y1={128} x2={548} y2={93} stroke={c('rose')} strokeWidth={3} strokeLinecap="round" />
      <path d="M372 200c20-10 36-30 44-58" fill="none" stroke={c('rose')} strokeWidth={2} strokeDasharray="4 6" strokeLinecap="round" />
      <Sparkle x={560} y={212} r={18} color="amber" />
      <Sparkle x={590} y={176} r={9} color="cobalt" />
      <g transform="translate(64 250)">
        <circle r={36} fill={c('fix-soft')} />
        <path d="M-14 0l9 9 19-20" fill="none" stroke={c('fix')} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x={64} y={312} textAnchor="middle" fontFamily={SANS} fontSize={13} fontWeight={700} fill={c('fix')}>
        real photo
      </text>
    </g>
  ),

  // Sơ đồ node ComfyUI nằm trong tệp PNG; các chunk prompt/workflow bị gạch.
  'remove-stable-diffusion-comfyui-metadata': () => {
    const node = (x: number, y: number, title: string, rows: number[], tone: Tone = 'cobalt') => (
      <g>
        <Panel x={x} y={y} w={150} h={34 + rows.length * 18} r={8}>
          <path d={`M${x} ${y + 8}a8 8 0 0 1 8-8h134a8 8 0 0 1 8 8v18H${x}z`} fill={c(tone)} />
          <text x={x + 12} y={y + 18} fontFamily={MONO} fontSize={12} fontWeight={600} fill={c('sheet')}>
            {title}
          </text>
          {rows.map((wd, i) => (
            <Bar key={i} x={x + 14} y={y + 36 + i * 18} w={wd} h={7} />
          ))}
        </Panel>
        <circle cx={x} cy={y + 46} r={5} fill={c('sheet')} stroke={c(tone)} strokeWidth={2} />
        <circle cx={x + 150} cy={y + 46} r={5} fill={c(tone)} />
      </g>
    );
    return (
      <g>
        <g fill="none" stroke={c('cobalt')} strokeWidth={2.5} opacity={0.7}>
          <path d="M178 86 C 214 86, 200 156, 236 156" />
          <path d="M178 230 C 214 230, 200 172, 236 172" />
          <path d="M386 156 C 410 156, 400 100, 424 100" />
        </g>
        {node(28, 40, 'Load Checkpoint', [96, 70])}
        {node(28, 184, 'CLIP Text Encode', [110, 84, 60], 'sky')}
        {node(236, 110, 'KSampler', [90, 110, 64])}
        <g transform="translate(424 54)">
          <rect x={4} y={6} width={180} height={226} rx={8} fill={c('line')} opacity={0.6} />
          <path d="M0 8a8 8 0 0 1 8-8h126l46 46v172a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z" fill={c('sheet')} stroke={c('line')} strokeWidth={1.2} />
          <path d="M134 0v38a8 8 0 0 0 8 8h38" fill={c('wash')} />
          <text x={18} y={36} fontFamily={SANS} fontSize={22} fontWeight={800} fill={c('cobalt')}>
            PNG
          </text>
          <Photo x={18} y={52} w={144} h={62} tone="sky" />
          <Pill x={18} y={128} text="tEXt prompt" strike size={12} />
          <Pill x={18} y={164} text="workflow {…}" strike size={12} />
          <Pill x={18} y={200} text="IDAT pixels" kept size={12} />
        </g>
      </g>
    );
  },

  // Thanh lệnh /imagine với prompt bị che, mắt gạch chéo, lưới 4 ảnh.
  'hide-midjourney-dalle-prompts': () => (
    <g>
      <Panel x={40} y={34} w={560} h={56} r={28}>
        <text x={66} y={68} fontFamily={MONO} fontSize={17} fontWeight={700} fill={c('cobalt')}>
          /imagine
        </text>
        {[[160, 96], [266, 130], [406, 74], [490, 54]].map(([x, w]) => (
          <rect key={x} x={x} y={52} width={w} height={20} rx={10} fill={c('ink-3')} opacity={0.35} />
        ))}
      </Panel>
      {[[60, 116, 'cobalt'], [196, 116, 'amber'], [60, 230, 'rose'], [196, 230, 'sky']].map(([x, y, t]) => (
        <Photo key={`${x}-${y}`} x={x as number} y={y as number} w={124} h={102} tone={t as Tone} r={8} />
      ))}
      <g transform="translate(470 226)">
        <circle r={84} fill={c('cobalt-soft')} />
        <path d="M-50 0c26-34 74-34 100 0-26 34-74 34-100 0z" fill={c('sheet')} stroke={c('cobalt')} strokeWidth={5} strokeLinejoin="round" />
        <circle r={16} fill={c('cobalt')} />
        <line x1={-46} y1={40} x2={46} y2={-40} stroke={c('rose')} strokeWidth={7} strokeLinecap="round" />
      </g>
      <Pill x={372} y={110} text="Job ID: 7f3c…" strike size={13} />
    </g>
  ),

  // Con dấu Content Credentials và chuỗi manifest: nguyên liệu → thao tác → chữ ký.
  'what-is-c2pa-content-credentials': () => (
    <g>
      <g transform="translate(320 96)">
        <circle r={64} fill={c('sky-soft')} />
        <circle r={46} fill={c('sky')} />
        <text y={10} textAnchor="middle" fontFamily={SANS} fontSize={30} fontWeight={800} fill={c('sheet')}>
          cr
        </text>
        <path d="M-30 52l-10 40 22-12 18 16 4-42zM30 52l10 40-22-12-18 16-4-42z" fill={c('sky')} opacity={0.75} />
      </g>
      {[
        [40, 'ingredient', 'photo'],
        [242, 'c2pa.edited', 'retry'],
        [444, 'signature ✓', 'shield'],
      ].map(([x, label, icon], i) => (
        <g key={label as string}>
          <Panel x={x as number} y={214} w={156} h={98} r={10}>
            <Glyph name={icon as IconName} x={(x as number) + 16} y={230} size={26} color="sky" />
            <text x={(x as number) + 16} y={282} fontFamily={MONO} fontSize={13.5} fontWeight={600} fill={c('ink')}>
              {label}
            </text>
            <Bar x={(x as number) + 16} y={292} w={96 - i * 18} h={6} />
          </Panel>
          {i < 2 && (
            <g fill="none" stroke={c('sky')} strokeWidth={4}>
              <rect x={(x as number) + 150} y={252} width={26} height={16} rx={8} />
              <rect x={(x as number) + 168} y={252} width={26} height={16} rx={8} />
            </g>
          )}
        </g>
      ))}
    </g>
  ),

  // Bản đồ có ghim vị trí; tọa độ GPS trên ảnh bị gạch.
  'remove-gps-location-from-photos': () => (
    <g>
      <Panel x={30} y={30} w={380} h={300} r={14} fill="fix-soft">
        <path d="M30 210 C 120 180, 180 250, 300 214 S 400 200, 410 196 V 236 C 330 260, 250 280, 160 250 S 60 250, 30 262 Z" fill={c('sky-soft')} />
        <g stroke={c('sheet')} strokeWidth={14} strokeLinecap="round">
          <line x1={30} y1={110} x2={410} y2={130} />
          <line x1={150} y1={30} x2={128} y2={330} />
          <line x1={300} y1={30} x2={320} y2={200} />
        </g>
        {[[52, 50, 70, 44], [180, 54, 100, 52], [336, 48, 60, 60], [56, 142, 54, 40], [184, 150, 110, 40]].map(([x, y, w, h]) => (
          <rect key={`${x}${y}`} x={x} y={y} width={w} height={h} rx={6} fill={c('sheet')} opacity={0.6} />
        ))}
        <circle cx={232} cy={168} r={52} fill={c('rose')} opacity={0.12} />
        <circle cx={232} cy={168} r={30} fill={c('rose')} opacity={0.18} />
        <path d="M232 178c-14-18-24-30-24-44a24 24 0 0 1 48 0c0 14-10 26-24 44z" fill={c('rose')} />
        <circle cx={232} cy={133} r={9} fill={c('sheet')} />
      </Panel>
      <g transform="rotate(5 520 170)">
        <Panel x={434} y={70} w={176} h={196} r={8}>
          <Photo x={446} y={82} w={152} h={112} tone="fix" />
          <Pill x={446} y={208} text="21.0285 N" strike size={12} />
          <Pill x={446} y={238} text="105.8542 E" strike size={12} />
        </Panel>
      </g>
    </g>
  ),

  // Xấp ảnh đi vào tệp ZIP, kèm tiến độ từng tệp.
  'batch-remove-metadata': () => (
    <g>
      {[-10, -4, 2, 8].map((rot, i) => (
        <g key={rot} transform={`rotate(${rot} 130 170)`}>
          <Panel x={52 + i * 6} y={70 + i * 4} w={156} h={120} r={6}>
            <Photo x={60 + i * 6} y={78 + i * 4} w={140} h={92} tone={(['amber', 'sky', 'rose', 'cobalt'] as Tone[])[i]} />
          </Panel>
        </g>
      ))}
      <text x={130} y={248} textAnchor="middle" fontFamily={MONO} fontSize={14} fontWeight={600} fill={c('ink-2')}>
        × 50 files
      </text>
      <Arrow x1={244} x2={300} y={150} />
      <g transform="translate(318 66)">
        <rect x={5} y={7} width={116} height={150} rx={10} fill={c('line')} opacity={0.6} />
        <rect width={116} height={150} rx={10} fill={c('amber')} />
        <rect x={50} width={16} height={150} fill={c('amber-soft')} opacity={0.5} />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} x={i % 2 ? 58 : 50} y={8 + i * 12} width={8} height={8} rx={1.5} fill={c('film')} opacity={0.7} />
        ))}
        <rect x={40} y={96} width={36} height={30} rx={5} fill={c('film')} opacity={0.75} />
        <text x={58} y={182} textAnchor="middle" fontFamily={MONO} fontSize={14} fontWeight={700} fill={c('amber')}>
          clean.zip
        </text>
      </g>
      <Panel x={464} y={70} w={150} h={176} r={10}>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <Bar x={480} y={92 + i * 38} w={118} h={9} />
            <Bar x={480} y={92 + i * 38} w={i < 3 ? 118 : 62} h={9} color={i < 3 ? 'fix' : 'cobalt'} />
            {i < 3 && <path d={`M480 ${116 + i * 38}l4 4 8-8`} fill="none" stroke={c('fix')} strokeWidth={2} strokeLinecap="round" />}
          </g>
        ))}
      </Panel>
    </g>
  ),

  // Kính lúp soi ảnh + bảng kiểm: hai dấu hiệu tìm thấy, điểm ảnh thì chưa chắc.
  'how-to-check-if-image-is-ai-generated': () => (
    <g>
      <Panel x={36} y={44} w={300} h={226} r={10}>
        <Photo x={48} y={56} w={276} h={202} tone="cobalt" r={6} />
      </Panel>
      <g transform="translate(262 206)">
        <line x1={44} y1={44} x2={92} y2={92} stroke={c('ink')} strokeWidth={14} strokeLinecap="round" />
        <circle r={60} fill={c('sheet')} opacity={0.35} stroke={c('ink')} strokeWidth={10} />
        <Sparkle x={0} y={0} r={22} color="cobalt" />
      </g>
      <Panel x={400} y={58} w={206} h={214} r={12}>
        <text x={420} y={90} fontFamily={SANS} fontSize={15} fontWeight={800} fill={c('ink')}>
          AI check
        </text>
        {[
          ['C2PA', 'fix', true],
          ['IPTC source', 'fix', true],
          ['pixels', 'amber', false],
        ].map(([label, tone, ok], i) => (
          <g key={label as string} transform={`translate(420 ${112 + i * 50})`}>
            <circle cx={14} cy={14} r={14} fill={c(`${tone}-soft`)} />
            {ok ? (
              <path d="M7 14l5 5 9-10" fill="none" stroke={c(tone as string)} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <text x={14} y={20} textAnchor="middle" fontFamily={SANS} fontSize={17} fontWeight={800} fill={c(tone as string)}>
                ?
              </text>
            )}
            <text x={38} y={19} fontFamily={MONO} fontSize={14} fontWeight={600} fill={c('ink-2')}>
              {label}
            </text>
          </g>
        ))}
      </Panel>
    </g>
  ),

  // Bốn ứng dụng mạng xã hội (khối màu chung chung, không logo) với cách gắn nhãn khác nhau.
  'which-platforms-label-ai-images': () => {
    const apps: [Tone, string | null, string][] = [
      ['rose', 'AI info', 'M0 -9a9 9 0 1 0 .1 0z'],
      ['cobalt', 'AI-generated', 'M-9 7L0 -9L9 7Z'],
      ['amber', 'Made with AI', 'M-8 -8h16v16h-16z'],
      ['fix', null, 'M-6 -9L9 0L-6 9Z'],
    ];
    return (
      <g>
        {apps.map(([tone, label, glyph], i) => {
          const x = 30 + i * 150;
          return (
            <Panel key={tone} x={x} y={48} w={130} h={262} r={14}>
              <path d={`M${x} ${48 + 14}a14 14 0 0 1 14-14h102a14 14 0 0 1 14 14v30H${x}z`} fill={c(tone)} />
              <g transform={`translate(${x + 22} ${77})`}>
                <path d={glyph} fill={c('sheet')} />
              </g>
              <Bar x={x + 40} y={73} w={70} h={8} color="sheet" />
              <Photo x={x + 12} y={102} w={106} h={120} tone={tone} />
              {label ? (
                <Pill x={x + 12} y={236} text={label} tone={tone} mono={false} size={11} />
              ) : (
                <Pill x={x + 12} y={236} text="no label" kept mono={false} size={11} />
              )}
              <Bar x={x + 12} y={282} w={90} h={7} />
            </Panel>
          );
        })}
      </g>
    );
  },

  // Máy tạo ảnh AI nhả ra một bức ảnh kèm các nhãn metadata treo bằng dây.
  'what-metadata-ai-image-generators-add': () => (
    <g>
      <g transform="translate(36 88)">
        <rect x={6} y={10} width={170} height={170} rx={30} fill={c('line')} opacity={0.6} />
        <rect width={170} height={170} rx={30} fill={c('cobalt')} />
        <Sparkle x={85} y={76} r={42} color="sheet" />
        <Sparkle x={130} y={34} r={12} color="amber" />
        <rect x={40} y={138} width={90} height={12} rx={6} fill={c('film')} opacity={0.5} />
      </g>
      <Arrow x1={220} x2={262} y={172} />
      <g transform="rotate(-4 340 172)">
        <Panel x={272} y={96} w={140} h={150} r={6}>
          <Photo x={282} y={106} w={120} h={110} tone="sky" />
          <Bar x={284} y={226} w={70} h={7} />
        </Panel>
      </g>
      <g fill="none" stroke={c('ink-3')} strokeWidth={1.6} strokeDasharray="3 4">
        <path d="M410 120 C 440 110, 440 80, 450 74" />
        <path d="M414 170 C 440 170, 440 170, 450 170" />
        <path d="M410 222 C 440 230, 440 262, 450 266" />
      </g>
      <TagShape x={448} y={54} w={170} h={40} tone="cobalt" text="claim_generator" />
      <TagShape x={448} y={150} w={170} h={40} tone="amber" text="DigitalSourceType" />
      <TagShape x={448} y={246} w={170} h={40} tone="rose" text="parameters" />
    </g>
  ),

  // Lớp metadata bị bóc đi, nhưng mẫu điểm ảnh (thủy ấn) vẫn nằm trong ảnh.
  'synthid-invisible-ai-watermarks': () => {
    const cells = Array.from({ length: 36 }, (_, i) => i);
    return (
      <g>
        <Panel x={40} y={50} w={272} h={256} r={8}>
          <Photo x={52} y={62} w={248} h={232} tone="rose" r={4} />
        </Panel>
        <g transform="translate(230 238)">
          <circle r={74} fill={c('sheet')} stroke={c('ink')} strokeWidth={8} />
          {cells.map((i) => {
            const col = i % 6;
            const row = Math.floor(i / 6);
            const mark = (col * 7 + row * 3) % 5 === 0;
            return (
              <rect
                key={i}
                x={-48 + col * 16}
                y={-48 + row * 16}
                width={14}
                height={14}
                rx={2}
                fill={c(mark ? 'cobalt' : row > 2 ? 'rose' : 'rose-soft')}
                opacity={mark ? 1 : 0.55}
              />
            );
          })}
          <line x1={54} y1={54} x2={92} y2={92} stroke={c('ink')} strokeWidth={14} strokeLinecap="round" />
        </g>
        <g transform="rotate(10 520 120)">
          <Panel x={420} y={58} w={190} h={110} r={8}>
            <text x={436} y={88} fontFamily={MONO} fontSize={14} fontWeight={700} fill={c('ink-2')}>
              metadata
            </text>
            <Pill x={436} y={100} text="C2PA · XMP" strike size={12} />
            <Bar x={436} y={142} w={120} h={7} />
          </Panel>
        </g>
        <path d="M410 196c30-10 54-20 70-46" fill="none" stroke={c('ink-3')} strokeWidth={2} strokeDasharray="4 6" strokeLinecap="round" />
        <Pill x={392} y={238} text="SynthID stays" kept size={14} />
      </g>
    );
  },

  // Bảng cài đặt của trình chỉnh ảnh: công tắc Content Credentials đang tắt.
  'turn-off-content-credentials-photoshop-lightroom': () => (
    <g>
      <Window x={24} y={30} w={592} h={300} dark>
        <rect x={34} y={68} width={34} height={250} rx={8} fill={c('ink-2')} opacity={0.3} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={42} y={80 + i * 40} width={18} height={18} rx={4} fill={c('film-hole')} opacity={i === 2 ? 0.9 : 0.35} />
        ))}
        <Photo x={82} y={70} w={260} h={246} tone="sky" r={6} />
        <rect x={356} y={68} width={248} height={250} rx={10} fill={c('sheet')} />
        <text x={374} y={98} fontFamily={SANS} fontSize={14} fontWeight={800} fill={c('ink')}>
          Content Credentials
        </text>
        <rect x={554} y={84} width={40} height={22} rx={11} fill={c('line')} />
        <circle cx={565} cy={95} r={8} fill={c('sheet')} stroke={c('ink-3')} strokeWidth={1} />
        <text x={374} y={120} fontFamily={MONO} fontSize={12} fill={c('rose')}>
          off
        </text>
        {['Generative Fill', 'Export'].map((label, i) => (
          <g key={label}>
            <line x1={372} y1={140 + i * 70} x2={588} y2={140 + i * 70} stroke={c('line')} />
            <text x={374} y={166 + i * 70} fontFamily={SANS} fontSize={13} fontWeight={600} fill={c('ink-2')}>
              {label}
            </text>
            <Bar x={374} y={180 + i * 70} w={200} h={6} />
            <Bar x={374} y={180 + i * 70} w={90 + i * 50} h={6} color="cobalt" />
            <circle cx={464 + i * 50} cy={183 + i * 70} r={7} fill={c('sheet')} stroke={c('cobalt')} strokeWidth={2} />
          </g>
        ))}
        <Pill x={374} y={274} text="c2pa.edited" strike size={12} />
      </Window>
    </g>
  ),

  // Ba đường chia sẻ: đăng bảng tin / gửi trong chat thì EXIF bị xóa, gửi dạng tệp thì vẫn còn.
  'which-platforms-strip-photo-metadata': () => {
    const lanes: [string, IconName, string, Tone, boolean][] = [
      ['feed post', 'photo', 'EXIF stripped', 'fix', true],
      ['chat photo', 'sparkles', 'EXIF stripped', 'fix', true],
      ['sent as file', 'document', 'EXIF kept', 'rose', false],
    ];
    return (
      <g>
        {lanes.map(([label, icon, result, tone, ok], i) => {
          const y = 44 + i * 98;
          return (
            <g key={label}>
              <Panel x={30} y={y} w={120} h={76} r={8}>
                <Photo x={38} y={y + 8} w={104} h={60} tone="cobalt" />
              </Panel>
              <Arrow x1={164} x2={216} y={y + 38} color="ink-3" />
              <g transform={`translate(232 ${y + 6})`}>
                <rect width={64} height={64} rx={18} fill={c(`${tone}-soft`)} />
                <Glyph name={icon} x={18} y={18} size={28} color={tone} />
              </g>
              <text x={312} y={y + 44} fontFamily={SANS} fontSize={15} fontWeight={700} fill={c('ink-2')}>
                {label}
              </text>
              <Arrow x1={418} x2={448} y={y + 38} color="ink-3" />
              {ok ? <Pill x={460} y={y + 23} text={result} kept size={12} /> : <Pill x={460} y={y + 23} text={result} tone="rose" size={12} />}
            </g>
          );
        })}
      </g>
    );
  },

  // Hai điện thoại (đảo đen kiểu iPhone, lỗ camera kiểu Android) mở bảng thông tin ảnh.
  'view-remove-metadata-iphone-android': () => {
    const sheet = (x: number, tone: Tone) => (
      <g>
        <Photo x={x + 14} y={64} w={152} h={104} tone={tone} r={8} />
        <rect x={x + 10} y={178} width={160} height={132} rx={14} fill={c('wash')} />
        <rect x={x + 22} y={190} width={64} height={46} rx={8} fill={c('fix-soft')} />
        <path d={`M${x + 54} 222c-6-8-10-12-10-18a10 10 0 0 1 20 0c0 6-4 10-10 18z`} fill={c('rose')} />
        <Bar x={x + 96} y={198} w={62} h={7} color="line" />
        <Bar x={x + 96} y={212} w={44} h={7} />
        <Pill x={x + 22} y={250} text="Location" tone="rose" mono={false} size={11} strike />
        <Bar x={x + 22} y={286} w={110} h={7} />
      </g>
    );
    return (
      <g>
        <circle cx={320} cy={190} r={130} fill={c('cobalt-soft')} opacity={0.6} />
        <Phone x={110} y={26} w={180} h={312} notch="island">
          {sheet(110, 'sky')}
        </Phone>
        <Phone x={350} y={26} w={180} h={312} notch="hole">
          {sheet(350, 'fix')}
        </Phone>
      </g>
    );
  },

  // Máy ảnh và bảng các trường EXIF.
  'what-is-exif-data': () => (
    <g>
      <g transform="translate(40 92)">
        <rect x={6} y={8} width={230} height={160} rx={22} fill={c('line')} opacity={0.6} />
        <path d="M60 0h70l14 22h-98z" fill={c('ink')} />
        <rect y={18} width={230} height={150} rx={22} fill={c('ink')} />
        <rect x={20} y={32} width={30} height={14} rx={4} fill={c('amber')} />
        <circle cx={130} cy={96} r={56} fill={c('ink-2')} />
        <circle cx={130} cy={96} r={42} fill={c('film')} />
        <circle cx={130} cy={96} r={26} fill={c('sky')} opacity={0.7} />
        <circle cx={120} cy={86} r={8} fill={c('sheet')} opacity={0.7} />
        <circle cx={204} cy={44} r={8} fill={c('rose')} />
      </g>
      <Panel x={312} y={40} w={292} h={276} r={12}>
        <text x={332} y={72} fontFamily={SANS} fontSize={16} fontWeight={800} fill={c('ink')}>
          EXIF
        </text>
        {[
          ['Make', 'Canon'],
          ['Model', 'EOS R6'],
          ['FNumber', 'f/2.8'],
          ['ExposureTime', '1/250'],
          ['ISO', '100'],
        ].map(([k, v], i) => (
          <g key={k}>
            <line x1={330} y1={88 + i * 44} x2={586} y2={88 + i * 44} stroke={c('line')} />
            <text x={332} y={116 + i * 44} fontFamily={MONO} fontSize={14} fill={c('ink-3')}>
              {k}
            </text>
            <text x={584} y={116 + i * 44} textAnchor="end" fontFamily={MONO} fontSize={14} fontWeight={700} fill={c('sky')}>
              {v}
            </text>
          </g>
        ))}
      </Panel>
    </g>
  ),

  // Khung chat: yêu cầu tạo ảnh → ảnh trả về mang dấu cr và thủy ấn điểm ảnh.
  'chatgpt-gemini-image-metadata': () => (
    <g>
      <Panel x={30} y={28} w={380} h={304} r={16}>
        <rect x={180} y={48} width={210} height={44} rx={16} fill={c('cobalt-soft')} />
        <Bar x={198} y={62} w={160} h={8} color="cobalt" />
        <Bar x={198} y={76} w={100} h={6} color="cobalt" />
        <circle cx={66} cy={126} r={18} fill={c('cobalt')} />
        <Sparkle x={66} y={126} r={10} color="sheet" />
        <rect x={94} y={108} width={290} height={206} rx={16} fill={c('wash')} />
        <Photo x={108} y={122} w={262} h={150} tone="cobalt" r={10} />
        <g transform="translate(340 140)">
          <circle r={17} fill={c('sky')} />
          <text y={6} textAnchor="middle" fontFamily={SANS} fontSize={15} fontWeight={800} fill={c('sheet')}>
            cr
          </text>
        </g>
        <Bar x={108} y={286} w={180} h={8} color="line" />
      </Panel>
      <Pill x={434} y={98} text="claim_generator" strike size={13} />
      <Pill x={434} y={150} text="c2pa.created" strike size={13} />
      <Pill x={434} y={222} text="SynthID (pixels)" kept size={13} />
      <Sparkle x={590} y={56} r={14} color="amber" />
    </g>
  ),

  // Hộp thoại thuộc tính tệp trên máy tính, nút "Remove properties".
  'remove-metadata-windows-mac': () => (
    <g>
      <Window x={390} y={34} w={226} h={210} title="Get Info">
        <Photo x={406} y={74} w={194} h={86} tone="sky" />
        <Bar x={406} y={172} w={120} h={8} color="line" />
        <Bar x={406} y={186} w={84} h={7} />
        <Pill x={406} y={204} text="Location" tone="rose" mono={false} size={11} strike />
      </Window>
      <Window x={36} y={60} w={330} h={266} title="Properties">
        <g fontFamily={SANS} fontSize={12} fontWeight={600}>
          <text x={56} y={110} fill={c('ink-3')}>
            General
          </text>
          <text x={118} y={110} fill={c('cobalt')}>
            Details
          </text>
        </g>
        <rect x={118} y={116} width={46} height={3} rx={1.5} fill={c('cobalt')} />
        {['GPS', 'Camera', 'Date taken', 'Author'].map((label, i) => (
          <g key={label}>
            <rect x={56} y={134 + i * 30} width={16} height={16} rx={4} fill={c('cobalt')} />
            <path d={`M59 ${142 + i * 30}l3 3 6-7`} fill="none" stroke={c('sheet')} strokeWidth={2} strokeLinecap="round" />
            <text x={82} y={147 + i * 30} fontFamily={MONO} fontSize={13} fill={c('ink-2')}>
              {label}
            </text>
            <Bar x={190} y={140 + i * 30} w={130 - i * 18} h={7} />
          </g>
        ))}
        <rect x={56} y={268} width={290} height={36} rx={18} fill={c('cobalt')} />
        <text x={201} y={291} textAnchor="middle" fontFamily={SANS} fontSize={13} fontWeight={700} fill={c('sheet')}>
          Remove Properties
        </text>
      </Window>
    </g>
  ),

  // Trình duyệt: ảnh bên trái, cây metadata tìm thấy bên phải.
  'image-metadata-viewer-online': () => (
    <g>
      <Window x={24} y={26} w={592} h={308}>
        <rect x={120} y={7} width={300} height={15} rx={7.5} fill={c('sheet')} />
        <Glyph name="lock" x={128} y={9} size={11} color="fix" width={2.4} />
        <Bar x={144} y={11} w={140} h={7} color="line" />
        <rect x={42} y={70} width={250} height={246} rx={12} fill={c('wash')} stroke={c('line')} strokeDasharray="6 6" />
        <Photo x={58} y={86} w={218} h={170} tone="cobalt" r={8} />
        <Bar x={98} y={276} w={140} h={9} color="line" />
        {[
          ['EXIF', 'sky', ['Model', 'ISO']],
          ['GPS', 'rose', ['Latitude']],
          ['XMP', 'cobalt', ['CreatorTool']],
          ['C2PA', 'amber', ['manifest']],
        ].map(([name, tone, rows], i, all) => {
          const y = 74 + all.slice(0, i).reduce((n, a) => n + 34 + (a[2] as string[]).length * 22, 0);
          return (
            <g key={name as string}>
              <path d={`M318 ${y + 4}l6 6 6-6`} fill="none" stroke={c('ink-3')} strokeWidth={2} strokeLinecap="round" />
              <text x={338} y={y + 14} fontFamily={MONO} fontSize={14} fontWeight={700} fill={c(tone as string)}>
                {name as string}
              </text>
              {(rows as string[]).map((r, j) => (
                <g key={r}>
                  <text x={354} y={y + 38 + j * 22} fontFamily={MONO} fontSize={12.5} fill={c('ink-3')}>
                    {r}
                  </text>
                  <Bar x={460} y={y + 30 + j * 22} w={120 - j * 30} h={8} color={`${tone as string}-soft`} />
                </g>
              ))}
            </g>
          );
        })}
      </Window>
    </g>
  ),

  // Đoạn XMP thật, dòng DigitalSourceType được tô sáng và gắn nhãn AI.
  'iptc-digitalsourcetype-ai': () => {
    const lines: [number, string, string?][] = [
      [0, '<rdf:Description'],
      [1, 'xmlns:Iptc4xmpExt="…"'],
      [1, 'Iptc4xmpExt:', 'hl'],
      [2, 'DigitalSourceType=', 'hl'],
      [2, '"…/trainedAlgorithmicMedia"', 'val'],
      [0, '/>'],
    ];
    return (
      <g>
        <rect x={34} y={42} width={430} height={276} rx={14} fill={c('line')} opacity={0.6} transform="translate(5 7)" />
        <rect x={34} y={42} width={430} height={276} rx={14} fill={c('film')} />
        {['rose', 'amber', 'fix'].map((t, i) => (
          <circle key={t} cx={56 + i * 14} cy={62} r={4.2} fill={c(t)} opacity={0.85} />
        ))}
        {lines.map(([indent, text, kind], i) => {
          const y = 104 + i * 34;
          return (
            <g key={i}>
              <text x={54} y={y} fontFamily={MONO} fontSize={12} fill={c('ink-3')}>
                {i + 1}
              </text>
              {kind === 'hl' && i === 2 && <rect x={74} y={y - 22} width={378} height={64} rx={6} fill={c('amber')} opacity={0.22} />}
              <text x={80 + indent * 20} y={y} fontFamily={MONO} fontSize={15} fontWeight={kind ? 700 : 400} fill={c(kind === 'val' ? 'rose' : kind ? 'amber' : 'film-hole')}>
                {text}
              </text>
            </g>
          );
        })}
        <TagShape x={470} y={150} w={140} h={48} rot={-8} tone="rose" text="AI image" />
        <path d="M454 190c10 0 14-6 18-12" fill="none" stroke={c('rose')} strokeWidth={2} strokeLinecap="round" />
      </g>
    );
  },

  // Trước / sau: cùng một bức ảnh, phần dữ liệu điểm ảnh giữ nguyên độ dài, chỉ khối metadata bị cắt.
  'remove-metadata-without-losing-quality': () => (
    <g>
      <Panel x={40} y={34} w={560} h={176} r={12}>
        <Photo x={54} y={48} w={264} h={148} tone="fix" r={6} />
        <Photo x={322} y={48} w={264} h={148} tone="fix" r={6} />
        <rect x={316} y={40} width={10} height={164} rx={5} fill={c('sheet')} stroke={c('line')} />
        <circle cx={321} cy={122} r={18} fill={c('sheet')} stroke={c('line')} />
        <text x={321} y={128} textAnchor="middle" fontFamily={SANS} fontSize={17} fontWeight={800} fill={c('fix')}>
          =
        </text>
      </Panel>
      <g fontFamily={MONO} fontSize={12} fontWeight={700}>
        <rect x={40} y={238} width={70} height={30} rx={6} fill={c('rose-soft')} />
        <text x={75} y={258} textAnchor="middle" fill={c('rose')}>
          EXIF
        </text>
        <line x1={50} y1={253} x2={100} y2={253} stroke={c('rose')} strokeWidth={2} />
        <rect x={114} y={238} width={60} height={30} rx={6} fill={c('rose-soft')} />
        <text x={144} y={258} textAnchor="middle" fill={c('rose')}>
          XMP
        </text>
        <line x1={122} y1={253} x2={166} y2={253} stroke={c('rose')} strokeWidth={2} />
        <rect x={178} y={238} width={422} height={30} rx={6} fill={c('fix-soft')} />
        <text x={389} y={258} textAnchor="middle" fill={c('fix')}>
          image data (unchanged)
        </text>
        <rect x={178} y={290} width={422} height={30} rx={6} fill={c('fix-soft')} stroke={c('fix')} strokeWidth={1.5} />
        <text x={389} y={310} textAnchor="middle" fill={c('fix')}>
          image data (unchanged)
        </text>
        <path d="M389 270v16" stroke={c('fix')} strokeWidth={2} strokeDasharray="3 3" />
      </g>
    </g>
  ),
};

export function GuideIllustration({ slug, className }: { slug: GuideSlug; className?: string }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width={W} height={H} fill={c('paper')} />
      {SCENES[slug]()}
    </svg>
  );
}
