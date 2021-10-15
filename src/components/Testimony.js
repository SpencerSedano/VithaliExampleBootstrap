import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const Testimony = () => {
	return (
		<>
			<Container className="py-5">
				<Row>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="https://www.lavanguardia.com/files/image_449_220/uploads/2019/04/02/5fa523c44bc98.jpeg"
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Gato</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20Como%20disciplinar%20a%20tu%20gato.jpg?itok=V7Gs6wt3"
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Gato</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Gato</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Testimony;
