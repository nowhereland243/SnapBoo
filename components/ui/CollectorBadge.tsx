"use client";

import { motion } from "framer-motion";

interface CollectorBadgeProps {
  level?: "bronze" | "silver" | "gold" | "platinum";
  title?: string;
  description?: string;
}

export default function CollectorBadge({
  level = "silver",
  title = "Early Supporter",
  description = "You're one of the first 200 visitors!",
}: CollectorBadgeProps) {
  const colors = {
    bronze: "from-orange-400 to-amber-600",
    silver: "from-gray-300 to-gray-500",
    gold: "from-yellow-400 to-yellow-600",
    platinum: "from-purple-400 to-pink-500",
  };

  const badges = {
    bronze: "🥉",
    silver: "🥈",
    gold: "🥇",
    platinum: "💎",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div
        className={`bg-gradient-to-br ${colors[level]} rounded-2xl p-6 shadow-2xl text-white relative overflow-hidden`}
      >
        {/* Sparkle effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="text-5xl mb-2"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {badges[level]}
          </motion.div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full" />
      </div>
    </motion.div>
  );
}


