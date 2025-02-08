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
        <div className='h-screen w-screen' style={{backgroundImage: "url('/ana.jpg')", backgroundSize:"cover", backgroundPosition:"center"}}>
            <div className='h-[100vh] w-1/2'>
                <div className='h-15vh flex justify-center items-center p-10'>
                    <h1 className='text-6xl text-white font-bold'>Your Clock is ticking !</h1>
                </div>
                <div className='w-full flex justify-center items-center flex-col pr-16 ml-10'>
                    <div className='text-6xl font-bold text-center flex flex-col gap-4'>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.years} Years </div>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.months} Months </div>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.days} Days </div>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.hours} Hours </div>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.minutes} Minutes </div>
                        <div className='bg-white/20 backdrop-blur-md px-4 py-2'>{timeLeft.seconds} Seconds</div>
                    </div>
                </div>
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