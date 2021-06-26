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
        <Row>
          <Column sm={2}>
            <FooterLink href="#">Ruwantha Furniture</FooterLink>
          </Column>

          <Column sm={8}>
            <FooterLink href="#">Get Augmented Reality featured app</FooterLink>
          </Column>

          <Column sm={2}>
            <FooterLink href="#">
              <img src={Appicon} width={130} />
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
