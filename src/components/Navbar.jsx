import React from 'react';
import { Link } from 'react-router';
import User from './User';
import CartStatus from './CartStatus';
import { useAuthContext } from '../contexts/AuthContext';
// import logo from '../../public/assets/ooa-images/ooa-logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import SideNav from './SideNav';

export default function Navbar() {
	const { user } = useAuthContext();

	const openNav = () => {
		document.getElementById('main-side-nav').style.width = '70%';
	};

	return (
		<nav className='menu__container'>
			<Link className='logo' to='/'>
				<img
					id='ooa-logo'
					src='https://firebasestorage.googleapis.com/v0/b/react-shop-2024-2.appspot.com/o/images%2Fooa-logo.svg?alt=media&token=4dbab286-4762-4d00-ab1b-1711f1b7d6eb'
					alt='ooa-logo'
				/>
			</Link>
			<menu className='navbar-menu'>
				<ul>
					<li> {user && <User user={user} />}</li>

					<li>
						{user && (
							<Link className='button' to='/cart'>
								<CartStatus user={user} />
							</Link>
						)}
					</li>

					<button className='sidemenu button' onClick={openNav}>
						<AiOutlineMenu />
					</button>
				</ul>
			</menu>
			<div id='main-side-nav' className='side-nav'>
				<SideNav />
			</div>
		</nav>
	);
}
