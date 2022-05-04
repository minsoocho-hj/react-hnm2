import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
	let { id } = useParams();
	const [product, setProduct] = useState([]);
	const getDetail = () => {
		let url = `https://my-json-server.typicode.com/minsoocho-hj/react-hnm2/products/${id}`;
	};
	return (
		<Container>
			<Row>
				<Col lg={6} md={5} sm={12}>
					<img src='' alt='' className='img' />
				</Col>
				<Col lg={6} md={5} sm={12}>
					<div className='desc'>
						<p className='title'>title</p>
						<p className='price'>price</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;
