import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { editAccountDetails, getAccounts } from "./../../service/account";
import Auth from "./../../service/auth";

function ProfileChangePasswordForm() {
  const [user, setUser] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [loginUser, setLoginUser] = useState({
    id: 0,
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const result = await getAccounts();
      const login_user_email = Auth.getCurrentUserEmail();
      const login_user_data = result.data.filter(
        (user) => user.email === login_user_email
      )[0];

      setLoginUser(login_user_data);
      var md5 = require("md5");
      const encrPassword = md5("Owner@1998");
      console.log(encrPassword);
      console.log(login_user_data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const schema = {
    current_password: Joi.string()
      .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)
      .required()
      .label("Current Password"),
    new_password: Joi.string()
      .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)
      .required()
      .label("New Password"),
    confirm_password: Joi.string().required().label("Confirm Password"),
  };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation

    if (e.target.name === "confirm_password") {
    }

    const errorMessage = validateInput(e.target);
    if (errorMessage) {
      newErrors[e.target.name] = errorMessage;
    } else {
      if (e.target.name === "current_password") {
        var md5 = require("md5");
        const md5value = md5(e.target.value);
        if (md5value !== loginUser.password) {
          newErrors[e.target.name] = '"Current Password" is incorrect';
        } else {
          delete newErrors[e.target.name];
        }
      } else if (e.target.name === "confirm_password") {
        if (e.target.value !== user.new_password) {
          newErrors[e.target.name] = "Password Doesn't Match With New Password";
        } else {
          delete newErrors[e.target.name];
        }
      } else {
        delete newErrors[e.target.name];
      }
    }

    console.log(newErrors);
    setErrors(newErrors);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log("OnSubmit");
    try {
      var md5 = require("md5");
      const newPassowrd = md5(user.new_password);
      console.log("NewPassword:" + newPassowrd);
      const account = {
        password: newPassowrd,
      };
      const response = await editAccountDetails(loginUser.id, account);
      console.log(response);
      window.location = "/dashboard/profile/changePassword";
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  console.log(loginUser);

  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Profile Change Password
        </h1>
      </div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={ProductViewFormStyle.formStyle}
      >
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.infoPart}>
            <div className={ProductViewFormStyle.form}>
              <h1 className={ProductViewFormStyle.tableFormHeaderStyle}>
                Password Details
              </h1>
              <div
                className={
                  errors["current_password"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine +
                      " " +
                      ProductViewFormStyle.setMarginTop
                }
              >
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Username
                  </label>
                  <input
                    type="text"
                    value={loginUser.email}
                    placeholder="User Email"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Current
                    </label>
                    <input
                      type="password"
                      name="current_password"
                      value={user.current_password}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Current Password"
                      className={ProductViewFormStyle.inputStyle}
                    />
                  </div>
                  {errors["current_password"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["current_password"] ===
                          '"Current Password" is not allowed to be empty' ||
                        errors["current_password"] ===
                          '"Current Password" is incorrect'
                          ? errors["current_password"]
                          : "Lower and Upper Case Digit and Min 6 Length"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={
                  errors["new_password"] || errors["confirm_password"]
                    ? ProductViewFormStyle.formLineError
                    : ProductViewFormStyle.formLine
                }
              >
                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      New
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      onChange={(e) => onInputChange(e)}
                      value={user.new_password}
                      placeholder="New Password"
                      className={ProductViewFormStyle.inputStyle}
                    />
                    {errors["new_password"] && (
                      <div className={ProductViewFormStyle.inputErrorDesc}>
                        <span
                          className={
                            "material-icons " + ProductViewFormStyle.iconWidth
                          }
                        >
                          error
                        </span>
                        <span className={ProductViewFormStyle.inputErrorText}>
                          {errors["new_password"] !==
                          '"New Password" is not allowed to be empty'
                            ? "Lower and Upper Case Digit and Min 6 Length"
                            : '"New Password" is not allowed to be empty'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={ProductViewFormStyle.inputFormSide}>
                  <div className={ProductViewFormStyle.dataForm}>
                    <label className={ProductViewFormStyle.labelStyle}>
                      Confirm
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      onChange={(e) => onInputChange(e)}
                      value={user.confirm_password}
                      placeholder="Confirm Password"
                      className={ProductViewFormStyle.inputStyle}
                    />
                  </div>
                  {errors["confirm_password"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["confirm_password"]}
                      </span>
                    </div>
                  )}
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
              Change Password
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProfileChangePasswordForm;
