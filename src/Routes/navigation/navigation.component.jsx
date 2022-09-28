import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Crown } from '../../assets/crown.svg';

const Navigation = () => {
	return (
		<Fragment>
			<div className="mx-8 mt-3 text-3xl flex justify-between">
				<Link to="/">
					<Crown />
				</Link>
				<div>	
					<Link className="ml-4 text-gray-900 hover:text-gray-500" to="/shop">
						Shop
					</Link>
					<Link className="ml-4 text-gray-900 hover:text-gray-500" to="/contact">
						Contact
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;
