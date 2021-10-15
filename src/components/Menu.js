import React from "react";
import { Navbar, NavDropdown, Nav, Container, Image } from "react-bootstrap";

// Images
import Logo from "../img/logo.png";

const Menu = () => {
	return (
		<div>
			<>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">
							{" "}
							<Image src={Logo} width="150" height="80"></Image>{" "}
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="justify-content-end" style={{ width: "100%" }}>
								<Nav.Link href="#home">Planes</Nav.Link>
								<Nav.Link href="#link">Nosotros</Nav.Link>
								<NavDropdown title="Servicios" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">
										Personal
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Negocios
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Animales
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		</div>
	);
};

export default Menu;
