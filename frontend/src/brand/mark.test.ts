import { describe, expect, it } from 'vitest';
import { MARK_SVG } from './mark';

const favicon = Object.values(import.meta.glob<string>('/public/favicon.svg', { query: '?raw', import: 'default', eager: true }))[0];

describe('Dấu thương hiệu', () => {
  it('public/favicon.svg khớp với src/brand/mark.ts và không mang metadata', () => {
    expect(favicon?.trim()).toBe(MARK_SVG);
    expect(favicon).not.toMatch(/<metadata|c2pa/i);
  });
});
