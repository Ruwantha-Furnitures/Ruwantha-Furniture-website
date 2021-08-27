import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";
import { addAccount } from "../../service/account";
import { addDeliveryDriver } from "../../service/deliveryDriver";

function DeliveryDriverDetails() {
  const [deliveryDriver, setDeliveryDriver] = useState({
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
  });

  const [account, setAccount] = useState({
    email: "",
    password: "1111",
    user_level: 3,
  });

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
      const resultAccount = await addAccount(account);
      const new_account_id = resultAccount.data.id;
      const newDiliveryDriver = {
        ...deliveryDriver,
        account_id: new_account_id,
      };
      const response = await addDeliveryDriver(newDiliveryDriver);
      window.location = "/dashboard/deliveryDriver/profile";
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
          New Delivery Driver
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/deliveryDrivers"
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
                    name="telephone"
                    value={deliveryDriver.telephone}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Driver Contact Number"
                    className={ProductViewFormStyle.inputStyle}
                    required
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Avaliabilty
                  </label>
                  <input
                    type="text"
                    value="FALSE"
                    placeholder="Vehicle Number"
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
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Add New
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverDetails;
