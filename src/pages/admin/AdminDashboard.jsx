import React from 'react';
import { Link } from 'react-router';

export default function AdminDashboard() {
	return (
		<section className='admin__page-container'>
			<div className='sub-wrapper'>
				<h2 className='page-title'>Admin Home</h2>

				<Link className='button' to='/admin/addnew'>
					Click to "Admin Addnew Page"
				</Link>
			</div>
		</section>
	);
}
