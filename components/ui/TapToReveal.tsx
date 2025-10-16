"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TapToRevealProps {
  coverEmoji?: string;
  revealContent: string;
  title?: string;
}

export default function TapToReveal({
  coverEmoji = "🎁",
  revealContent,
  title = "Tap to reveal!",
}: TapToRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="relative">
      {!isRevealed ? (
        <motion.button
          onClick={() => setIsRevealed(true)}
          className="w-full bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-2xl p-8 shadow-lg active:scale-95 transition-transform"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="text-6xl mb-3"
            animate={{
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {coverEmoji}
          </motion.div>
          <p className="text-lg font-medium">{title}</p>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-4xl mb-3">🎉</div>
          <p className="text-lg font-medium">{revealContent}</p>
          <button
            onClick={() => setIsRevealed(false)}
            className="mt-4 text-sm underline opacity-70 hover:opacity-100"
          >
            Hide again
          </button>
        </motion.div>
      )}
    </div>
  );
}


