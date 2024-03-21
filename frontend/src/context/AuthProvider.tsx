import React, { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

	const value: object = {
		isLoggedIn: true,
		message: "Hello from context!"
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>

	)
}
