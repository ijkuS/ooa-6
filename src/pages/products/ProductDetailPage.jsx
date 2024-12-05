import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext';
import { addOrUpdateCart } from '../../libs/firebase/cart-related';
import useCart from '../../hooks/useCart';

export default function ProductDetailPage({ product }) {
	const { uid } = useAuthContext();
	const { addOrUpdateCartMutation } = useCart();

	const {
		state: {
			product: {
				images,
				title,
				price,
				category,
				options,
				brand,
				description,
				id,
			},
		},
	} = useLocation(); // from ProductCard's useNavigate()
	const [selected, setSelected] = useState();
	const [success, setSuccess] = useState();

	const handleSelect = (e) => {
		const value = e.target.value;
		setSelected((prevSelected) =>
			prevSelected === value ? null : value
		);
	};
	const handleAddtoBag = (e) => {
		e.preventDefault();
		console.log('Add to Bag');
		if (!selected || selected.length === 0) {
			alert('You did not select any option');
			return;
		}
		const product = {
			id,
			images,
			title,
			category,
			price,
			options: selected,
			quantity: 1,
		};
		try {
			addOrUpdateCartMutation.mutate(
				{ userId: uid, product },
				{
					onSuccess: () => {
						setSuccess(true);
						setTimeout(() => setSuccess(null), 3000);
					},
				}
			);
		} catch (error) {
			console.error();
		}
	};

	return (
		<section className='product-detail__page-container'>
			<div className='sub-wrapper'>
				<div className='preview-image__holder'>
					{images && images.length > 0 ? (
						images.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`${title}-${index + 1}`}
							/>
						))
					) : (
						<p>No images availble</p>
					)}
				</div>
				<div className='text__holder'>
					<h2 className='product-title'>{title}</h2>
					<p className='category'>{brand}</p>

					<p className='category'>{category}</p>
					<p className='price'>{price} USD</p>
					<div className='option-buttons'>
						{options &&
							options.map((option, index) => (
								<button
									key={index}
									onClick={handleSelect}
									className={
										selected === option
											? 'selected'
											: ''
									}
									value={option}>
									{option}
								</button>
							))}
					</div>

					<p className='description'>{description} </p>
					{/* <p className='alert success'>
						The item has been succesfully added to your
						shopping cart
					</p> */}
					{success && (
						<p className='inform success'>
							The item has been succesfully added to your
							shopping cart
						</p>
					)}
					<div className='buttons'>
						<button
							className='button outline'
							onClick={handleAddtoBag}>
							Add to Bag
						</button>
						<button className='button solid'>Checkout</button>
					</div>
				</div>
			</div>
		</section>
	);
}
