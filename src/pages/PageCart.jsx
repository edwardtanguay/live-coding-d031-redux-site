import { useDispatch, useSelector } from 'react-redux';
import { addCoupon } from '../features/cart/cartSlice';

export const PageCart = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart);

	const formatPrice = (price) => {
		return new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR',
		}).format(price);
	};

	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<div>
				<button onClick={() => dispatch(addCoupon())}>
					Add Coupon
				</button>
			</div>

			<p>Number of books: {items.length}</p>
			<ul>
				{items.map((item, i) => {
					return (
						<li key={i}>
							{item.title} - {formatPrice(item.price)} - (discount price: {formatPrice(item.discountedPrice)})
						</li>
					);
				})}
			</ul>
		</div>
	);
};
