import Home from './Routes/home/home.component.jsx';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './Routes/navigation/navigation.component.jsx';
import Shop from './Routes/shop/shop.component.jsx';

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
