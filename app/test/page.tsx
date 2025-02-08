'use client'
import { testTime } from '@/actions/auth';
import { useEffect, useState } from 'react';

function Countdown({ targetDate }: { targetDate: number }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate: number) {
        const difference = targetDate - Date.now();
        let timeLeft = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
                months: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    }

    return (
        <div className='text-white text-center'>
            <div className='text-6xl font-bold'>
                {timeLeft.years}Y {timeLeft.months}M {timeLeft.days}D
            </div>
            <div className='text-4xl'>
                {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
            </div>
        </div>
    );
}

export default function Page() {
    const [timestamp, setTimestamp] = useState<number | null>(null);

    useEffect(() => {
        async function fetchTimestamp() {
            const ts = await testTime();
            setTimestamp(new Date(ts).getTime());
        }

        fetchTimestamp();
    }, []);

    if (timestamp === null) {
        return <div className='text-white'>Loading...</div>;
    }

    return <Countdown targetDate={timestamp} />;
}