import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import {
  getDeliveryDriverDetails,
  editDeliveryDriverDetails,
} from "./../../service/deliveryDriver";
import { getAccountDetails, editAccountDetails } from "./../../service/account";

function DeliveryDriverUpdateForm() {
  const url = window.location.pathname.split("/");
  const driverProfileSet = url[2];

  const { id } = useParams();

  const [deliveryDriver, setDeliveryDriver] = useState({
    first_name: "",
    last_name: "",
    address: "",
    contact_number: "",
    account_id: "",
    availabilty: 0,
  });

  const [account, setAccount] = useState({
    id: 0,
    email: "",
    password: "",
    user_level: 0,
  });

  useEffect(() => {
    loadDeliveryDriver();
  }, []);

  const loadDeliveryDriver = async () => {
    try {
      const result = await getDeliveryDriverDetails(id);
      const driver = result.data;
      const account_id = driver.account.id;
      const resultAccount = await getAccountDetails(account_id);
      setDeliveryDriver(driver);
      setAccount(resultAccount.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    if (e.target.name === "email") {
      setAccount({ ...account, [e.target.name]: e.target.value });
    } else {
      setDeliveryDriver({ ...deliveryDriver, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseAccount = await editAccountDetails(account.id, account);
      const responseDeliveryDriver = await editDeliveryDriverDetails(
        id,
        deliveryDriver
      );
      window.location = `/dashboard/deliveryDriver/view/${id}`;
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Update Delivery Driver
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to={
                driverProfileSet === "deliveryDriverProfile"
                  ? "/dashboard/deliveryDriverProfile"
                  : "/dashboard/deliveryDrivers"
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
                <div className={ProductViewFormStyle.backButtonStyle}>Back</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={ProductViewFormStyle.formStyle}
      >
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
                    name="first_name"
                    value={deliveryDriver.first_name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Driver First Name"
                    className={ProductViewFormStyle.inputStyle}
                    required
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={deliveryDriver.last_name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Driver Last Name"
                    className={ProductViewFormStyle.inputStyle}
                    required
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
                    name="email"
                    value={account.email}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Delivery Driver Email"
                    className={ProductViewFormStyle.inputStyleforLong}
                    required
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
                    name="address"
                    value={deliveryDriver.address}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Delivery Driver Address"
                    className={ProductViewFormStyle.inputStyleforLong}
                    required
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
                    name="contact_number"
                    value={deliveryDriver.contact_number}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Driver Contact Number"
                    className={ProductViewFormStyle.inputStyle}
                    required
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

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.buttonStyle +
                " " +
                ProductViewFormStyle.successButtonColor
              }
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverUpdateForm;
