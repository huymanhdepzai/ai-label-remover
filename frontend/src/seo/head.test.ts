import { describe, expect, it } from 'vitest';
import { clip } from './head';

describe('Rút gọn title / description theo bề ngang hiển thị', () => {
  it('giữ nguyên chuỗi đủ ngắn', () => {
    expect(clip('Remove EXIF data from photos', 62)).toBe('Remove EXIF data from photos');
  });

  it('cắt ở ranh giới từ, bỏ dấu câu treo và thêm dấu …', () => {
    const out = clip('My real photo got an “AI info” tag on Instagram, Facebook and Threads. Why does that happen?', 62);
    expect(out.endsWith('…')).toBe(true);
    expect([...out].length).toBeLessThanOrEqual(62);
    expect(out).not.toMatch(/[\s,;:]…$/);
    expect(out).toMatch(/\S…$/);
  });

  it('chữ CJK tính gấp đôi bề ngang', () => {
    const ja = '画像のメタデータを削除して、位置情報や痕跡をブラウザ内で安全に取り除く方法を詳しく解説します';
    const out = clip(ja, 62);
    expect(out.endsWith('…')).toBe(true);
    // 30 chữ rộng (60 đơn vị) + dấu … (1 đơn vị) ≤ 62
    expect([...out].length).toBeLessThanOrEqual(31);
    expect([...out].length).toBeGreaterThanOrEqual(29);
  });
});
