import React from 'react';
import { addOrUpdateCart, removeFromCart } from '../libs/firebase/cart-related';
import useCart from '../hooks/useCart';

import {
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
	AiOutlineClose,
} from 'react-icons/ai';

export default function CartItem({ cartItem, uid }) {
	const { images, title, price, category, id, quantity, options } = cartItem;
	const { addOrUpdateCartMutation, removeFromCartMutation } = useCart();

	const handleMinus = () => {
		if (quantity < 2) return; //quantity shouldn't be less than 1
		try {
			addOrUpdateCartMutation.mutate(
				{
					userId: uid,
					product: { ...cartItem, quantity: quantity - 1 },
				},
				{
					onSuccess: () => {
						console.log('quantity: -1');
					},
				}
			);
		} catch (error) {
			console.error('Error handleMinus', error);
		}
	};
	const handlePlus = async () => {
		try {
			addOrUpdateCartMutation.mutate(
				{
					userId: uid,
					product: { ...cartItem, quantity: quantity + 1 },
				},
				{
					onSuccess: () => {
						console.log('quantity: +1');
					},
				}
			);
		} catch (error) {
			console.error('Error handlePlus', error);
		}
	};
	const handleDelete = () => {
		removeFromCartMutation.mutate(
			{ userId: uid, productId: id },
			{
				onSuccess: () => {
					console.log('Remove from cart');
				},
			}
		);
		console.log('Remove from cart');
	};

	return (
		<>
			<div className='image__holder'>
				<img src={images[0]} alt={title} />
			</div>
			<div className='text__holder'>
				<p className='product-title'>{title}</p>
				<p className='category'>{category}</p>
				<p className='option-selected'>Size: {options}</p>

				<div className='quantity__holder'>
					<button className='btn-minus' onClick={handleMinus}>
						<AiOutlineMinusCircle />
					</button>
					<p>{quantity}</p>
					<button className='btn-plus' onClick={handlePlus}>
						<AiOutlinePlusCircle />
					</button>
				</div>
				<p className='price'>{`${price} USD`}</p>
			</div>
			<button className='btn-delete' onClick={handleDelete}>
				<AiOutlineClose />
			</button>
		</>
	);
}
