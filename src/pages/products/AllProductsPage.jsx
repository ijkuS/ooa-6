import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { getProduct } from '../../libs/firebase/product-related';
import LoadingPage from '../LoadingPage';

export default function AllProductsPage() {
	const [products, setProducts] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [isError, setIsError] = useState(null);
	useEffect(() => {
		getProduct()
			.then((data) => {
				//console.log(data);
				setProducts(data);
				setIsPending(false);
			})
			.catch((err) => {
				console.error('Error fetching products:', err);
				setIsError(err);
				setIsPending(false);
			});
	}, []);
	if (isPending) {
		return <LoadingPage />;
	}
	if (isError) {
		return <div>Error loading products</div>;
	}

	return (
		<section className='all-products__page-container'>
			<h2 className='page-title'>All Products</h2>
			{isPending && <p>Loading...</p>}
			{isError && <p>Error loading products</p>}
			<div className='sub-wrapper'>
				{products && (
					<ul className='product-list'>
						{products.map((product) => (
							<li key={product.id}>
								<ProductCard product={product} />
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
