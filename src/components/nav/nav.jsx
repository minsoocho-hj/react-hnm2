import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useRef } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import styles from './nav.module.css';

const Nav = ({ authenticate, setAuthenticate }) => {
	const menus = ['Women', 'Men', 'Kids', 'Sale', 'H&M Home', 'Sustainable'];
	const navigate = useNavigate();

	const inputRef = useRef();
	let [searchParams, setSearchParams] = useSearchParams();

	const onSearch = (e) => {
		if (e.code === 'Enter') {
			e.preventDefault();
			let params = inputRef.current.value;
			navigate(`/?q=${params}`);
		} else {
			return;
		}
	};
	return (
		<Container>
			<Row>
				<Col>
					{authenticate ? (
						<div
							className={styles.loginBox}
							onClick={() => setAuthenticate(false)}
						>
							<FontAwesomeIcon icon={faUser} />
							<p>Logout</p>
						</div>
					) : (
						<div className={styles.loginBox} onClick={() => navigate('/login')}>
							<FontAwesomeIcon icon={faUser} />
							<p>Login</p>
						</div>
					)}
				</Col>
			</Row>
			<Row className='justify-content-md-center'>
				<Col lg={12} md={12} sm={12} className={styles.logo}>
					<Link to='/'>
						<img
							src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png'
							alt=''
							className={styles.logoImg}
						/>
					</Link>
				</Col>
			</Row>
			<Row className='justify-content-md-center'>
				<Col lg={12} md={12} sm={12} className={styles.logo}>
					<ul className={styles.menus}>
						{menus.map((menu, index) => (
							<li className={styles.menu} key={index}>
								{menu}
							</li>
						))}
					</ul>
					<div className={styles.search}>
						<FontAwesomeIcon icon={faSearch} />
						<input
							type='text'
							className={styles.input}
							placeholder='Search '
							onKeyPress={(e) => onSearch(e)}
							ref={inputRef}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Nav;
