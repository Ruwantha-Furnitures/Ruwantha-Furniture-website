import React from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link } from "react-router-dom";

function ProductSellProductForm() {
  const handleSellProduct = (e) => {
    e.preventDefault();
    window.location = "/dashboard/product/sell/amount";
  };
  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Sell Page - Product
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/product/sell/customer"
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
        action="#"
        className={ProductViewFormStyle.formStyle}
        onSubmit={(e) => handleSellProduct(e)}
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
                    Price
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Product Price"
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
                    placeholder="Product Qunatity"
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
            </div>
          </div>
        </div>

        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button
              className={
                ProductViewFormStyle.descButtonAddStyle +
                " " +
                ProductViewFormStyle.descButtonAddStyleColor +
                " " +
                ProductViewFormStyle.addRightMargin
              }
            >
              Add Product
            </button>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Sell Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductSellProductForm;