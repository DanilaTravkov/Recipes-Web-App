import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenInterface } from '@/types/authTypes'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const tokenFromCookie = getCookie('token');
		if (tokenFromCookie) {
			setToken(tokenFromCookie);
		}
	}, []);

	const setCookie = (name, value, days) => {
		let expires = '';
		if (days) {
		  const date = new Date();
		  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		  expires = `; expires=${date.toUTCString()}`;
		}
		document.cookie = `${name}=${value || ''}${expires}; path=/`;
	  };
	
	const getCookie = (name) => {
		const nameEQ = `${name}=`;
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
			if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
		}
		return null;
	};

	const login = async (username: string, password: string) => {
		try {
			const response = await axios.post("/login", { username, password });
			const { token } = response.data;
			setToken(token);
			setCookie('token', '', 1);
		} catch (error) {
			console.log("Error logging in: ", error);
		}
	}

	const logout = () => {
		setToken(null);
		setCookie('token', '', -1);
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
