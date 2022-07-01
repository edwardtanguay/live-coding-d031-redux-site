import { createSlice } from '@reduxjs/toolkit';

const intialState = {
	counter: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	intialState,
	reducers: {
		add: (state) => {
			state.counter += 1;
		},
		subtract: (state) => {
			state.counter -= 1;
		}
	}
});

export const { add, subtract } = createSlice.actions;
export default cartSlice.reducer;