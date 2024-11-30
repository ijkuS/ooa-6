import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.css';
import '/src/styles/style-addnew.css';
import '/src/styles/style-products-all.css';

import { RouterProvider, createBrowserRouter } from 'react-router';
import App from './App';
import Root from './routes/Root';
import NotFoundPage from './pages/NotFoundPage';
import AllProductsPage from './pages/products/AllProductsPage';
import CartPage from './pages/CartPage';
import AdminAddnew from './pages/admin/AdminAddnew';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <App /> },
			{ path: '/products/all', element: <AllProductsPage /> },
			{
				path: '/cart',
				element: (
					<ProtectedRoute>
						<CartPage />
					</ProtectedRoute>
				),
			},
			{
				path: '/admin/dashboard',
				element: (
					<ProtectedRoute requireAdmin>
						<AdminDashboard />
					</ProtectedRoute>
				),
			},
			{
				path: '/admin/addnew',
				element: (
					<ProtectedRoute requireAdmin>
						<AdminAddnew />
					</ProtectedRoute>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
		</BrowserRouter> */}
	</React.StrictMode>
);
