import React, { useState } from 'react';
import { Link } from 'react-router';
import User from './User';
import CartStatus from './CartStatus';
import { useAuthContext } from '../contexts/AuthContext';
import logo from '../../public/assets/ooa-images/ooa-logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
	const { user, login, logout } = useAuthContext();
	const [isMenuOpen, setIsMenuOpen] = useState();
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='menu__container'>
			<Link className='logo' to='/'>
				<img src={logo} alt='ooa-logo' />
			</Link>
			<button
				className={`menu-toggle-button ${isMenuOpen ? 'open' : ''}`}
				onClick={toggleMenu}>
				<AiOutlineMenu />
			</button>

			<div className={`subwrapper ${isMenuOpen ? 'open' : ''}`}>
				<menu>
					<ul>
						<button
							className={`menu-close-button ${
								isMenuOpen ? 'close' : ''
							}`}
							onClick={toggleMenu}>
							<AiOutlineClose />
						</button>
						<li>
							<Link className='button' to='/products/all'>
								All Products
							</Link>
						</li>
						<li>
							{user && user.isAdmin && (
								<Link
									className='button'
									to='/admin/dashboard'>
									Admin
								</Link>
							)}
						</li>
						<li>
							{user ? (
								<button
									onClick={logout}
									className='button special'>
									Logout
								</button>
							) : (
								<button
									onClick={login}
									className='button special'>
									Login
								</button>
							)}
						</li>
						<li> {user && <User user={user} />}</li>
						<li>
							{user && (
								<Link className='button' to='/cart'>
									<CartStatus user={user} />
								</Link>
							)}
						</li>
					</ul>
				</menu>
			</div>
		</nav>
	);
}
