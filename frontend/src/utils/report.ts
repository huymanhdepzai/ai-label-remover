import type { Tone } from '../components/ui';
import type { AiVerdict, AnalysisReport, MetadataField } from '../types';

export interface PrivacySummary {
  location: MetadataField[];
  personal: MetadataField[];
  time: MetadataField[];
}

export function privacySummary(report: AnalysisReport): PrivacySummary {
  return {
    location: report.fields.filter((f) => f.category === 'location'),
    personal: report.fields.filter((f) => f.category === 'personal'),
    time: report.fields.filter((f) => f.category === 'time'),
  };
}

export const VERDICT_TONE: Record<AiVerdict, Tone> = {
  detected: 'danger',
  review: 'warning',
  none: 'success',
};

/** Nhóm trường theo nguồn (EXIF · GPS, XMP · dc, ...) để hiển thị bảng metadata đầy đủ. */
export function groupFields(fields: MetadataField[]): [string, MetadataField[]][] {
  const map = new Map<string, MetadataField[]>();
  for (const f of fields) {
    const list = map.get(f.group);
    if (list) list.push(f);
    else map.set(f.group, [f]);
  }
  return [...map.entries()];
}
