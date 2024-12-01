import React from 'react';

export default function CartItem({ cartItem, uid }) {
	const { images, title, price, category, id, quantity, options } = cartItem;
	const handleMinus = async () => {};
	const handlePlus = async () => {};
	const handleDelete = async () => {};

	return (
		<>
			<div className='image__holder'>
				<img src={images[0]} alt={title} />
			</div>
			<div className='text__holder'>
				<p className='product-title'>{title}</p>
				<p className='category'>{category}</p>
				<p className='price'>{`${price} USD`}</p>
				<div className='quantity__holder'>
					<button className='btn-minus' onClick={handleMinus}>
						-
					</button>
					<p>{quantity}</p>
					<button className='btn-plus' onClick={handlePlus}>
						+
					</button>
					<button className='btn-delete' onClick={handleDelete}>
						&times;
					</button>
				</div>
			</div>
		</>
	);
}
