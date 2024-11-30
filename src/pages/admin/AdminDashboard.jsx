import React from 'react';
import { Link } from 'react-router';

export default function AdminDashboard() {
	return (
		<div>
			<h2>Admin Home</h2>
			<Link className='button' to='/admin/addnew'>
				Click to "Admin Addnew Page"
			</Link>
		</div>
	);
}
