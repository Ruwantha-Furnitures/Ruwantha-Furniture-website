import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import GradeIcon from "@material-ui/icons/Grade";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router-dom";
import axios from "axios";

function PurchasedHistoryTable() {
  const [orderIDs, setorderIDs] = useState([]);
  const [historyItems, setHistoryItems] = useState([]);
  const [isReviewID, setisReviewID] = useState(false);

  var totalcounter = 0;
  var caldiscount = 0.0;

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    let customer_id = localStorage.getItem("CustomerID");
    const orderResponse = await axios.get(
      `http://localhost:8080/api/customerorder/${customer_id}`
    );
    // console.log(orderResponse.data)
    setorderIDs(orderResponse.data);

    const length = orderResponse.data.length;

    var sellProducts = [];

    for (let i = 0; i < Number(length); i++) {
      console.log(orderResponse.data[i].id);
      const order_id = orderResponse.data[i].id;

      const sellProductResponse = await axios.get(
        `http://localhost:8080/api/customersellProduct/${order_id}`
      );

      var newobject = sellProductResponse.data;
      console.log(newobject);

      // sellProducts.push(newobject);
      if (Number(newobject.length) >= 0) {
        for (let i = 0; i < Number(newobject.length); i++) {
          sellProducts.push(newobject[i]);
        }
      }
    }
    console.log(sellProducts);
    setHistoryItems(sellProducts);
    console.log(historyItems);
  };

  function GetProductID(id) {
    console.log(id);
    localStorage.setItem("ReviewProductID", id);
    setisReviewID(true);
  }

  function getTotal(price, quantity, discount) {
    const total = Number(price * quantity);
    // var myNumberWithTwoDecimalPlaces=parseFloat(myNumber).toFixed(2);
    var totalTwoDecimalPlaces = parseFloat(total).toFixed(2);
    totalcounter = Number(totalcounter) + Number(totalTwoDecimalPlaces);
    localStorage.setItem("cartTotal", totalcounter);

    const afterDiscountForAProduct = parseFloat(
      (Number(price) - Number(price) * (Number(discount) / 100)) *
        Number(quantity)
    ).toFixed(2);
    caldiscount = parseFloat(
      (Number(price) - Number(price) * (Number(discount) / 100)) *
        Number(quantity) +
        Number(caldiscount)
    ).toFixed(2);
    // afterDiscount += (Number)(parseFloat((Number)(total - total*(discount/100))).toFixed(2)) ;

    localStorage.setItem("afterDiscount", caldiscount);

    return afterDiscountForAProduct;
  }

  function getDate(date) {
    // date = new Date('2013-03-10T02:00:00Z');

    // var sentence = "Oh a cookie!"
    // sentence.split(" ");
    // [ "Oh", "a", "cookie!" ]

    var sentence = date;
    console.log(sentence);
    var pieces = sentence.split("T");
    console.log(pieces);
    return pieces[0];
  }

  const rowStyle = {
    margin: "10px",
  };

  const redirectReview = <Redirect to="/customer_add_reviews" />;
  return (
    <React.Fragment>
      {isReviewID === true && redirectReview}
      {isReviewID === false && (
        <div>
          <Card style={{ marginBottom: "20px", marginTop: "30px" }}>
            <Form style={{ padding: "20px" }}>
              <Row sm={12} style={rowStyle}>
                <Col sm={12}>
                  <h2 style={{ textAlign: "center" }}>Purchased History</h2>
                  <br />
                  <Table responsive="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price Rs.</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th>Purchase Date</th>
                        <th>Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(historyItems) === true && (
                        <>
                          {historyItems.map((productList, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>
                                <img
                                  src={productList.product.img_location}
                                  style={{
                                    width: "100px",
                                    borderRadius: "20px",
                                  }}
                                  alt="imgitem"
                                ></img>
                              </td>
                              <td>{productList.product.name}</td>
                              <td>{productList.product.price}</td>
                              <td>{productList.quantity}</td>
                              <td>{productList.product.discount}</td>
                              <td>
                                {getTotal(
                                  productList.product.price,
                                  productList.quantity,
                                  productList.product.discount
                                )}
                              </td>
                              <td>{getDate(productList.updatedAt)}</td>
                              {/* <td>{productList.updatedAt}</td> */}
                              <td>
                                {/* <Link to='/customer_add_reviews'><button class="btn btn-light" onClick={() => GetProductID(productList.id)}><GradeIcon></GradeIcon></button></Link> */}
                                <button
                                  class="btn btn-light"
                                  onClick={() =>
                                    GetProductID(productList.product.id)
                                  }
                                >
                                  <GradeIcon></GradeIcon>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      )}
    </React.Fragment>
  );
}

export default PurchasedHistoryTable;
