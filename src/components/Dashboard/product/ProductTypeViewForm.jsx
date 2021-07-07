import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";
import ProductTypeList from "./ProductTypeList";
import { Link } from "react-router-dom";

function ProductTypeViewForm() {
  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Type View
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/products"
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
      <form action="#">
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.imgDescPart}>
            <div className={ProductViewFormStyle.typeForm}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    Category
                  </label>
                  <input
                    type="text"
                    value="Category 1"
                    placeholder="Category 1"
                    className={ProductViewFormStyle.inputProductTitle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    Type
                  </label>
                  <input
                    type="text"
                    value="Product Type 1"
                    placeholder="Product Type 1"
                    className={ProductViewFormStyle.inputProductTitle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor +
                        " " +
                        ProductViewFormStyle.addRightMargin
                      }
                    >
                      Update
                    </button>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.deleteButtonColor
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              {/* Product type List View */}
              <ProductTypeList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductTypeViewForm;
