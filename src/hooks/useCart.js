import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../contexts/AuthContext';
import {
	addOrUpdateCart,
	getCart,
	removeFromCart,
} from '../libs/firebase/cart-related';

export default function useCart() {
	const { uid } = useAuthContext();
	const queryClient = useQueryClient();

	const {
		isPending,
		isError,
		data: cartItems,
	} = useQuery({
		queryKey: ['carts', uid],
		queryFn: async () => {
			const data = await getCart(uid);
			return data;
		},
		enabled: !!uid,
	});
	const addOrUpdateCartMutation = useMutation({
		mutationFn: async ({ userId, product }) => {
			return await addOrUpdateCart(userId, product);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['carts'] });
		},
		onError: (error) => {
			console.error('Error adding or updating cart: ', error);
		},
	});
	const removeFromCartMutation = useMutation({
		mutationFn: ({ userId, productId }) => {
			return removeFromCart(userId, productId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['carts'] });
		},
		onError: (error) => {
			console.error('Error adding or updating cart: ', error);
		},
	});

	return {
		cartItems,
		isError,
		isPending,
		addOrUpdateCartMutation,
		removeFromCartMutation,
	};
}
