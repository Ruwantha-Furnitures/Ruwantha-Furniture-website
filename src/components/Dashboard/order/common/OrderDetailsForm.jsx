import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getSellProducts } from "./../../service/sellProduct";
import { getOrderDetails } from "./../../service/order";
import { editDeliveryDetails, getDeliveries } from "./../../service/delivery";

function OrderDetailsForm() {
  const { id } = useParams();

  const [bill, setBill] = useState({
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
    total_amount: 0,
  });

  const [sellProducts, setSellProducts] = useState([]);
  const [order, setOrder] = useState({
    total_amount: 0,
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: "",
    },
    payment_method: "ONLINE",
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
  if (orderLocation === "assignOrder") {
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
      const resultOrder = await getOrderDetails(id);
      setOrder(resultOrder.data);
      // get order data according to invoice
      const resultSellProducts = await getSellProducts();
      const sellProductsData = resultSellProducts.data.filter(
        (sellProductItem) => sellProductItem.order_id == id
      );
      setSellProducts(sellProductsData);
      var numOfProducts = 0;
      var totalPriceOfProducts = 0;
      var totalAmountOfProducts = 0;
      var totalDiscount = 0;

      sellProductsData.forEach((sellProductItem) => {
        numOfProducts = numOfProducts + 1;
        totalPriceOfProducts =
          totalPriceOfProducts +
          parseInt(sellProductItem.product.price) *
            parseInt(sellProductItem.quantity);
        totalAmountOfProducts =
          totalAmountOfProducts + parseInt(sellProductItem.price);
      });

      totalDiscount =
        ((totalPriceOfProducts - totalAmountOfProducts) /
          totalPriceOfProducts) *
        100;

      var discountofSellProducts = Math.round(totalDiscount);
      setBill({
        ...bill,
        no_of_products: numOfProducts,
        products_price: totalPriceOfProducts.toFixed(2),
        total_discounts: discountofSellProducts,
        total_amount: totalAmountOfProducts.toFixed(2),
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handleCompleteDeliveryProcess = async (e) => {
    e.preventDefault();
    try {
      const resultDeliveries = await getDeliveries();
      console.log(resultDeliveries.data);
      const delivery = resultDeliveries.data.filter(
        (deliveryData) =>
          deliveryData.order_id === parseInt(id) &&
          deliveryData.request_status === 0
      )[0];
      // console.log(delivery);
      const deliver_id = delivery.id;

      const newDelivery = {
        complete_status: 1,
      };

      // console.log(delivery);

      const result = editDeliveryDetails(deliver_id, newDelivery);
      window.location = "/dashboard/deliveryDriver/deliveries";
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
                  value={bill.no_of_products}
                  placeholder="Number of Products"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value={"Rs. " + bill.products_price}
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
                  value={"Rs. " + bill.total_amount}
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
                  value={order.customer.first_name}
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
                  value={order.customer.last_name}
                  placeholder="Customer Last Name"
                  className={ProductViewFormStyle.inputStyle}
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
                  value={order.customer.address}
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
                  value={order.customer.contact_number}
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
                  value={order.payment_method}
                  placeholder="Payment Method"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {Array.isArray(sellProducts) === true && (
        <React.Fragment>
          {sellProducts.map((sellProduct, index) => (
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
                        value={sellProduct.product.name}
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
                        value={sellProduct.quantity}
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
                        value={"Rs. " + sellProduct.product.price}
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
                        value={sellProduct.product.discount + "%"}
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
              onClick={(e) => handleCompleteDeliveryProcess(e)}
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
