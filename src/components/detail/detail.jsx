import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = (props) => {
	let { id } = useParams();
	const [product, setProduct] = useState([]);
	const getDetail = async () => {
		let url = `https://my-json-server.typicode.com/minsoocho-hj/react-hnm2/products/${id}`;
		let res = await fetch(url);
		let data = await res.json();
		console.log(data);
		setProduct(data);
	};

	useEffect(() => {
		getDetail();
	}, []);
	return (
		<Container>
			<Row>
				<Col lg={6} md={5} sm={12}>
					<img src={product.img} alt='' className={styles.img} />
				</Col>
				<Col lg={6} md={5} sm={12}>
					<div className={styles.desc}>
						<p className={styles.title}>{product.title}</p>
						<p className={styles.price}>{product.price}</p>
						<p className={styles.choice}>
							{product.choice ? 'Conscious choice' : ''}
						</p>
						<p className={styles.new}>{product.new ? 'new' : ''}</p>
						<button className={styles.btn}>Add</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;
