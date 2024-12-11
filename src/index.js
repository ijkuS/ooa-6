import React from 'react';
import ReactDOM from 'react-dom/client';
import '/src/styles/general-mobile-centric.css';
import '/src/styles/style-addnew-page.css';
import '/src/styles/style-products-all-page.css';
import '/src/styles/style-products-detail-page.css';
import '/src/styles/style-cart-page.css';
import '/src/styles/style-admin-dashboard.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import Root from './routes/Root';
import NotFoundPage from './pages/NotFoundPage';
import AllProductsPage from './pages/products/AllProductsPage';
import CartPage from './pages/CartPage';
import AdminAddnew from './pages/admin/AdminAddnew';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import ProductDetailPage from './pages/products/ProductDetailPage';
import { PUBLIC_URL } from './constants/deploy-constants';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<BrowserRouter basename={PUBLIC_URL}>
			<Routes>
				<Route path='/' element={<Root />}>
					<Route index element={<App />} />
					<Route
						path='products/all'
						element={<AllProductsPage />}
					/>
					<Route
						path='products/:id'
						element={<ProductDetailPage />}
					/>
					<Route
						path='cart'
						element={
							<ProtectedRoute>
								<CartPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path='admin/dashboard'
						element={
							<ProtectedRoute requireAdmin>
								<AdminDashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path='admin/addnew'
						element={
							<ProtectedRoute requireAdmin>
								<AdminAddnew />
							</ProtectedRoute>
						}
					/>
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
