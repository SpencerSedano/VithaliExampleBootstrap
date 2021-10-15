import React from "react";
import { Card, CardGroup } from "react-bootstrap";
const Prices = () => {
	return (
		<>
			<CardGroup className="py-5 px-3">
				<Card className="py-5 px-3">
					<Card.Img
						variant="top"
						src="https://images.askmen.com/1080x540/sports/bodybuilding/fitness-people-1069487-TwoByOne.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card className="py-5 px-3">
					<Card.Img
						variant="top"
						src="https://images.huffingtonpost.com/2015-03-23-1427093219-6615859-huffpostpeoplenewtofitness.jpg"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to
							additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card className="py-5 px-3">
					<Card.Img
						variant="top"
						src="https://static01.nyt.com/images/2021/01/09/us/09wealth-print/merlin_182096334_af62cbaa-b8e1-40ce-a0df-351ba389d651-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</>
	);
};

export default Prices;
