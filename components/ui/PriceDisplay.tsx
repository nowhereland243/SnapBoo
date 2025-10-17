interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showDiscount?: boolean;
  className?: string;
}

export default function PriceDisplay({
  price,
  compareAtPrice,
  currency = "USD",
  size = "md",
  showDiscount = true,
  className = "",
}: PriceDisplayProps) {
  const hasDiscount = compareAtPrice && compareAtPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const currencySymbol = currency === "USD" ? "$" : currency;

  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      {/* Current price */}
      <div className={`font-bold text-primary-600 ${sizeClasses[size]}`}>
        {currencySymbol}
        {price.toFixed(2)}
      </div>

      {/* Original price (strikethrough) */}
      {hasDiscount && (
        <div className="flex items-baseline gap-2">
          <div
            className={`text-gray-400 line-through ${
              size === "xl"
                ? "text-xl"
                : size === "lg"
                ? "text-lg"
                : size === "md"
                ? "text-base"
                : "text-sm"
            }`}
          >
            {currencySymbol}
            {compareAtPrice.toFixed(2)}
          </div>

          {/* Discount badge */}
          {showDiscount && (
            <span className="px-2 py-0.5 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
              Save {discountPercent}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}


