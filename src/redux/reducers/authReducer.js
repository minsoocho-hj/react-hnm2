let initialState = {
	id: '',
	pwd: '',
	authenticate: false,
};

function authReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				id: payload.id,
				pwd: payload.password,
				authenticate: true,
			};
		default:
			return { ...state };
	}
}

export default authReducer;
