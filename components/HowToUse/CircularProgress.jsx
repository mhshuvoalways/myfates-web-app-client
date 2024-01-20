import { useMemo } from "react";

const CircularProgress = ({ baseColor, width, outline, progress }) => {
  const circleProps = {
    width: width ?? 140,
    outline: outline ?? 10,
  };

  const circleRadius = useMemo(
    () => circleProps.width / 2 - circleProps.outline,
    [circleProps.outline, circleProps.width]
  );
  const circleCircumfrence = 2 * Math.PI * circleRadius;

  return (
    <svg
      width={circleProps.width}
      height={circleProps.width}
      viewBox={`0 0 ${circleProps.width} ${circleProps.width}`}
      fill="none"
      className="!m-0 !p-0"
    >
      <circle
        cx={circleProps.width / 2}
        cy={circleProps.width / 2}
        r={circleRadius}
        stroke={baseColor ?? "#F2F2F2"}
        stroke-width={circleProps.outline}
      />
      <circle
        cx={circleProps.width / 2}
        cy={circleProps.width / 2}
        r={circleRadius}
        stroke="#262A56"
        stroke-width={circleProps.outline}
        className="progress-circle transform -rotate-90 origin-center"
        strokeDasharray={circleCircumfrence}
        strokeDashoffset={circleCircumfrence * (1 - progress)}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircularProgress;
