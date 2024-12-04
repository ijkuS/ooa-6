import React from 'react';
import ProductCard from '../../components/ProductCard';
import useProducts from '../../hooks/useProducts';

export default function AllProductsPage() {
	const { products, isPending, isError } = useProducts();

	return (
		<section className='all-products__page-container'>
			{isPending && <p>Loading...</p>}
			{isError && <p>Error loading products</p>}
			<div className='sub-wrapper'>
				<h2 className='page-title'>All Products</h2>
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
