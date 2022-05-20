import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Card from '../card/card';
import styles from './all.module.css';

import { productAction } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const All = () => {
	const productList = useSelector((state) => state.product.productList);
	const [query, setQuery] = useSearchParams();
	const dispatch = useDispatch();
	const getProducts = () => {
		const params = query.get('q') || '';
		dispatch(productAction.getProducts(params));
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<Container>
			<Row>
				{productList.map((product) => (
					<Col lg={3} md={6} sm={12} key={product.id}>
						<Card product={product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default All;
