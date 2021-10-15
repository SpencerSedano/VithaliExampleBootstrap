import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

// images
import Doctors from "../img/doctors.svg";

const Section = () => {
	return (
		<>
			<Container className="py-5">
				<Row>
					<Col className="m-auto" md={4}>
						<h1 style={{ fontWeight: "bold" }}>
							Desbloquea el poder de la nutrición
						</h1>
						<h3>
							Separa tu cita nutricional &#38; dietas personalizadas acorde tu
							estilo de vida
						</h3>
					</Col>

					<Col className="justify-content-md-center" md={8}>
						<Image src={Doctors} fluid />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Section;
