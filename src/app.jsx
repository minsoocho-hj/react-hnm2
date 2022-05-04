import { Col, Container, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Nav from './components/nav/nav';
import All from './components/all/all';
import Detail from './components/detail/detail';
import Login from './components/login/login';
// 1. 페이지는 3개, 전체, 디테일, 로그인페이지.
// 2. 유저는 전체 페이지를 볼 수 있다.
//3. 유저는 상품 클릭 시 로그인이 되어있으면 상품 디테일 페이지로 넘어가 디테일을 볼 수있다.
//4. 로그인이 되어있지않으면 로그인 페이지로 간다
//5. 로그인 버튼 클릭시 로그인페이지로 간다.
//6 . 로그인이 되어있으면 네비게이션 바에 로그아웃, 로그아웃 상태면 로그인이라고 표시된다.

function App() {
	return (
		<>
			<Nav />
			<Container>
				<Row>
					<Col>
						<Routes>
							<Route path='/' element={<All />} />
							<Route path='/detail/:id' element={<Detail />} />
							<Route path='/login' element={<Login />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
