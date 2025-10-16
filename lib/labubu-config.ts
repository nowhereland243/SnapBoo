// Labubu Character Configuration
// 轻松管理所有 Labubu 角色图片

export const labubuCharacters = [
  {
    id: "labubu-01",
    name: "Labubu Classic",
    path: "/images/labubu/labubu-01.png",
    emoji: "🎁", // Fallback emoji
  },
  // 以后添加更多角色，只需复制粘贴下面这段：
  /*
  {
    id: "labubu-02",
    name: "Labubu Happy",
    path: "/images/labubu/labubu-02.png",
    emoji: "💕",
  },
  {
    id: "labubu-03",
    name: "Labubu Cute",
    path: "/images/labubu/labubu-03.png",
    emoji: "✨",
  },
  */
];

// 获取主要角色（可拖拽的那个）
export function getMainCharacter() {
  return labubuCharacters[0];
}

// 获取所有角色（用于礼花效果）
export function getAllCharacters() {
  return labubuCharacters;
}

// 随机获取一个角色
export function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * labubuCharacters.length);
  return labubuCharacters[randomIndex];
}
