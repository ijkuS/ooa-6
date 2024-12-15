import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router';

import { AiOutlineClose } from 'react-icons/ai';
import CartStatus from './CartStatus';
import { IoBagOutline } from 'react-icons/io5';

export default function SideNav() {
	const { user, login, logout } = useAuthContext();
	const closeNav = () => {
		document.getElementById('main-side-nav').style.width = '0';
	};
	return (
		<ul>
			<div className='general-area'>
				<li>
					<button
						className='sidemenu close button'
						onClick={closeNav}>
						<AiOutlineClose />
					</button>
				</li>
				<li>
					<Link className='button' to='/products/new'>
						New Arrivals
					</Link>
				</li>
				<li>
					<Link className='button' to='/products/all'>
						All Products
					</Link>
				</li>
				{/* <li>Brands</li>
				<li>Category</li> */}
			</div>

			<div className='auth-area'>
				<li>
					{user && user.isAdmin && (
						<>
							<Link
								className='button'
								to='/admin/dashboard'>
								Admin Home
							</Link>
						</>
					)}
				</li>
				<li>
					{user && (
						<Link className='button icon' to='/cart'>
							<IoBagOutline />
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
			</div>
		</ul>
	);
}
