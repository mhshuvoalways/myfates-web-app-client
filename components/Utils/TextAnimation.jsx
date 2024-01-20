import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Index = ({ letters, className, textCenter }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange}>
      <div className="font-title">
        {hasBeenVisible ? (
          <div className={`words-line ${textCenter && "text-center"}`}>
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`mr-3 anim-word-up inline-block ${className}`}
                style={{ "--delay": `${letter.delay}s` }}
              >
                {letter.letter}
              </span>
            ))}
          </div>
        ) : (
          <div className={`opacity-0`}>
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`mr-3 inline-block ${className}`}
                style={{ "--delay": `${letter.delay}s` }}
              >
                {letter.letter}
              </span>
            ))}
          </div>
        )}
      </div>
    </VisibilitySensor>
  );
};

export default Index;
