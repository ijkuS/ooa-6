import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';
import LoadingPage from '../pages/LoadingPage';

export default function ProtectedRoute({ children, requireAdmin }) {
	const { user, loading } = useAuthContext();

	if (loading) {
		return <LoadingPage />;
	}
	if (user) {
		console.log(user, user.isAdmin);
	}
	if (!user || (requireAdmin && !user.isAdmin)) {
		console.log('there is no user or user is not admin');
		return <Navigate to='/' replace={true} />;
	}
	return children;
}
