import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
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
				<Col lg={6} md={5} sm={12} className={styles.image}>
					<img src={product.img} alt='' />
				</Col>
				<Col lg={6} md={5} sm={12}>
					<div className={styles.desc}>
						<h2 className={styles.title}>{product.title}</h2>
						<p className={styles.price}>{product.price}원</p>
						<p className={styles.choice}>
							{product.choice ? 'Conscious choice' : ''}
						</p>
						<p className={styles.new}>{product.new ? 'new' : ''}</p>
						<Dropdown>
							<Dropdown.Toggle variant='success' id='dropdown-basic'>
								Select size
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{product.size?.map((item, index) => (
									<Dropdown.Item href='#/action-1' key={index}>
										{item}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
						<button className={styles.btn}>Add</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;
