// 🔊 音效管理工具
export class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private enabled: boolean = true;

  constructor() {
    if (typeof window !== "undefined") {
      // 预加载音效
      this.preload("click", "/sounds/click.mp3");
      this.preload("pop", "/sounds/click.mp3"); // 使用同一个文件
      this.preload("success", "/sounds/click.mp3");
      this.preload("magic", "/sounds/click.mp3");
    }
  }

  preload(name: string, path: string) {
    try {
      const audio = new Audio(path);
      audio.preload = "auto";
      audio.volume = 0.5; // 默认音量 50%
      this.sounds.set(name, audio);
    } catch (error) {
      console.warn(`Failed to preload sound: ${name}`, error);
    }
  }

  play(name: string, volume: number = 0.5) {
    if (!this.enabled) return;

    const sound = this.sounds.get(name);
    if (sound) {
      try {
        // 克隆音频以支持快速连续播放
        const clone = sound.cloneNode() as HTMLAudioElement;
        clone.volume = volume;
        clone.play().catch((err) => {
          console.warn(`Failed to play sound: ${name}`, err);
        });
      } catch (error) {
        console.warn(`Error playing sound: ${name}`, error);
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setVolume(name: string, volume: number) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

// 创建单例
export const soundManager =
  typeof window !== "undefined" ? new SoundManager() : null;

// 便捷函数
export function playSound(name: string, volume?: number) {
  soundManager?.play(name, volume);
}


