import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import All from './components/all/all';
import Login from './components/login/login';
import PrivateRouter from './components/privateRouter/privateRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// 1. 페이지는 3개, 전체, 디테일, 로그인페이지.
// 2. 유저는 전체 페이지를 볼 수 있다.
//3. 유저는 상품 클릭 시 로그인이 되어있으면 상품 디테일 페이지로 넘어가 디테일을 볼 수있다.
// 디테일 페이지 까지 완성.
// 로그인페이지만들기, authentication logic 만들기.

// 유저는 검색할 수 있다. (검색창만들기 + 검색 쿼리 url 요청 )
//4. 유저는 상품 클릭 시  로그인이 되어있지않으면 로그인 페이지로 간다
//5. 로그인 버튼 클릭시 로그인페이지로 간다.
//6 . 로그인이 되어있으면 네비게이션 바에 로그아웃, 로그아웃 상태면 로그인이라고 표시된다.

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
