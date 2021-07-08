import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";

function DeliveryDriverViewForm() {
  const url = window.location.pathname.split("/");
  const driverViewLocation = url[3];
  const driverProfileSet = url[2];

  const handleUpdate = () => {
    if (driverProfileSet === "deliveryDriverProfile") {
      window.location = "/dashboard/deliveryDriverProfile/update";
    } else {
      window.location = "/dashboard/deliveryDriver/update";
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Delivery Driver Profile
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          {driverProfileSet !== "deliveryDriverProfile" && (
            <div className={ProductViewFormStyle.back}>
              <Link
                to={
                  driverViewLocation === "view"
                    ? "/dashboard/deliveryDrivers"
                    : "/dashboard/completedOrders"
                }
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
                  <div className={ProductViewFormStyle.backButtonStyle}>
                    Back
                  </div>
                </div>
              </Link>
            </div>
          )}
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
                  First Name
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Driver First Name"
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
                  placeholder="Driver Last Name"
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
                  placeholder="Delivery Driver Email"
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
                  placeholder="Delivery Driver Address"
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
                  placeholder="Driver Contact Number"
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
                  placeholder="Basic Payment"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>

            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Vehicle
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Vehicle Number"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Type</label>
                <input
                  type="text"
                  value=""
                  placeholder="Vehicle Type"
                  className={ProductViewFormStyle.inputStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {driverViewLocation === "view" && (
        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.successButtonColor +
                " " +
                ProductViewFormStyle.addRightMargin
              }
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.deleteButtonColor
              }
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {driverProfileSet === "deliveryDriverProfile" && (
        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.successButtonColor +
                " " +
                ProductViewFormStyle.addRightMargin
              }
              onClick={handleUpdate}
            >
              Go Update
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default DeliveryDriverViewForm;
