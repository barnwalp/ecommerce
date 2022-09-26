export default function CategoryItem ({ items }) {
	// console.log(items.id);
	return (
		<div className="relative">
			<img className="object-cover w-full h-full" src={items.imageUrl} alt={`shop ${items.id}`} />
			<div className="absolute p-2 px-3 bg-white border-2 border-black border-double rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="font-bold text-center text-gray-900 min-w-max">{items.title}</p>
				<p className="text-center text-gray-500 min-w-max">Shop Now</p>
			</div>
		</div>
	);
};
