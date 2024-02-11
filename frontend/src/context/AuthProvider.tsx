import React, {createContext} from 'react'

const INITIAL_STATE = {
	"message": "Hello from context!"
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

	const value = {
		// TODO
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>

	)
}
