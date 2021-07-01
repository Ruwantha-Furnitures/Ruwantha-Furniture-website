import React from 'react';
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "reactstrap";
import FormStyle from "../../../css/web/Form.module.css";
import NavButtonStyle from "../../../css/web/common.module.css";

function SearchProduct() {
    require("bootstrap/dist/css/bootstrap.min.css");
    return (
        <div>
            <Container>
            <Form lassName={FormStyle.innerbox}>              
                <Row>
                    <Col>
                        Category
                        <select className={FormStyle.dropBox} >
                            <option>Asini</option>
                            <option>Asini</option>
                        </select>
                    </Col>    
                </Row>                                                                                                    
            </Form>  
            </Container>  
        </div>
    );
}

export default SearchProduct;