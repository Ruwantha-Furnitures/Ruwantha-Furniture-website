import React from "react";
import {
Box,
FooterLink,
Heading
} from "./FooterStyles";
import { Container, Row, Col } from 'reactstrap';
import logo from "../../../assets/nlogo.png";
import Appicon from "../../../assets/google.svg";

const FooterunRegistered = () => {
return (
	<Box>	
	<Container align='center'>
		<Row sm={12}>
			<Col sm={3} style={{marginTop:"0px"}}>
				<Heading  align='center'><img src={logo} style={{padding: '5px'}} alt='logo'/>
				AR Magic</Heading>
			</Col>
			<Col sm={2} style={{marginTop:"20px"}}>
				<FooterLink href="/home">Home</FooterLink><br />
				<FooterLink href="/product">Product</FooterLink><br />
				<FooterLink href="/contact-us">Contact Us</FooterLink><br />			
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
				<FooterLink href="https://play.google.com/store/apps/?hl=en&gl=US"><img src={Appicon} width={130} alt='appimg'/></FooterLink>	
			</Col>
		</Row>
	</Container>
	</Box>
);
};
export default FooterunRegistered;
