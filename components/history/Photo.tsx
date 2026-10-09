import Image from "next/image";
import { PhotoIcon } from "./icons";

type PhotoProps = {
  alt: string;
  src?: string;
  sizes?: string;
  className?: string;
  preload?: boolean;
};

export function Photo({
  alt,
  src,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  preload = false,
}: PhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] bg-white ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 border border-line px-6 text-center">
          <PhotoIcon className="h-8 w-8 text-muted" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Foto Placeholder
          </span>
          <span className="max-w-[30ch] text-[12px] leading-5 text-muted">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}