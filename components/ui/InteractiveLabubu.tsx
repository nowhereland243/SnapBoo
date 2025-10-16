"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { labubuConfetti, heartRain } from "@/lib/confetti";
import { getMainCharacter } from "@/lib/labubu-config";

export default function InteractiveLabubu() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("Tap me!");
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate based on drag position
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const messages = [
    "Tap me!",
    "Yay! 🎉",
    "Again! ✨",
    "More! 💖",
    "Keep going! 🌈",
    "You're awesome! 🚀",
    "Labubu loves you! 💝",
  ];

  const handleTap = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setMessage(messages[Math.min(newCount, messages.length - 1)]);

    // Special effects at milestones
    if (newCount === 3) {
      labubuConfetti();
    }
    if (newCount === 5) {
      heartRain();
    }
    if (newCount >= 7) {
      labubuConfetti();
      heartRain();
    }
  };

  const mainCharacter = getMainCharacter();

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <div ref={constraintsRef} className="absolute inset-0" />

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        whileTap={{ scale: 0.95 }}
        style={{ x, y, rotateX, rotateY }}
        onTap={handleTap}
        className="relative cursor-grab active:cursor-grabbing"
      >
        {/* Labubu character - Now using your custom image! */}
        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="relative w-32 h-32"
        >
          <Image
            src={mainCharacter.path}
            alt={mainCharacter.name}
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Speech bubble */}
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap"
        >
          {message}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
        </motion.div>

        {/* Click counter badge */}
        {clickCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          >
            {clickCount}
          </motion.div>
        )}
      </motion.div>

      {/* Instructions */}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <p className="text-sm text-gray-500">
          Drag me around or tap for surprises! ✨
        </p>
      </div>
    </div>
  );
}
