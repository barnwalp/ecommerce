import Home from './Routes/home/home.component.jsx';
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

const Shop = () => {
	return (
		<div>
			<h2>Show Now</h2>
		</div>
	)
}

const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
  );
}

export default App;
