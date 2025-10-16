"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  animationType?: "bounce" | "wiggle" | "pulse" | "pop";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  animationType = "bounce",
  className = "",
  disabled,
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary:
      "bg-black/80 text-white hover:bg-black/90 shadow-lg backdrop-blur-lg",
    outline:
      "border-2 border-white/30 backdrop-blur-lg bg-white/10 hover:bg-white/20 shadow-lg",
    ghost: "text-white hover:bg-white/10 backdrop-blur-md",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  // Animation variants
  const animations = {
    bounce: {
      whileHover: { scale: 1.05, y: -2 },
      whileTap: { scale: 0.95 },
    },
    wiggle: {
      whileHover: {
        rotate: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
      },
      whileTap: { scale: 0.9 },
    },
    pulse: {
      whileHover: {
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.6,
          repeat: Infinity,
        },
      },
      whileTap: { scale: 0.95 },
    },
    pop: {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9, rotate: 5 },
    },
  };

  const currentAnimation = animations[animationType];

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      whileHover={currentAnimation.whileHover}
      whileTap={currentAnimation.whileTap}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <motion.svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </motion.svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
