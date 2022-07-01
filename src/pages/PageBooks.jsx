import { useDispatch } from 'react-redux';
// import { addItem } from '../features/cart/cartSlice';

export const PageBooks = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_books">
			<h2>Books</h2>
			<button onClick={() => dispatch({type:'cart/addItem', payload: {title: "Node.js Cookbook", price: 23.99}})}>Node.js Cookbook</button>
			<button onClick={() => dispatch({type:'cart/addItem', payload: {title: "Microservices Made Easy", price: 27.99}})}>Microservices Made Easy</button>
		</div>
	)
}