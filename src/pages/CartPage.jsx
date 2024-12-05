import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
// import { getCart } from '../libs/firebase/cart-related';
import CartItem from '../components/CartItem';
import CartSummaryCard from '../components/CartSummaryCard';
import { GENERAL_DELIVERY_FEE } from '../constants/shop-constants';
import useCart from '../hooks/useCart';

export default function CartPage() {
	const { uid } = useAuthContext();
	const { isPending, isError, cartItems } = useCart();

	const cartItemPrice =
		cartItems &&
		cartItems.reduce(
			(prev, current) =>
				prev + parseInt(current.price) * current.quantity,
			0
		);

	return (
		<section className='cart__page-container'>
			<div className='sub-wrapper'>
				<div className='item__wrapper'>
					<h2 className='page-title'>Shopping Bag Items</h2>

					{isPending && <p>Loading...</p>}
					{isError && <p>There is something wrong...</p>}
					{cartItems && (
						<ul>
							{cartItems.map((cartItem) => (
								<li
									key={cartItem.id}
									className='cart-item__wrapper'>
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
					<div className='cart-summary-card__wrapper'>
						<h2 className='page-title'>Order Summary</h2>

						<CartSummaryCard
							totalPrice={cartItemPrice}
							deliveryFee={GENERAL_DELIVERY_FEE}
							cartItems={cartItems}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
