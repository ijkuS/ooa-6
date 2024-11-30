import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import Root from './routes/Root';
import NotFoundPage from './pages/NotFoundPage';
import AllProductsPage from './pages/products/AllProductsPage';
import CartPage from './pages/CartPage';
import AdminAddnew from './pages/admin/AdminAddnew';
import AdminDashboard from './pages/admin/AdminDashboard';
import Fallback from './pages/Fallback';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
			errorElement: <NotFoundPage />,
			hydrateFallbackElement: <Fallback />,
			children: [
				// { index: true, element: <App /> },
				{ path: '/', element: <App /> },
				{ path: '/products', element: <AllProductsPage /> },
				{
					path: '/cart',
					element: <ProtectedRoute />,
					children: [{ path: '/cart', element: <CartPage /> }],
				},
				{
					path: '/admin/dashboard',
					element: <AdminDashboard />,
				},
				{
					path: '/admin/addnew',
					element: <AdminAddnew />,
				},
			],
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider
			router={router}
			future={{ v7_startTransition: true }}
		/>
	</React.StrictMode>
);
