"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
  className?: string;
  containerClassName?: string;
}

export default function ImageMagnifier({
  src,
  alt,
  magnifierHeight = 200,
  magnifierWidth = 200,
  zoomLevel = 2.5,
  className = "",
  containerClassName = "",
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[naturalWidth, naturalHeight], setNaturalSize] = useState([0, 0]);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load the image to get its natural dimensions
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      setNaturalSize([img.naturalWidth, img.naturalHeight]);
    };
  }, [src]);

  const handleMouseEnter = () => {
    const elem = imgRef.current;
    if (elem) {
      const { width, height } = elem.getBoundingClientRect();
      setSize([width, height]);
      setShowMagnifier(true);
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const elem = imgRef.current;
    if (!elem) return;

    const { top, left } = elem.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setXY([x, y]);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  // Calculate the scale to maintain aspect ratio
  const aspectRatio = naturalWidth / naturalHeight;
  const containerAspectRatio = imgWidth / imgHeight;

  let displayWidth = imgWidth;
  let displayHeight = imgHeight;
  let offsetX = 0;
  let offsetY = 0;

  // For object-cover behavior, we need to calculate the actual image display area
  if (aspectRatio > containerAspectRatio) {
    // Image is wider - height fills, width is cropped
    displayHeight = imgHeight;
    displayWidth = imgHeight * aspectRatio;
    offsetX = (displayWidth - imgWidth) / 2;
  } else {
    // Image is taller - width fills, height is cropped
    displayWidth = imgWidth;
    displayHeight = imgWidth / aspectRatio;
    offsetY = (displayHeight - imgHeight) / 2;
  }

  return (
    <div
      ref={imgRef}
      className={`relative ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={src} alt={alt} fill className={className} />

      {showMagnifier && naturalWidth > 0 && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2}px`,
            opacity: "1",
            border: "4px solid #000",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${displayWidth * zoomLevel}px ${
              displayHeight * zoomLevel
            }px`,
            backgroundPositionX: `${
              -(x + offsetX) * zoomLevel + magnifierWidth / 2
            }px`,
            backgroundPositionY: `${
              -(y + offsetY) * zoomLevel + magnifierHeight / 2
            }px`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            borderRadius: "50%",
            zIndex: 50,
          }}
        />
      )}
    </div>
  );
}
