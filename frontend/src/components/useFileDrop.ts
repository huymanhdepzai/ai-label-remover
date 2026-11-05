import { useCallback, useRef, useState, type ChangeEvent, type DragEvent, type MouseEvent } from 'react';

/**
 * Kéo-thả / chọn tệp tối giản (thay cho react-dropzone + file-selector, nhẹ hơn ~60 KB).
 * - Bấm vào khung → mở hộp chọn tệp; thả tệp hoặc cả thư mục (duyệt đệ quy) vào khung.
 * - Lọc theo `accept` (MIME → đuôi tệp): tệp khớp MIME hoặc đuôi được nhận, còn lại trả về danh sách bị từ chối.
 */
export function useFileDrop({ accept, onDrop }: { accept: Record<string, string[]>; onDrop(accepted: File[], rejected: File[]): void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const depth = useRef(0);
  const [isDragActive, setDragActive] = useState(false);

  const mimes = Object.keys(accept);
  const exts = Object.values(accept).flat();

  const deliver = useCallback(
    (files: File[]) => {
      if (!files.length) return;
      const ok: File[] = [];
      const bad: File[] = [];
      for (const f of files) {
        const accepted = f.type in accept || Object.values(accept).some((list) => list.some((e) => f.name.toLowerCase().endsWith(e)));
        (accepted ? ok : bad).push(f);
      }
      onDrop(ok, bad);
    },
    [onDrop, accept],
  );

  const hasFiles = (e: DragEvent) => Array.from(e.dataTransfer?.types ?? []).includes('Files');

  const rootProps = {
    onClick: (e: MouseEvent) => {
      // Không mở lại khi chính ô input nhận click (tránh mở hai lần).
      if (e.target !== inputRef.current) inputRef.current?.click();
    },
    onDragEnter: (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      depth.current++;
      setDragActive(true);
    },
    onDragOver: (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    onDragLeave: (e: DragEvent) => {
      if (!hasFiles(e)) return;
      depth.current = Math.max(0, depth.current - 1);
      if (depth.current === 0) setDragActive(false);
    },
    onDrop: (e: DragEvent) => {
      if (!hasFiles(e)) return;
      e.preventDefault();
      depth.current = 0;
      setDragActive(false);
      void filesFromDataTransfer(e.dataTransfer).then(deliver);
    },
  };

  const inputProps = {
    ref: inputRef,
    type: 'file' as const,
    multiple: true,
    accept: [...mimes, ...exts].join(','),
    tabIndex: -1,
    style: { display: 'none' },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      deliver(Array.from(e.target.files ?? []));
      e.target.value = ''; // cho phép chọn lại đúng tệp đó
    },
  };

  return { rootProps, inputProps, isDragActive, open: () => inputRef.current?.click() };
}

/** Lấy mọi tệp từ một lần thả, kể cả tệp nằm trong thư mục con. */
async function filesFromDataTransfer(dt: DataTransfer): Promise<File[]> {
  const entries = Array.from(dt.items ?? [])
    .filter((i) => i.kind === 'file')
    .map((i) => i.webkitGetAsEntry?.())
    .filter((e): e is FileSystemEntry => Boolean(e));
  if (!entries.length) return Array.from(dt.files ?? []);
  const nested = await Promise.all(entries.map(walk));
  return nested.flat();
}

async function walk(entry: FileSystemEntry): Promise<File[]> {
  if (entry.isFile) {
    return new Promise((resolve) => (entry as FileSystemFileEntry).file((f) => resolve([f]), () => resolve([])));
  }
  if (!entry.isDirectory) return [];
  const reader = (entry as FileSystemDirectoryEntry).createReader();
  const children: FileSystemEntry[] = [];
  // readEntries trả về từng đợt (tối đa ~100 mục) → đọc tới khi hết.
  for (;;) {
    const batch = await new Promise<FileSystemEntry[]>((resolve) => reader.readEntries(resolve, () => resolve([])));
    if (!batch.length) break;
    children.push(...batch);
  }
  return (await Promise.all(children.map(walk))).flat();
}
