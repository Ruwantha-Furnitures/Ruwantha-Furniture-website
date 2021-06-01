import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from "../../../assets/logo.png";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>	
			<Column>
				<FooterLink href="#"><img src={logo} alt={logo} width={200} height={200}></img></FooterLink>
			</Column>
			<Column>
				<Heading>About Us</Heading>
				<FooterLink href="#">Aim</FooterLink>
				<FooterLink href="#">Vision</FooterLink>
				<FooterLink href="#">Testimonials</FooterLink>
			</Column>
			<Column>
				<Heading>About Us</Heading>
				<FooterLink href="#">Aim</FooterLink>
				<FooterLink href="#">Vision</FooterLink>
				<FooterLink href="#">Testimonials</FooterLink>
			</Column>
			<Column>
				<Heading>About Us</Heading>
				<FooterLink href="#">Aim</FooterLink>
				<FooterLink href="#">Vision</FooterLink>
				<FooterLink href="#">Testimonials</FooterLink>
			</Column>
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
