import React, { useEffect, useState } from 'react';
import { IoBagOutline } from 'react-icons/io5';
import { getCart } from '../libs/firebase/cart-related';

export default function CartStatus({ user }) {
	const uid = user.uid;
	const [cartItems, setCartItems] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (!uid) return;
		setIsPending(true);
		setIsError(false);
		getCart(uid)
			.then((data) => {
				setCartItems(data); // update cart items
			})
			.catch(() => {
				setIsError(true); // handle errors
			})
			.finally(() => {
				setIsPending(false); // reset loading state
			});
	}, [uid]);

	return (
		<div className='cart-icon'>
			{isPending && <p>Loading...</p>}
			{isError && <p>There is something wrong...</p>}
			{cartItems && <p className='cart-badge'>{cartItems.length}</p>}

			<IoBagOutline />
		</div>
	);
}
