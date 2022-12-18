import Home from './Routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/navigation/navigation.component.jsx';
import Shop from './Routes/shop/shop.component.jsx';
import SignIn from './Routes/sign-in/sign-in.component';

const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
  );
}

export default App;
