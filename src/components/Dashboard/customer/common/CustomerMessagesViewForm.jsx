import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getMessageDetails } from "./../../service/message";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";

function CustomerMessagesViewForm() {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const result = await getMessageDetails(id);
      if (result.status === 200) {
        setLoading(false);
      }
      setMessage(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </React.Fragment>
  );
}

export default CustomerMessagesViewForm;
