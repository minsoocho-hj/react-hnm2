import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Card from '../card/card';
import styles from './all.module.css';

const All = () => {
	const [products, setProducts] = useState([]);
	const [query, setQuery] = useSearchParams();

	const getProducts = async () => {
		const params = query.get('q') || '';
		let url = `https://my-json-server.typicode.com/minsoocho-hj/react-hnm2/products/?q=${params}`;
		let res = await fetch(url);
		let data = await res.json();
		setProducts(data);
		console.log(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<Container>
			<Row>
				{products.map((product) => (
					<Col lg={3} md={6} sm={12} key={product.id}>
						<Card product={product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default All;
