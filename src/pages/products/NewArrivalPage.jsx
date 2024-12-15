import React from 'react';
import ProductCard from '../../components/ProductCard';
import useProducts from '../../hooks/useProducts';

export default function NewArrivalPage() {
	const { products, isPending, isError } = useProducts();

	return (
		<section className='new-arrivals__page-container'>
			<h2 className='page-title'>New Arrivals</h2>
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
