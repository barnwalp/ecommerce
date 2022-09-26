export default function CategoryItem ({ items }) {
	// console.log(items.id);
	return (
		<div>
			<p>{items.title}</p>
			<p>{items.imageUrl}</p>
		</div>
	);
};
