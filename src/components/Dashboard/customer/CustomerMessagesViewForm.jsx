import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";

function CustomerMessagesViewForm() {
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
                    First Name
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Tharindu"
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
                    placeholder="Gihan"
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
                    placeholder="wtgihan@gmail.com"
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
                    placeholder="Gonapura Poddala Galle"
                    className={ProductViewFormStyle.inputStyleforLong}
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
                    value=""
                    placeholder="Customer Message..."
                    className={ProductViewFormStyle.labelStyleforLongDesc}
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
