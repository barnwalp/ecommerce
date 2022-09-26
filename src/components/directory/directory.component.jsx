import CategoryItem from '../category-item/category-item.component.jsx';

export default function Directory(props) {
	const card = props.categories.map(category => {
		return (
			<CategoryItem 
				key={category.id}
				items={category}
			/>
		)	
	})
	return (
		<div className="grid grid-cols-3 gap-2">
			{card}	
		</div>
	);
};
