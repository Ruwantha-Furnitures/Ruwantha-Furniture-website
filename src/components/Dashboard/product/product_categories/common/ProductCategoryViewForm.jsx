import React from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link } from "react-router-dom";
import Auth from "../../../service/auth";

function ProductCategoryViewForm() {
  const user = Auth.getCurrentUser();
  const handleUpdate = () => {
    window.location = "/dashboard/product/updateProductCategory";
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Category View
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
      {/* <form action="#"> */}
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
              <div className={ProductViewFormStyle.descButtonsAddType}>
                {user === "Admin" && (
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor +
                        " " +
                        ProductViewFormStyle.addRightMargin
                      }
                      onClick={handleUpdate}
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
                )}
              </div>
            </div>
          </div>
          <div className={ProductViewFormStyle.typesList}>
            {/* Product Category List View */}
            <ProductCategoryList />
          </div>
        </div>
      </div>
      {/* </form> */}
    </React.Fragment>
  );
}

export default ProductCategoryViewForm;