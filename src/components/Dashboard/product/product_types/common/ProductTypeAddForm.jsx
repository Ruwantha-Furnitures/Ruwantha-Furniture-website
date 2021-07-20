import React from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductTypeList from "./ProductTypeList";
import { Link } from "react-router-dom";

function ProductTypeAddForm() {
  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Type Add
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
                  <select className={ProductViewFormStyle.inputProductTitle}>
                    <option value="">Select Category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    <option value="category4">Category 4</option>
                  </select>
                </div>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    New Type
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="New Product Type"
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button className={ProductViewFormStyle.descButtonAddStyle}>
                      Add Type
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <ProductTypeList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductTypeAddForm;
