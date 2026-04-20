"use client";
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Đảm bảo threshold luôn là số hợp lệ
  const safeThreshold = typeof threshold === 'number' && isFinite(threshold) ? threshold : 0.15;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element); // Chỉ animate 1 lần
      }
    }, { threshold: safeThreshold });

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeThreshold]);

  return { ref, isVisible };
}
