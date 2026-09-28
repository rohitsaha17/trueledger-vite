import { useRef, useState } from "react";
import { uploadFile } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const MAX_BYTES = 50 * 1024 * 1024;

interface UploadButtonProps {
  /** e.g. "image/*" or "video/*" */
  accept: string;
  onUploaded: (url: string) => void | Promise<void>;
  label?: string;
}

/** Picks a file, uploads it to the backend and hands back its stored url. */
export function UploadButton({ accept, onUploaded, label = "Upload" }: UploadButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    if (file.size > MAX_BYTES) {
      alert("File is too large — the limit is 50 MB.");
      return;
    }

    setUploading(true);
    try {
      await onUploaded(await uploadFile(file));
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
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
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
