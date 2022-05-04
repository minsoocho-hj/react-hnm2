import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ product }) => {
	const { img, title, price, choice } = product;
	const navigate = useNavigate();
	const goToDetail = () => {
		navigate(`/detail/${product.id}`);
	};
	return (
		<div className={styles.card} onClick={goToDetail}>
			<img src={img} alt='product' className={styles.img} />
			<div>
				<p className={styles.choice}>{choice ? 'Conscious choice' : ''}</p>
				<p className={styles.new}>{product?.new === true ? 'new' : ''}</p>
			</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.price}>{price}</p>
		</div>
	);
};

export default Card;
