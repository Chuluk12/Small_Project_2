export const getProductById = id => {
	return {
		type: 'GET_PRODUCT_BY_ID',
		payload: {
			id,
		},
	};
};

export const addToCartById = id => {
	return {
		type: 'ADD_TO_CART',
		payload: {
			id,
		},
	};
};
