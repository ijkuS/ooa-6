import React from 'react';
import { useNavigate } from 'react-router';

export default function ProductCard({ product }) {
	const { images, title, price, category, brand, id } = product; // Destructure within the component
	const navigate = useNavigate();
	const handleClick = (e) => {
		e.preventDefault();
		// console.log(id);
		navigate(`/products/${id}`, { state: { product } });
	};
	return (
		<div className='product-card' onClick={handleClick}>
			<div className='image__holder'>
				<img src={images[0]} alt={title} />
			</div>
			<div className='text__holder'>
				<p className='product-title'>{title}</p>
				<p className='category'>{brand}</p>
				<p className='category'>{category}</p>
				<p className='price'>{`${price} USD`}</p>
			</div>
		</div>
	);
}
