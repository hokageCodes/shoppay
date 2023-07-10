import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import { calcaulateDiff } from "./utils";


export default function Countdown({ date }) {
    const [timeInMs, setTimeInMs] = useState(date.getTime());
    const [remainingTime, setRemainingTime] = useState();
    useEffect(() => {
        setTimeInMs(date.getTime());
    }, [date]);
    useEffect(() => {
        const interval = setInterval(() => {
        updateRemainingTime(timeInMs);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeInMs]);
    const updateRemainingTime = (timeInMs) => {
        setRemainingTime(calcaulateDiff(timeInMs));
    };
    return (
        <div className={styles.countdown}>
            {[...Array(remainingTime?.days.length).keys()].map((d, i) => (
                // eslint-disable-next-line react/jsx-key
                <span>{remainingTime?.days.slice(i, i + 1)}</span>
            ))}
            <span>{remainingTime?.days.slice(0, 1)}</span>
            <span>{remainingTime?.days.slice(1, 2)}</span>
            <b>:</b>
            <span>{remainingTime?.minutes.slice(0, 1)}</span>
            <span>{remainingTime?.minutes.slice(1, 2)}</span>
            <b>:</b>
            <span>{remainingTime?.seconds.slice(0, 1)}</span>
            <span>{remainingTime?.seconds.slice(1, 2)}</span>
        </div>
    );
}