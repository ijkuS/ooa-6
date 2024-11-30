import React from 'react';
import Banner from '../components/Banner';
import AllProductsPage from './products/AllProductsPage';

export default function HomePage() {
	return (
		<section className='all-products__page-container'>
			<Banner />
			<AllProductsPage />
		</section>
	);
}
