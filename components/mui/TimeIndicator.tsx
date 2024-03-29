import { useEffect, useState } from "react";
import { useSocketContext } from "@/context/SocketContext";
import { useUsersContext } from "@/context/UsersContext";

type TimerProps = {
    totalTime: number;
};

let interval: NodeJS.Timer;

const useTimeIndicator = ({ totalTime }: TimerProps) => {
    const { usersData } = useUsersContext();
    const { socket } = useSocketContext();
    const [timeRemaining, setTimeRemaining] = useState(totalTime);

    const endAngle = ((timeRemaining / totalTime) * 2 - 0.5) * Math.PI;
    const isClockwise = timeRemaining > totalTime / 2 ? 1 : 0;
    const pathData = [
        `M 100, 20`,
        `A 80,80 0 ${isClockwise} 1 ${
            100 + 80 * Math.sin(endAngle + Math.PI / 2)
        },${100 - 80 * Math.cos(endAngle + Math.PI / 2)}`,
        `L 100,100`,
    ].join(" ");

    useEffect(() => {
        const decreaseRemainingTime = () => {
            if (timeRemaining === 0) {
                clearInterval(interval);
                socket!.emit("ran-out-of-time", usersData!.roomId);
            } else {
                setTimeRemaining((curr) => curr - 1);
            }
        };

        interval = setInterval(decreaseRemainingTime, 10);

        return () => {
            clearInterval(interval);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining, totalTime]);

    return { pathData };
};

const TimeIndicator = ({ totalTime }: TimerProps) => {
    const { pathData } = useTimeIndicator({ totalTime });

    return (
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
    );
};

export default TimeIndicator;
