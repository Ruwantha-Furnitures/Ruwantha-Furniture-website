import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";

function ProductSellForm() {
  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>Product Sell Page</h1>
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
                    Product
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Name"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Type
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Type"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Price
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Price"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Discount
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Discount"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Quantity
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Quantity"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>

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
                    Customer
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Customer Name"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Email
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Customer Email"
                    className={ProductViewFormStyle.inputStyle}
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
                    placeholder="Customer Address"
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
                    placeholder="Customer Number"
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
                    placeholder="Payment Method"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Sell Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellForm;
