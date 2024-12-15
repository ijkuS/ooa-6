import React from 'react';

export default function CartSummaryCard({
	totalPrice,
	deliveryFee,
	cartItems,
}) {
	const handleCheckout = (e) => {
		e.preventDefault();
		alert(
			'We regret to inform you that the checkout service is currently unavailable on this test site. We apologize for any inconvenience this may cause.'
		);
	};
	return (
		<>
			<div className='text__holder'>
				<p>Order Value: {totalPrice} USD</p>
				<p>Delievery: {deliveryFee} USD </p>

				<p className='total'>
					Total: {`${totalPrice + deliveryFee} USD`}
				</p>
				<button className='button solid' onClick={handleCheckout}>
					Proceed to Checkout
				</button>
			</div>
		</>
	);
}
