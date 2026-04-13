'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 format string e.g., "2026-04-13T23:59:59"
  className?: string;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the countdown only renders on the client-side,
    // preventing Next.js hydration mismatch errors.
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    // Render a placeholder on the server to avoid hydration errors
    return <div className={className}>Memuat promo...</div>;
  }
  
  const hasTimeLeft = Object.values(timeLeft).some(value => value > 0);

  return (
    <div className={className}>
      {hasTimeLeft ? (
        <div className='flex items-center justify-center gap-2 tracking-wider'>
            <span>Flash Sale Berakhir:</span>
            <span className="font-bold tabular-nums">
                {String(timeLeft.days).padStart(2)} h : {String(timeLeft.hours).padStart(2)} j : {String(timeLeft.minutes).padStart(2, '0')} m : {String(timeLeft.seconds).padStart(2, '0')} d
            </span>
        </div>
      ) : (
        <span>MOST POPULAR: 80% PESERTA PILIH PAKET INI</span>
      )}
    </div>
  );
};

export default CountdownTimer;
