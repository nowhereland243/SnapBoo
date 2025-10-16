// Image-based confetti using Labubu PNG images
import { getAllCharacters } from "./labubu-config";

export function labubuImageConfetti() {
  const characters = getAllCharacters();
  const container = document.createElement("div");
  
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  `;
  
  document.body.appendChild(container);

  // Create 30 falling Labubu images
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const character = characters[Math.floor(Math.random() * characters.length)];
      const img = document.createElement("img");
      
      img.src = character.path;
      
      const size = 40 + Math.random() * 40; // Random size 40-80px
      const startX = Math.random() * 100; // Random horizontal position
      const duration = 2 + Math.random() * 2; // Fall duration 2-4s
      const rotation = Math.random() * 360; // Random rotation
      const delay = Math.random() * 0.3; // Stagger the start
      
      img.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        object-fit: contain;
        left: ${startX}vw;
        top: -100px;
        animation: labubuFall ${duration}s ease-in ${delay}s;
        animation-fill-mode: forwards;
        transform: rotate(${rotation}deg);
        opacity: 0;
      `;
      
      container.appendChild(img);
    }, i * 50); // Stagger creation
  }

  // Remove container after all animations complete
  setTimeout(() => {
    container.remove();
  }, 5000);
}

export function labubuHeartRain() {
  const characters = getAllCharacters();
  const container = document.createElement("div");
  
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  `;
  
  document.body.appendChild(container);

  // Create 20 falling hearts
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const character = characters[Math.floor(Math.random() * characters.length)];
      const img = document.createElement("img");
      
      img.src = character.path;
      
      const size = 50 + Math.random() * 30;
      const startX = Math.random() * 100;
      const duration = 2.5 + Math.random() * 1.5;
      
      img.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        object-fit: contain;
        left: ${startX}vw;
        top: -100px;
        animation: labubuFall ${duration}s ease-in;
        animation-fill-mode: forwards;
        opacity: 0;
        filter: drop-shadow(0 0 10px rgba(255, 105, 180, 0.5));
      `;
      
      container.appendChild(img);
    }, i * 80);
  }

  setTimeout(() => {
    container.remove();
  }, 5000);
}

// Add CSS animation to globals.css
export const confettiStyles = `
@keyframes labubuFall {
  0% {
    transform: translateY(0) rotate(0deg) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(10vh) rotate(36deg) scale(1);
  }
  100% {
    transform: translateY(110vh) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}
`;
