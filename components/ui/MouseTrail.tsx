"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth > 768) {
      setEnabled(true);
    }

    if (!enabled) return;

    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            initial={{ opacity: 0.8, scale: 1, x: particle.x, y: particle.y }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}


