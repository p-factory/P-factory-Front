import { useEffect, useState } from 'react';

const useDynamicDisplay = (maxWidth: number): boolean => {
  const [isMobile, setMobile] = useState<boolean>(
    window.innerWidth <= maxWidth,
  );
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= maxWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return isMobile;
};

export default useDynamicDisplay;
