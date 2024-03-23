import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


export const AccessDenied = () => {

    const [seconds, setSeconds] = useState<number>(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    return seconds === 0 ? <Navigate to="/login" /> : <div>No valid credential found. You will redirected to the login page in {seconds}</div>
}