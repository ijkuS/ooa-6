import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div>
			<Link className='logo' to='/'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/react-shop-2024-2.appspot.com/o/images%2Fooa-logo.svg?alt=media&token=4dbab286-4762-4d00-ab1b-1711f1b7d6eb'
					alt='ooa-logo'
				/>
			</Link>
			<menu>
				<Link className='button' to='/products'>
					All Products
				</Link>
				<Link className='button' to='/cart'>
					Carts
				</Link>
				<Link className='button' to='/admin/dashboard'>
					Admin
				</Link>
				<Link className='button'>SIGN IN</Link>
			</menu>
		</div>
	);
}
