import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import All from './components/all/all';
import Login from './components/login/login';
import PrivateRouter from './components/privateRouter/privateRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const [authenticate, setAuthenticate] = useState(false);
	return (
		<>
			<Nav authenticate={authenticate} setAuthenticate={setAuthenticate} />
			<Routes>
				<Route path='/' element={<All />} />
				<Route
					path='/detail/:id'
					element={<PrivateRouter authenticate={authenticate} />}
				/>
				<Route
					path='/login'
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
			</Routes>
		</>
	);
}

export default App;
