import { useState, useEffect } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading;
};

export default useLoading;
