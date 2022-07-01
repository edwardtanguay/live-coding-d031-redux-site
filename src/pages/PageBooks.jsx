import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const PageBooks = () => {
	const dispatch = useDispatch();
	const { customerName } = useSelector((state) => state.cart);

	return (
		<div className="page_books">
			{customerName === '' ? (
				<h2>Books</h2>
			) : (
				<h2>Books for {customerName}</h2>
			)}
			<button onClick={() => dispatch({type:'cart/addItem', payload: {title: "Node.js Cookbook", price: 23.99}})}>Node.js Cookbook</button>
			<button onClick={() => dispatch({type:'cart/addItem', payload: {title: "Microservices Made Easy", price: 27.99}})}>Microservices Made Easy</button>
		</div>
	)
}