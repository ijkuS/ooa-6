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
		mutationFn: addNewProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['products'] });
		},
	});
	return {
		products,
		isError,
		isPending,
		addProductMutation,
	};
}
