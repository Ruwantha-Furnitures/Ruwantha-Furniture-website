import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getInvoiceDetails } from "./../../service/invoice";
import { getOrders } from "./../../service/order";

function OrderDetailsForm() {
  const { id } = useParams();

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

  const url = window.location.pathname.split("/");
  const orderLocation = url[2];
  let navigate;
  if (orderLocation === "purchaseOrder") {
    navigate = "/dashboard/purchaseOrders";
  }
  if (orderLocation === "completedOrder") {
    navigate = "/dashboard/completedOrders";
  }
  if (orderLocation === "assigndOrder") {
    navigate = "/dashboard/assignListOrderDriver";
  }
  if (orderLocation === "deliveryDriver") {
    navigate = "/dashboard/deliveryDriver/deliveries";
  }
  if (orderLocation === "deliveryDriverNotifications") {
    navigate = "/dashboard/deliveryDriver/notifications";
  }

  console.log(navigate);

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
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Purchase Order Details
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link to={navigate} className={ProductViewFormStyle.linkStyle}>
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
                  value={invoice.no_of_products}
                  placeholder="Number of Products"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value={"Rs." + invoice.products_price}
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
                  value={invoice.total_discounts + "%"}
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
                  value={"Rs." + invoice.total_amount}
                  placeholder="Total Amount"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details */}
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
                        value={order.product.price}
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
                        value={order.product.discount}
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

      {orderLocation === "deliveryDriver" && (
        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.successButtonColor
              }
            >
              Complete
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default OrderDetailsForm;
