import React, { useEffect, useState } from "react";

type Props = {
    totalTime: number;
};

let interval: NodeJS.Timer;

const TimeIndicator = ({ totalTime }: Props) => {
    const [timeRemaining, setTimeRemaining] = useState(totalTime);

    const endAngle = ((timeRemaining / totalTime) * 2 - 0.5) * Math.PI;
    const isClockwise = endAngle < Math.PI ? 1 : 0;
    // const isClockwise = timeRemaining > totalTime / 2 ? 1 : 0;
    const pathData = [
        `M 100, 20`,
        `A 80,80 0 ${isClockwise} ${isClockwise ? 0 : 1} ${
            100 + 80 * Math.sin(endAngle)
        },${100 - 80 * Math.cos(endAngle)}`,
        `L 100,100`,
    ].join(" ");

    useEffect(() => {
        const decreaseRemainingTime = () => {
            if (timeRemaining === 0) {
                clearInterval(interval);
            } else {
                setTimeRemaining((curr) => curr - 1);
            }
        };
        interval = setInterval(decreaseRemainingTime, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timeRemaining]);

    return (
        <>
            <svg width="200" height="200">
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    strokeWidth="10"
                    stroke="#fff"
                />
                <path d={pathData} fill="#fff" />
            </svg>
            <p>{timeRemaining}</p>
        </>
    );
};

export default TimeIndicator;
