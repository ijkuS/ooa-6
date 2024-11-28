import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../libs/firebase/auth';
import User from './User';
import CartStatus from './CartStatus';

export default function Navbar() {
	const [user, setUser] = useState();

	useEffect(() => {
		onUserStateChange((user) => {
			setUser(user);
		});
	}, []);
	return (
		<nav>
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

				{user && user.isAdmin && (
					<Link className='button' to='/admin/dashboard'>
						Admin
					</Link>
				)}
				{user ? (
					<button onClick={logout} className='button special'>
						Logout
					</button>
				) : (
					<button onClick={login} className='button special'>
						Login
					</button>
				)}
				{user && <User user={user} />}
				{user && (
					<Link className='button' to='/cart'>
						<CartStatus />
					</Link>
				)}
			</menu>
		</nav>
	);
}
