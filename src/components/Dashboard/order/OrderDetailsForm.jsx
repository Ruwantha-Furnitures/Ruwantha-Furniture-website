import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";

function OrderDetailsForm() {
  const url = window.location.pathname.split("/");
  const orderLocation = url[2];
  let navigate;
  if (orderLocation === "purchaseOrders") {
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

  console.log(url);

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
                  value=""
                  placeholder="Number of Products"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value=""
                  placeholder="Product(s) Price"
                  className={ProductViewFormStyle.inputStyle}
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
                  value=""
                  placeholder="Total Discount"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Amount
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Total Amount"
                  className={ProductViewFormStyle.inputStyle}
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
                  value=""
                  placeholder="Customer First Name"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Last Name
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Customer Last Name"
                  className={ProductViewFormStyle.inputStyle}
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
                  value=""
                  placeholder="Customer Email Address"
                  className={ProductViewFormStyle.inputStyleforLong}
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
                  value=""
                  placeholder="Customer Dilever Address"
                  className={ProductViewFormStyle.inputStyleforLong}
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
                  value=""
                  placeholder="Customer Number"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Payment
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Payment Method"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
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
