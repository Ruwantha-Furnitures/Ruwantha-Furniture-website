import React from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";

function DeliveryDriverAvalabilityForm() {
  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Delivery Driver Availability
        </h1>
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
                    Date
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="2021-03-17"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>

              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Payment
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Rs.4000"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Availability
                  </label>
                  {/* Drivers filter by area and according to avaliable status */}
                  <select className={ProductViewFormStyle.inputFormSelectStyle}>
                    <option value="Availabile">Availabile</option>
                    <option value="Not Availabile">Not Availabile</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Change Availabilty
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default DeliveryDriverAvalabilityForm;