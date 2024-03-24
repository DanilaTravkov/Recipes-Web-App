import React, { useState, useEffect } from 'react';
import { tokenInterface } from '@/types/authTypes';

export const AuthContext = React.createContext<tokenInterface | null>(null); // Define AuthContext with null as initial value

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token") ? localStorage.getItem("token") : "");

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const context: tokenInterface = {
        token,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

