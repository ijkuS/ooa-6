import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { getCart } from '../libs/firebase/cart-related';
import CartItem from '../components/CartItem';
import CartSummaryCard from '../components/CartSummaryCard';
import { GENERAL_DELIVERY_FEE } from '../constants/shop-constants';
import { useQuery } from '@tanstack/react-query';

export default function CartPage() {
	const { user, uid } = useAuthContext();
	const {
		isPending,
		isError,
		data: cartItems,
	} = useQuery({
		queryKey: ['carts', uid],
		queryFn: async () => {
			const data = await getCart(uid);
			return data;
		},
	});

	const cartItemPrice =
		cartItems &&
		cartItems.reduce(
			(prev, current) =>
				prev + parseInt(current.price) * current.quantity,
			0
		);

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
			{cartItems && (
				<div className='cart-summary-card__container'>
					<h2 className='page-title'>Order Summary</h2>

					<CartSummaryCard
						totalPrice={cartItemPrice}
						deliveryFee={GENERAL_DELIVERY_FEE}
						cartItems={cartItems}
					/>
				</div>
			)}
		</section>
	);
}
