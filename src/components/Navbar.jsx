import React from 'react';
import { Link } from 'react-router';
import User from './User';
import CartStatus from './CartStatus';
import { useAuthContext } from '../contexts/AuthContext';
import logo from '../../public/assets/ooa-images/ooa-logo.svg';

export default function Navbar() {
	const { user, login, logout } = useAuthContext();

	return (
		<nav>
			<Link className='logo' to='/'>
				<img src={logo} alt='ooa-logo' />
				{/* <img
					src='https://firebasestorage.googleapis.com/v0/b/react-shop-2024-2.appspot.com/o/images%2Fooa-logo.svg?alt=media&token=4dbab286-4762-4d00-ab1b-1711f1b7d6eb'
					alt='ooa-logo'
				/> */}
			</Link>
			<menu>
				<Link className='button' to='/products/all'>
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
