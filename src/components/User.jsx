import React from 'react';

export default function User({ user }) {
	return (
		<div className='user-info'>
			<img
				className='user-photo'
				src={user.photoURL}
				alt={user.displayName}
			/>
		</div>
	);
}
