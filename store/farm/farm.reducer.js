import types from './farm.types';

const initialState = {
	isLoading: false,
	riceData: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.fetchRiceDataRequested:
			return { ...state, isLoading: true };
		case types.fetchRiceDataSucceeded:
			return { ...state, isLoading: false, riceData: payload };
		default:
			return state;
	}
};
