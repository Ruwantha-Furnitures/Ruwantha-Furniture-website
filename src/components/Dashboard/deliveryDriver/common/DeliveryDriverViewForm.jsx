import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import Auth from "../../service/auth";
import {
  getDeliveryDriverDetails,
  deleteDeliveryDriver,
  getDeliveryDrivers,
} from "./../../service/deliveryDriver";

function DeliveryDriverViewForm() {
  const user = Auth.getCurrentUser();
  const url = window.location.pathname.split("/");
  const driverViewLocation = url[3];
  const driverProfileSet = url[2];

  const { id } = useParams();

  const [deliveryDriver, setDeliveryDriver] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
    account: {
      email: "",
    },
    availabilty: 0,
  });

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const loadDeliveryDriver = async () => {
    console.log(id);
    try {
      let drivers = {};
      if (id !== undefined) {
        const result = await getDeliveryDriverDetails(id);
        drivers = result.data;
      } else {
        const user_email = Auth.getCurrentUserEmail();
        const result = await getDeliveryDrivers();
        drivers = result.data.filter(
          (driver) => driver.account.email === user_email
        )[0];
      }

      setDeliveryDriver(drivers);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handleUpdate = () => {
    if (driverProfileSet === "deliveryDriverProfile") {
      window.location = `/dashboard/deliveryDriverProfile/update/${deliveryDriver.id}`;
    } else {
      window.location = `/dashboard/deliveryDriver/update/${deliveryDriver.id}`;
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteDeliveryDriver(id);
      window.location = "/dashboard/deliveryDrivers";
    } catch (error) {
      console.log("There was a problem with the server: ", error);
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
                  value={deliveryDriver.first_name}
                  placeholder="Driver First Name"
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
                  value={deliveryDriver.last_name}
                  placeholder="Driver Last Name"
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
                  value={deliveryDriver.account.email}
                  placeholder="Delivery Driver Email"
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
                  value={deliveryDriver.address}
                  placeholder="Delivery Driver Address"
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
                  value={"0" + deliveryDriver.telephone}
                  placeholder="Driver Contact Number"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Availability
                </label>
                <input
                  type="text"
                  value={deliveryDriver.availability === 1 ? "TRUE" : "FALSE"}
                  placeholder="Basic Payment"
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {driverViewLocation === "view" && (
        <div className={ProductViewFormStyle.descButtonsAdd}>
          {user === "Owner" && (
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
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
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
