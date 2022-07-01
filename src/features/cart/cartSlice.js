import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	customerName: '',
	hasCoupon: false
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			action.payload.discountedPrice = action.payload.price * (state.hasCoupon ? .9 : 1);
			state.items.push(action.payload);
		},
		changeCustomerName: (state, action) => {
			state.customerName = action.payload;
		},
		addCoupon: (state) => {
			state.hasCoupon = true,
				state.items.forEach(m=>m.discountedPrice = m.price * .9)
		}
	}
});

export const { addCoupon } = cartSlice.actions;
export default cartSlice.reducer;