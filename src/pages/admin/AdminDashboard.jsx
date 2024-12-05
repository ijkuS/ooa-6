import React from 'react';
import { Link } from 'react-router';

export default function AdminDashboard() {
	return (
		<section className='admin__page-container'>
			<h2 className='page-title'>Admin Home</h2>

			<div className='sub-wrapper'>
				<div className='text__holder'>
					<Link className='button solid' to='/admin/addnew'>
						<button className='button' />
						Click to Admin Addnew Page
					</Link>
				</div>
			</div>
		</section>
	);
}
