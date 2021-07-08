import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";

function ProductCategoryAddForm() {
  return (
    <React.Fragment>
      <div>
        <h1 className={ProductViewFormStyle.titleStyle}>
          Product Category Add
        </h1>
      </div>
      <form action="#">
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.imgDescPart}>
            <div className={ProductViewFormStyle.typeForm}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    New Category
                  </label>
                  <input
                    type="text"
                    value=""
                    onChange=""
                    readOnly
                    placeholder="New Product Category"
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button className={ProductViewFormStyle.descButtonAddStyle}>
                      Add Categor
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <h1 className={ProductViewFormStyle.productTypeTitle}>
                Categories
              </h1>
              <div className={ProductViewFormStyle.productType}>
                <span class={"material-icons " + ProductViewFormStyle.iconSize}>
                  circle
                </span>
                <h1 className={ProductViewFormStyle.productTypeName}>
                  Category 01
                </h1>
              </div>
              <div className={ProductViewFormStyle.productType}>
                <span class={"material-icons " + ProductViewFormStyle.iconSize}>
                  circle
                </span>
                <h1 className={ProductViewFormStyle.productTypeName}>
                  Category 02
                </h1>
              </div>
              <div className={ProductViewFormStyle.productType}>
                <span class={"material-icons " + ProductViewFormStyle.iconSize}>
                  circle
                </span>
                <h1 className={ProductViewFormStyle.productTypeName}>
                  Category 03
                </h1>
              </div>
              <div className={ProductViewFormStyle.productType}>
                <span class={"material-icons " + ProductViewFormStyle.iconSize}>
                  circle
                </span>
                <h1 className={ProductViewFormStyle.productTypeName}>
                  Category 04
                </h1>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductCategoryAddForm;
