import { useSelector } from 'react-redux';

export const PageCart = () => {
	const { items } = useSelector((state) => state.cart);

	return (
		<div className="page_cart">
			<h2>Cart</h2>
			<p>Number of books: {items.length}</p>
			<ul>
				{items.map((item, i) => {
					return (
						<li key={i}>{item.title} - {item.price}</li>
					)
				})}
			</ul>
		</div>
	)
}