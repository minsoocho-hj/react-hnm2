import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = (props) => {
	const menus = ['Women', 'Men', 'Kids', 'H&M Home', 'Sustainable'];
	return (
		<div className={styles.nav}>
			<div className={styles.loginBox}>
				<FontAwesomeIcon icon={faUser} />
				<p>Login</p>
			</div>
			<div className={styles.navbar}>
				<Link to='/'>
					<img
						src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png'
						alt=''
						className={styles.logo}
					/>
				</Link>
				<ul className={styles.menus}>
					{menus.map((menu, index) => (
						<li className={styles.menu} key={index}>
							{menu}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
