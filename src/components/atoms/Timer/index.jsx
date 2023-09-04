import React, { useState, useEffect } from 'react';
import { TimeContainer } from './style';

const Timer = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const targetDate = new Date("Oct 31,2023 23:59:59").getTime();
        let currentDate = 0;

        const updateTimer = () => {
            currentDate = new Date().getTime();
            const elapsedTime = targetDate - currentDate;
            const days = Math.trunc(elapsedTime / (1000 * 60 * 60 * 24));
            const hours = Math.trunc((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.trunc((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.trunc((elapsedTime % (1000 * 60)) / 1000);
            setTime({ days, hours, minutes, seconds })
        }

        let interval = setInterval(updateTimer, 1000)

        return currentDate === "Oct 31,2023 23:59:59" ? clearInterval(interval) : "";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <TimeContainer>
        <div>{time.days} <p>Days</p></div>
        <div>{time.hours} <p>Hour</p></div>
        <div>{time.minutes} <p>Min</p> </div>
        <div>{time.seconds} <p>Sec</p> </div>
    </TimeContainer>
};

export default Timer;
