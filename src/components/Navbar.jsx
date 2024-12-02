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
						<CartStatus user={user} />
					</Link>
				)}
			</menu>
		</nav>
	);
}
