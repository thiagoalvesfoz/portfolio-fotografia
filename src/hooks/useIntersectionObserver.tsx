'use client'

import { useEffect, useState, RefObject } from 'react';

export function useIntersectionObserver(ref: RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}
