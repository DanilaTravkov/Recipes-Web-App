import React, { useState } from 'react';
import { tokenInterface } from '@/types/authTypes';

export const AuthContext = React.createContext<tokenInterface | null>(null); // Define AuthContext with null as initial value

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [tokens, setTokens] = useState<string | null>(localStorage.getItem("tokens") ? localStorage.getItem("tokens") : "");

    const login = (tokens: any) => {
        setTokens(tokens);
        localStorage.setItem('tokens', JSON.stringify(tokens));
    }

    const logout = () => {
        setTokens(null);
        localStorage.removeItem('tokens');
    }

    const context: tokenInterface = {
        tokens,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

