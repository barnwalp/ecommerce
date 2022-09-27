import { Routes, Route, Outlet } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<div>
				<h1 className="mx-auto mt-3 text-3xl max-w-max">E-Commerce</h1>
			</div>
			<Outlet />
		</div>
	)
}

export default Navigation;
