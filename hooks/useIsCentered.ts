import { useState, useEffect } from "react";

// Custom hook to detect if element is centered in viewport
export function useIsCentered(ref: React.RefObject<HTMLElement | null>) {
  const [isCentered, setIsCentered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !ref.current) return;

    const checkPosition = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      
      // Check if element center is within 20% of viewport center
      const threshold = window.innerHeight * 0.2;
      const isInCenter = Math.abs(elementCenter - viewportCenter) < threshold;
      
      setIsCentered(isInCenter);
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition, { passive: true });
    window.addEventListener('resize', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [ref, isMobile]);

  return isMobile ? isCentered : false;
}
