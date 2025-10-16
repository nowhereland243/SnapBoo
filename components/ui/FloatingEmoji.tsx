"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const emojis = ["🎁", "💕", "⭐", "✨", "🎀", "🌸", "💖", "🎊"];

export default function FloatingEmoji() {
  const [floaters, setFloaters] = useState<
    { id: number; emoji: string; x: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newFloaters = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFloaters(newFloaters);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floaters.map((floater) => (
        <motion.div
          key={floater.id}
          className="absolute text-4xl opacity-20"
          initial={{ y: "100vh", x: `${floater.x}vw` }}
          animate={{
            y: "-20vh",
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: floater.delay,
            ease: "linear",
          }}
        >
          {floater.emoji}
        </motion.div>
      ))}
    </div>
  );
}


