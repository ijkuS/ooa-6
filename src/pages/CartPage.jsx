import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { getCart } from '../libs/firebase/cart-related';
import CartItem from '../components/CartItem';

export default function CartPage() {
	const { user, uid } = useAuthContext();
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
				setIsError(true);
			})
			.finally(() => {
				setIsPending(false);
			});
	}, [uid]); // re-run the effect if 'uid' changes

	return (
		<section className='cart__page-container'>
			<div className='item__container'>
				<h2 className='page-title'>Shopping Bag Items</h2>
				{isPending && <p>Loading...</p>}
				{isError && <p>There is something wrong...</p>}
				{cartItems && (
					<ul>
						{cartItems.map((cartItem) => (
							<li
								key={cartItem.id}
								className='cart-item__container'>
								<CartItem
									cartItem={cartItem}
									uid={uid}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
