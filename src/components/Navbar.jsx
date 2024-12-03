import React from 'react';
import { Link } from 'react-router';
import User from './User';
import CartStatus from './CartStatus';
import { useAuthContext } from '../contexts/AuthContext';
import logo from '../../public/assets/ooa-images/ooa-logo.svg';
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
				<img src={logo} alt='ooa-logo' />
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
					<li>
						<button
							className='sidemenu button'
							onClick={openNav}>
							<AiOutlineMenu />
						</button>
					</li>
				</ul>
				<div id='main-side-nav' className='side-nav'>
					<SideNav />
				</div>
			</menu>
		</nav>
	);
}
