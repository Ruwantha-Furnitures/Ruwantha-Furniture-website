import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getMessageDetails } from "./../../service/message";

function CustomerMessagesViewForm() {
  const { id } = useParams();

  const [message, setMessage] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    contact_number: 0,
    details: "",
  });

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      const result = await getMessageDetails(id);
      setMessage(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className={ProductViewFormStyle.titleHeader}>
          <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
            Customer Message
          </h1>
          <div className={ProductViewFormStyle.backSection}>
            <div className={ProductViewFormStyle.back}>
              <Link
                to="/dashboard/customerMessages"
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
          </div>
        </div>
      </div>
      <form action="#" className={ProductViewFormStyle.formStyle}>
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
                    First Names
                  </label>
                  <input
                    type="text"
                    value={message.first_name}
                    placeholder="Tharindu"
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
                    value={message.last_name}
                    placeholder="Gihan"
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
                    value={message.email}
                    placeholder="wtgihan@gmail.com"
                    className={ProductViewFormStyle.inputStyleforLong}
                    readOnly
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div
                  className={
                    ProductViewFormStyle.dataforLong +
                    " " +
                    ProductViewFormStyle.addInlineFlex
                  }
                >
                  <label
                    className={
                      ProductViewFormStyle.labelStyleforLong +
                      " " +
                      ProductViewFormStyle.addMarginBottom
                    }
                  >
                    Message
                  </label>
                  <textarea
                    value={message.details}
                    placeholder="Customer Message..."
                    className={ProductViewFormStyle.labelStyleforLongDesc}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CustomerMessagesViewForm;
