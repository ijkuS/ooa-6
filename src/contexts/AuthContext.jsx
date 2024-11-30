import React, { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange, login, logout } from '../libs/firebase/auth';

const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onUserStateChange((currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);
	return (
		<AuthContext.Provider
			value={{ user, loading, uid: user && user.uid, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
export function useAuthContext() {
	return useContext(AuthContext);
}
