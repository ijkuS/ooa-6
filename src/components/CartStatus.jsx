import React from 'react';
import { IoBagOutline } from 'react-icons/io5';
import useCart from '../hooks/useCart';

export default function CartStatus({ user }) {
	const uid = user.uid;
	const { isPending, isError, cartItems } = useCart();

	return (
		<div className='cart-icon'>
			{isPending && <p>Loading...</p>}
			{isError && <p>There is something wrong...</p>}
			{cartItems && <p className='cart-badge'>{cartItems.length}</p>}

			<IoBagOutline />
		</div>
	);
}
