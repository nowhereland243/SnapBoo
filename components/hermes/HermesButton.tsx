"use client";

import { ReactNode } from "react";

interface HermesButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  size?: "md" | "lg";
}

export default function HermesButton({
  children,
  variant = "primary",
  onClick,
  href,
  size = "lg",
}: HermesButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-3
    border-[4px] border-black
    font-black uppercase tracking-wide
    transition-all duration-200
    hover:translate-x-[2px] hover:translate-y-[2px]
    active:translate-x-[4px] active:translate-y-[4px]
    ${
      variant === "primary"
        ? "bg-[#FFF066] text-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] active:shadow-none"
        : "bg-white text-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] active:shadow-none"
    }
    ${size === "lg" ? "px-10 py-4 text-lg" : "px-8 py-3 text-base"}
  `;

  const ellipsis = <span className="text-2xl leading-none">...</span>;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={{
          fontFamily: '"Arial Black", "Arial Bold", sans-serif',
          letterSpacing: "0.5px",
        }}
      >
        {children}
        {ellipsis}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      style={{
        fontFamily: '"Arial Black", "Arial Bold", sans-serif',
        letterSpacing: "0.5px",
      }}
    >
      {children}
      {ellipsis}
    </button>
  );
}
