import React from "react";
import {
Box,
FooterLink,
Heading
} from "./FooterStyles";
import { Container, Row, Col } from 'reactstrap';
import logo from "../../../assets/nlogo.png";
import Appicon from "../../../assets/google.svg";

const Footer = () => {
return (
	<Box>	
	<Container align='center'>
		<Row sm={12}>
			<Col sm={3} style={{marginTop:"0px"}}>
				<Heading  align='center'><img src={logo} style={{padding: '5px'}} alt='logo'/>
				AR Magic</Heading>
			</Col>
			<Col sm={2} style={{marginTop:"20px"}}>
				<FooterLink href="#">Home</FooterLink><br />
				<FooterLink href="#">About Us</FooterLink><br />
				<FooterLink href="#">Product</FooterLink><br />			
			</Col>					
			<Col sm={3} style={{marginTop:"20px"}}>				
				<FooterLink>No. 10, Nuge Asala,</FooterLink><br />
				<FooterLink>Nauththuduwa, Matugama</FooterLink><br />
				
			</Col>
			<Col sm={3} style={{marginTop:"20px"}}>
				<FooterLink>0787726269</FooterLink><br />
				<FooterLink>madumalhasith@gmail.com</FooterLink><br />								
			</Col>
			<Col sm={1} style={{marginTop:"20px"}}>
				<FooterLink href="#"><img src={Appicon} width={130} alt='appimg'/></FooterLink>	
			</Col>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
