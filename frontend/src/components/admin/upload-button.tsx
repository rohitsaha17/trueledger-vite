import { useRef, useState } from "react";
import { uploadFile } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const MAX_BYTES = 50 * 1024 * 1024;

type UploadButtonProps = {
  /** e.g. "image/*" or "video/*" */
  accept: string;
  label?: string;
} & (
  | { multiple?: false; onUploaded: (url: string) => void | Promise<void> }
  /** Several files at once; the callback gets every url in the order picked */
  | { multiple: true; onUploaded: (urls: string[]) => void | Promise<void> }
);

/** Picks a file (or files), uploads it to the backend and hands back its stored url(s). */
export function UploadButton({ accept, label = "Upload", ...props }: UploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFiles(fileList: FileList | null) {
    const files = [...(fileList ?? [])];
    if (files.length === 0) return;
    const tooBig = files.find((file) => file.size > MAX_BYTES);
    if (tooBig) {
      alert(`"${tooBig.name}" is too large — the limit is 50 MB.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of files) urls.push(await uploadFile(file));
      if (props.multiple) await props.onUploaded(urls);
      else await props.onUploaded(urls[0]);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={props.multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <Button
        type="button"
        size="sm"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="size-3.5" />
        {uploading ? "Uploading..." : label}
      </Button>
    </>
  );
}
