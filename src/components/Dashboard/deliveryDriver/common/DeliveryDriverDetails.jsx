import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";
import { addAccount } from "../../service/account";
import { addDeliveryDriver } from "../../service/deliveryDriver";
import { getAccounts } from "./../../service/account";

function DeliveryDriverDetails() {
  const [deliveryDriver, setDeliveryDriver] = useState({
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    account_id: "",
  });

  const [accountsData, setAccountsData] = useState({
    email: "",
  });

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      const result = await getAccounts();
      setAccountsData(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    address: "",
    telephone: "",
    email: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    address: Joi.string().required().label("Address"),
    telephone: Joi.string().required().length(10).label("Number"),
    email: Joi.string().required().email().label("Email"),
  };

  const [account, setAccount] = useState({
    email: "",
    password: "",
    user_level: 3,
  });

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation
    const errorMessage = validateInput(e.target);
    if (errorMessage) {
      newErrors[e.target.name] = errorMessage;
    } else {
      if (e.target.name === "email") {
        var new_email = e.target.value;
        var account_data = accountsData.filter(
          (accountData) => accountData.email === new_email
        );
        console.log(account_data);
        console.log(Object.keys(account_data).length);
        if (Object.keys(account_data).length !== 0) {
          newErrors[e.target.name] =
            '"Email" is already exist use another email';
        } else {
          delete newErrors[e.target.name];
        }
      } else {
        delete newErrors[e.target.name];
      }
    }

    console.log(newErrors);
    setErrors(newErrors);

    if (e.target.name === "email") {
      setAccount({ ...account, [e.target.name]: e.target.value });
    } else {
      setDeliveryDriver({ ...deliveryDriver, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    console.log("onSubmit");
    try {
      var md5 = require("md5");
      const new_password =
        deliveryDriver.first_name.charAt(0).toUpperCase() +
        deliveryDriver.first_name.slice(1) +
        "@" +
        Math.floor(Math.random() * 10000 + 1).toString();
      console.log(new_password);
      const encrypt_password = md5(new_password);

      const newAccount = {
        ...account,
        password: encrypt_password,
      };

      console.log(newAccount);

      const resultAccount = await addAccount(newAccount);
      const new_account_id = resultAccount.data.id;

      const newDiliveryDriver = {
        ...deliveryDriver,
        account_id: new_account_id,
      };

      console.log(newDiliveryDriver);
      // send mail to driver email
      const response = await addDeliveryDriver(newDiliveryDriver);
      window.location = "/dashboard/deliveryDrivers";
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
                  errors["last_name"] || errors["first_name"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
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
                  {errors["first_name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["first_name"]}
                      </span>
                    </div>
                  )}
                </div>

                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
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
                  {errors["last_name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["last_name"]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["email"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSideLong}>
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
                  {errors["email"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["email"]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["address"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSideLong}>
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
                  {errors["address"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["address"]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["telephone"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Number
                    </label>
                    <input
                      type="number"
                      name="telephone"
                      value={deliveryDriver.telephone}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Driver Contact Number"
                      className={ProductViewFormStyle.inputStyle}
                      required
                    />
                  </div>
                  {errors["telephone"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["telephone"]}
                      </span>
                    </div>
                  )}
                </div>

                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Avaliabilty
                  </label>
                  <input
                    type="text"
                    value="TRUE"
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
            <button
              disabled={
                Object.keys(errors).length === 0 && isSubmit === false
                  ? false
                  : true
              }
              className={ProductViewFormStyle.descButtonAddStyle}
            >
              Add New
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverDetails;
