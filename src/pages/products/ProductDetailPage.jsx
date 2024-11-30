import React from 'react';
import { useLocation } from 'react-router';

export default function ProductDetailPage({ product }) {
	const {
		state: {
			product: { id, images, title },
		},
	} = useLocation();
	return (
		<div>
			<h2>ProductDetailPage</h2>
		</div>
	);
}
