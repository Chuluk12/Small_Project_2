import ImageOne from '../../image/image.png'
import ImageTwo from '../../image/image6.jpg'
import ImageThree from '../../image/image2.jpg'

const initialState = {
	counter: 0,
	products: [
		{
			id: 1,
			title: 'PRODUCT 1',
			name: 'CATEGORY 1',
			image: ImageOne,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 2,
			title: 'TITLE HERE',
			name: 'CATEGORY 2',
			image: ImageTwo,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 3,
			title: 'TITLE HERE',
			name: 'CATEGORY 3',
			image: ImageThree,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 4,
			title: 'TITLE HERE',
			name: 'CATEGORY 4',
			image: ImageOne,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 5,
			title: 'TITLE HERE',
			name: 'CATEGORY 5',
			image: ImageTwo,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 6,
			title: 'TITLE HERE',
			name: 'CATEGORY 6',
			image: ImageThree,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 7,
			title: 'TITLE HERE',
			name: 'CATEGORY 7',
			image: ImageOne,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 8,
			title: 'TITLE HERE',
			name: 'CATEGORY 8',
			image: ImageTwo,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 500000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
		{
			id: 9,
			title: 'TITLE HERE',
			name: 'CATEGORY 9',
			image: ImageThree,
			qty: 0,
			color: 'black',
			brand: 'KACA MATA ANTI RADIASI',
			price: 50000,
			description: 'Kacamata difungsikan untuk menjadi tameng agar benda asing tidak masuk ke mata Selain itu meskipun kacamata yang digunakan telah disesuaikan dengan penyakit yang diderita tetapi ini hanya sementara sebelum akhirnya lensa harus diganti lagi karena kelainan penglihatan meningkat'
		},
	],
	product: [],
	
};

const shopReducer = (state = initialState, action) => {
	let products;
	let product;

	switch (action.type) {
		case 'GET_PRODUCT_BY_ID':
			const findProduct = state.products.find(
				product => String(product.id) === String(action.payload.id),
			);

			return {
				...state,
				product: findProduct,
			};

		case 'ADD_TO_CART':
			products = state.products.map(product => {
				if (String(product.id) === String(action.payload.id)) {
					return {
						...product,
						qty: product.qty + 1,
					};
				} else {
					return product;
				}
			});

			product = {
				...state.product,
				qty: state.product.qty + 1,
			};

			return {
				...state,
				products: products,
				product: product,
			};

		default:
			return state;
	}
};

export default shopReducer;
