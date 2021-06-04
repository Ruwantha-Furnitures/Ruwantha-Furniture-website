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
import Appicon from "../../../assets/google.svg";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row className="justify-content-md-center">	
			<Column>
				<FooterLink href="#">Ruwantha Furniture</FooterLink>
			</Column>

			<Column>
				<FooterLink href="#">Get Augmented Reality featured app for your phone</FooterLink>
			</Column>
		
			<Column>
				<FooterLink href="#"><img src={Appicon} width={130}/></FooterLink>	
			</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
