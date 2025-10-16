// Confetti effects for celebrations!
import confetti from "canvas-confetti";

// Labubu emoji confetti 🎊
export function labubuConfetti() {
  const scalar = 2;
  const labubu = confetti.shapeFromText({ text: "🎁", scalar });
  const heart = confetti.shapeFromText({ text: "💕", scalar });
  const star = confetti.shapeFromText({ text: "⭐", scalar });
  const sparkle = confetti.shapeFromText({ text: "✨", scalar });

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    shapes: [labubu, heart, star, sparkle],
    scalar,
  };

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      origin: { y: 0.6 },
    });

    confetti({
      ...defaults,
      particleCount: 20,
      origin: { y: 0.5 },
    });
  };

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

// Rainbow explosion
export function rainbowExplosion() {
  const end = Date.now() + 1 * 1000; // 1 second
  const colors = ["#ec4899", "#a855f7", "#3b82f6", "#06b6d4"];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Star burst (for successful actions)
export function starBurst() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FFD700", "#FFA500", "#FF69B4", "#00CED1"],
  });
}

// Fireworks
export function fireworks() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ["#ec4899", "#a855f7", "#3b82f6"],
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ["#f59e0b", "#10b981", "#f97316"],
    });
  }, 250);
}

// Heart rain (for add to cart)
export function heartRain() {
  const scalar = 3;
  const heart = confetti.shapeFromText({ text: "💖", scalar });

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 1,
    decay: 0.94,
    startVelocity: 20,
    shapes: [heart],
    scalar,
  };

  confetti({
    ...defaults,
    particleCount: 50,
  });
}


