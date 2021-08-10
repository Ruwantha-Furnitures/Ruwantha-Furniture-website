import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import {
  editInvoiceDetails,
  getInvoiceDetails,
} from "./../../../service/invoice";
import { getOrders } from "./../../../service/order";

function ProductSellAmountForm() {
  const { id } = useParams();

  const [bill, setBill] = useState({
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
    total_amount: 0,
  });

  const [orders, setOrders] = useState([]);
  const [invoice, setInvoice] = useState({
    total_amount: 0,
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: "",
      payment_method: "",
    },
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
  });

  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      // get invoice data
      const resultInvoice = await getInvoiceDetails(id);
      setInvoice(resultInvoice.data);
      // get order data according to invoice
      const resultOrders = await getOrders();
      const ordersData = resultOrders.data.filter(
        (orderItem) => orderItem.invoice_id == id
      );
      setOrders(ordersData);

      var numOfProducts = 0;
      var totalPriceOfProducts = 0;
      var totalAmountOfProducts = 0;
      var totalDiscount = 0;

      ordersData.forEach((orderItem) => {
        numOfProducts = numOfProducts + 1;
        totalPriceOfProducts =
          totalPriceOfProducts + orderItem.product.price * orderItem.quantity;
        totalAmountOfProducts = totalAmountOfProducts + orderItem.price;
      });

      totalDiscount =
        ((totalPriceOfProducts - totalAmountOfProducts) /
          totalPriceOfProducts) *
        100;

      var discountofOrders = totalDiscount.toFixed(2);

      setBill({
        ...bill,
        no_of_products: numOfProducts,
        products_price: totalPriceOfProducts,
        total_discounts: discountofOrders,
        total_amount: totalAmountOfProducts,
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handlePaymentProcess = async (e) => {
    e.preventDefault();
    const numOfProducts = bill.no_of_products;
    const products_price = bill.products_price;
    const total_discounts = bill.total_discounts;
    const total_amount = bill.total_amount;
    const newInvoice = {
      ...invoice,
      total_amount: total_amount,
      no_of_products: numOfProducts,
      products_price: products_price,
      total_discounts: total_discounts,
    };

    const response = await editInvoiceDetails(id, newInvoice);
    window.location = "/dashboard/purchaseOrders";
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Sell Page - Amount
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/product/sell/product"
              className={ProductViewFormStyle.linkStyle}
            >
              <div className={ProductViewFormStyle.backStyle}>
                <span
                  className={
                    "material-icons " + ProductViewFormStyle.backIconStyle
                  }
                >
                  arrow_back_ios
                </span>
                <div className={ProductViewFormStyle.backButtonStyle}>Back</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <form className={ProductViewFormStyle.formStyle}>
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.infoPart}>
            <div className={ProductViewFormStyle.form}>
              <div
                className={
                  ProductViewFormStyle.formLine +
                  " " +
                  ProductViewFormStyle.setMarginTop
                }
              >
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    No. Product
                  </label>
                  <input
                    type="text"
                    value={bill.no_of_products}
                    placeholder="Number of Products"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Price
                  </label>
                  <input
                    type="text"
                    value={bill.products_price}
                    placeholder="Product(s) Price"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Discount(s)
                  </label>
                  <input
                    type="text"
                    value={bill.total_discounts + "%"}
                    placeholder="Total Discount"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Amount
                  </label>
                  <input
                    type="text"
                    value={"Rs." + bill.products_price}
                    placeholder="Total Amount"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.descButtonAddStyle +
                " " +
                ProductViewFormStyle.descButtonAddStyleColor +
                " " +
                ProductViewFormStyle.addRightMargin
              }
            >
              Cancel
            </button>
            <button
              className={ProductViewFormStyle.descButtonAddStyle}
              onClick={(e) => handlePaymentProcess(e)}
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
      {/* Customer Details */}

      {/* {Array.isArray(invoice.customer) === true && ( */}
      <div className={ProductViewFormStyle.details}>
        <div className={ProductViewFormStyle.infoPart}>
          <div className={ProductViewFormStyle.form}>
            <div
              className={
                ProductViewFormStyle.formLine +
                " " +
                ProductViewFormStyle.setMarginTop
              }
            >
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  First Name
                </label>
                <input
                  type="text"
                  value={invoice.customer.first_name}
                  placeholder="Customer First Name"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={invoice.customer.last_name}
                  placeholder="Customer Last Name"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.dataforLong}>
                <label className={ProductViewFormStyle.labelStyleforLong}>
                  Email
                </label>
                <input
                  type="text"
                  value={invoice.customer.email}
                  placeholder="Customer Email Address"
                  className={ProductViewFormStyle.inputStyleforLong}
                  readOnly
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.dataforLong}>
                <label className={ProductViewFormStyle.labelStyleforLong}>
                  Address
                </label>
                <input
                  type="text"
                  value={invoice.customer.address}
                  placeholder="Customer Dilever Address"
                  className={ProductViewFormStyle.inputStyleforLong}
                  readOnly
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Number
                </label>
                <input
                  type="text"
                  value={invoice.customer.contact_number}
                  placeholder="Customer Number"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Payment
                </label>
                <input
                  type="text"
                  value={invoice.customer.payment_method}
                  placeholder="Payment Method"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {Array.isArray(orders) === true && (
        <React.Fragment>
          {orders.map((order, index) => (
            <div key={index + 1} className={ProductViewFormStyle.details}>
              <div className={ProductViewFormStyle.infoPart}>
                <div className={ProductViewFormStyle.form}>
                  <div
                    className={
                      ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                    }
                  >
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Product
                      </label>
                      <input
                        type="text"
                        value={order.product.name}
                        placeholder="Product Name"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Quantity
                      </label>
                      <input
                        type="text"
                        value={order.quantity}
                        placeholder="Product Qunatity"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={ProductViewFormStyle.formLine}>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Price
                      </label>
                      <input
                        type="text"
                        value={"Rs." + order.price}
                        placeholder="Product Price"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                    <div className={ProductViewFormStyle.data}>
                      <label className={ProductViewFormStyle.labelStyle}>
                        Discount
                      </label>
                      <input
                        type="text"
                        value={
                          (((order.product.price * order.quantity -
                            order.price) /
                            order.product.price) *
                            100) /
                            order.quantity +
                          "%"
                        }
                        placeholder="Product Discount"
                        className={ProductViewFormStyle.inputStyle}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      )}

      {/* <div className={ProductViewFormStyle.details}>
        <div className={ProductViewFormStyle.infoPart}>
          <div className={ProductViewFormStyle.form}>
            <div
              className={
                ProductViewFormStyle.formLine +
                " " +
                ProductViewFormStyle.setMarginTop
              }
            >
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Product
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Name"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Price"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Quantity
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Qunatity"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Discount
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Product Discount"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    */}
    </React.Fragment>
  );
}

export default ProductSellAmountForm;
