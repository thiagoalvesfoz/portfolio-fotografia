'use client'

import { useEffect, useState, RefObject } from 'react';

export function useIntersectionObserver(ref: RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}
