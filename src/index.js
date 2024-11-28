import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

import Root from './routes/Root';
import NotFoundPage from './pages/NotFoundPage';
import AllProductsPage from './pages/products/AllProductsPage';
import CartPage from './pages/CartPage';
import AdminAddnew from './pages/admin/AdminAddnew';
import AdminDashboard from './pages/admin/AdminDashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <App /> },
			{ path: '/products', element: <AllProductsPage /> },
			{ path: '/cart', element: <CartPage /> },
			{ path: '/admin/dashboard', element: <AdminDashboard /> },
			{ path: '/admin/addnew', element: <AdminAddnew /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
