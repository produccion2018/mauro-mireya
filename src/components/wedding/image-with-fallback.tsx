import { useState, type ImgHTMLAttributes } from "react";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback: string;
};

export function ImageWithFallback({ fallback, src, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      {...props}
      src={currentSrc}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
