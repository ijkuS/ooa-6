import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import AuthContextProvider from '../contexts/AuthContext';

export default function Root() {
	return (
		<AuthContextProvider>
			<main>
				<Navbar />
				<Outlet />
			</main>
		</AuthContextProvider>
	);
}
