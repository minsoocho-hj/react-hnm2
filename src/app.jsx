import { Col, Container, Row } from 'react-bootstrap';
import styles from './app.module.css';
import Nav from './components/nav/nav';

function App() {
	return (
		<>
			<Nav />
			<Container>
				<Row>
					<Col>
						<div className={styles.content}>content!</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
