import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type User = {
	username: string;
	jobTitle: string;
}

type UserContextType = {
	user: User;
	saveUser: (username: string, jobTitle: string) => void;
}

type UserProviderProps = {
	children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultUser = { username: '', jobTitle: '' };

const isBrowser = typeof window !== 'undefined'

function getUserFromLocalStorage(): User {
	const storedUserJson = localStorage.getItem('user');
	if (storedUserJson) {
		try {
			return JSON.parse(storedUserJson);
		} catch (error) {
			console.error("Error parsing user from localStorage", error);
		}
	}
	return defaultUser;
}


export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User>(defaultUser);

	useEffect(() => {
		if (isBrowser) {
			const storedUser = getUserFromLocalStorage();
			if (storedUser.username && storedUser.jobTitle) {
				setUser(storedUser);
			}
		}
	}, []);

	const saveUser = (username: string, jobTitle: string) => {
		const newUser = { username, jobTitle };
		if (isBrowser) {
			localStorage.setItem('user', JSON.stringify(newUser));
		}
		setUser(newUser);
	};

	return (
		<UserContext.Provider value={{ user, saveUser }}>
			{children}
		</UserContext.Provider>
	);
};


export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};


