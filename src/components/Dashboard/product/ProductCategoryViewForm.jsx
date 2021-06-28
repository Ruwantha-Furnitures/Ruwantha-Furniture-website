import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";

function ProductCategoryViewForm() {
  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Product Category View
        </h1>
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
                    value=""
                    placeholder="Category 1"
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.descButtonAddStyle +
                        " " +
                        ProductViewFormStyle.addRightMargin
                      }
                    >
                      Update
                    </button>
                    <button className={ProductViewFormStyle.descButtonAddStyle}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              {/* Product Category List View */}
              <ProductCategoryList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductCategoryViewForm;
