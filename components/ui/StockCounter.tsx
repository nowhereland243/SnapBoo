"use client";

import { useEffect, useState } from "react";

interface StockCounterProps {
  total?: number;
  sold?: number;
  className?: string;
}

export default function StockCounter({
  total = 100,
  sold = 0,
  className = "",
}: StockCounterProps) {
  const remaining = total - sold;
  const percentage = (remaining / total) * 100;

  // Animation effect
  const [displayCount, setDisplayCount] = useState(total);

  useEffect(() => {
    if (displayCount > remaining) {
      const timer = setTimeout(() => {
        setDisplayCount((prev) => Math.max(prev - 1, remaining));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [displayCount, remaining]);

  // Urgency level
  const getUrgencyColor = () => {
    if (percentage <= 20) return "text-red-600";
    if (percentage <= 50) return "text-orange-600";
    return "text-primary-600";
  };

  const getUrgencyBg = () => {
    if (percentage <= 20) return "bg-red-100";
    if (percentage <= 50) return "bg-orange-100";
    return "bg-primary-100";
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`px-3 py-1.5 rounded-full ${getUrgencyBg()} ${getUrgencyColor()} font-semibold text-sm`}
      >
        ⚡ Only {displayCount} of {total} left
      </div>

      {/* Progress bar */}
      <div className="hidden sm:block w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${
            percentage <= 20
              ? "bg-red-500"
              : percentage <= 50
              ? "bg-orange-500"
              : "bg-primary-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}


