import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: []	
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		}
	}
});

export const { add, subtract } = cartSlice.actions;
export default cartSlice.reducer;