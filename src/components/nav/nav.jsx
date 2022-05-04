import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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
				<img
					src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png'
					alt=''
					className={styles.logo}
				/>
				<ul className={styles.menus}>
					{menus.map((menu) => (
						<li className={styles.menu}>{menu}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
