"use client";

import { ReactNode, useEffect, useRef } from "react";

interface NotebookContainerProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftBgColor?: string;
  rightBgColor?: string;
}

export default function NotebookContainer({
  leftContent,
  rightContent,
  leftBgColor = "#F4E8B8",
  rightBgColor = "#FFFEF7",
}: NotebookContainerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置canvas尺寸
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.height = parent.clientHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // 画装订环
    const ringCount = Math.floor(canvas.height / 80);
    ctx.strokeStyle = "#F5A742";
    ctx.lineWidth = 3;

    for (let i = 0; i < ringCount; i++) {
      const y = 40 + i * 80;
      ctx.beginPath();
      ctx.arc(30, y, 10, 0, Math.PI * 2);
      ctx.stroke();
    }

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F5A742] flex items-center justify-center p-4 md:p-8">
      {/* 装订环 Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 bottom-0 w-[60px] h-full pointer-events-none z-10"
        width={60}
      />

      {/* 笔记本页面 */}
      <div className="relative flex flex-col lg:flex-row w-full max-w-7xl min-h-[80vh] ml-0 lg:ml-[30px]">
        {/* 左侧：插画区域 */}
        <div
          className="w-full lg:w-1/2 border-[4px] border-black lg:border-r-[2px] p-6 md:p-12 overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: leftBgColor }}
        >
          {leftContent}
        </div>

        {/* 右侧：文本内容区域 */}
        <div
          className="w-full lg:w-1/2 border-[4px] border-black border-t-0 lg:border-t-[4px] lg:border-l-[2px] p-6 md:p-12 overflow-y-auto relative"
          style={{ backgroundColor: rightBgColor }}
        >
          {/* 装订线效果 */}
          <div
            className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-[2px] opacity-20"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #000 0px, #000 2px, transparent 2px, transparent 8px)",
            }}
          />
          <div className="relative z-10">{rightContent}</div>
        </div>
      </div>
    </div>
  );
}
