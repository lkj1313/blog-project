"use client";

import { useEffect, useState } from "react";

export function useBannerCarousel(
  banners: any[],
  autoPlayInterval: number = 3000
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // 첫 로드 상태 관리
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 자동 슬라이드 타이머
  useEffect(() => {
    if (banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [banners.length, autoPlayInterval]);

  // 수동 인덱스 변경
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // 다음/이전 슬라이드
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return {
    currentIndex,
    isFirstLoad,
    goToIndex,
    goToNext,
    goToPrev,
  };
}
