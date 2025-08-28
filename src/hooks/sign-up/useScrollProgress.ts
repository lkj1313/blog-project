import { useState, useEffect, useCallback } from "react";

export function useScrollProgress() {
  const [showFixedProgress, setShowFixedProgress] = useState(false);

  const handleScroll = useCallback(() => {
    const progressSection = document.getElementById("progress-section");

    if (progressSection) {
      const progressRect = progressSection.getBoundingClientRect();
      // 프로그레스바가 화면에서 사라지면 고정 프로그레스바 표시
      setShowFixedProgress(progressRect.bottom < 0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {
    showFixedProgress,
  };
}
