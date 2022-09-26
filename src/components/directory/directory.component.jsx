import CategoryItem from '../category-item/category-item.component.jsx';

export default function Directory(props) {
	const card = props.categories.map(category => {
		// console.log(category);
		return (
			<CategoryItem 
				key={category.id}
				items={category}
			/>
		)	
	})
	return (
		<div>
			<h1>test</h1>
			{card}	
		</div>
	);
};
