/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const LazyImage = ({
  imgSrc,
  showLoader = true,
  loaderClasses,
  classesBeforeLoad,
  className,
  style,
  ...props
}) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.unobserve(imageRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );
    imageObserver.observe(imageRef.current);
    return () => imageObserver.disconnect();
  }, []);

  return (
    <>
      {!hasLoaded && showLoader && (
        <div
          className={`h-full w-full absolute top-0 animate-pulse ${loaderClasses}`}
        ></div>
      )}
      <img
        src={isVisible ? imgSrc.src || imgSrc : ""}
        {...props}
        className={
          !hasLoaded && classesBeforeLoad ? classesBeforeLoad : className
        }
        style={!hasLoaded ? { ...style, opacity: 0 } : style}
        ref={imageRef}
        onLoad={() => setHasLoaded(true)}
        alt=""
      />
    </>
  );
};

export default LazyImage;
