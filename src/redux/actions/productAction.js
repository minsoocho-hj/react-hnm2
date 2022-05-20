function getProducts(params) {
	return async (dispatch, getState) => {
		let url = `https://my-json-server.typicode.com/minsoocho-hj/react-hnm2/products/?q=${params}`;
		let res = await fetch(url);
		let data = await res.json();
		dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
	};
}

export const productAction = { getProducts };
