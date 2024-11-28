import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth';
import { get, ref as databaseRef } from 'firebase/database';
import { firebaseAuth, firebaseRTDatabase } from './config';

export async function login() {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(firebaseAuth, provider);
		if (!result || !result.user) {
			throw new Error('Google sign in failed');
		}
	} catch (error) {
		console.error('Error signing in with Google', error);
	}
}
export async function logout() {
	try {
		await firebaseAuth.signOut();
	} catch (error) {
		console.error('Error signing out with Google', error);
	}
}
export function onUserStateChange(callback) {
	const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
		const updatedUser = user ? await adminUser(user) : null;
		callback(updatedUser);
	});
	return unsubscribe;
}
async function adminUser(user) {
	return get(databaseRef(firebaseRTDatabase, 'admins')) //
		.then((snapshot) => {
			if (snapshot.exists()) {
				const admins = snapshot.val();
				const isAdmin = admins.includes(user.uid);
				return { ...user, isAdmin };
			}
			return user;
		});
}
