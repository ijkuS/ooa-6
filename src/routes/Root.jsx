import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import AuthContextProvider from '../contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Root() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<main>
					<Navbar />
					<Outlet />
				</main>
			</AuthContextProvider>
		</QueryClientProvider>
	);
}
