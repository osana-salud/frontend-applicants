import { useEffect, useRef, useState } from "react";
export const useLoadImage = (url) => {
  const isMounted = useRef(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const newImage = new Image();
  newImage.onload = () => {
    if (isMounted.current) {
      setIsLoaded(true);
    }
  };
  newImage.onerror = () => {
    if (isMounted.current) {
      setIsLoaded(true);
    }
  };
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  newImage.src = url;
  return [isLoaded];
};
