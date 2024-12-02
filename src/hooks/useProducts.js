import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProduct } from '../libs/firebase/product-related';

export default function useProducts() {
	const queryClient = useQueryClient();
	const {
		isPending,
		isError,
		data: products,
	} = useQuery({
		queryKey: ['products'],
		queryFn: getProduct,
	});

	const addProductMutation = useMutation({
		mutationFn: async ({ product, urls }) => {
			return await addNewProduct(product, urls);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] });
		},
		onError: (error) => {
			console.error('Error adding product: ', error);
		},
	});
	return {
		products,
		isError,
		isPending,
		addProductMutation,
	};
}
