import React from "react";
import ProductViewFormStyle from "../../../css/dashboard/product/ProductViewForm.module.css";

function ProductTypeList() {
  return (
    <React.Fragment>
      <h1 className={ProductViewFormStyle.productTypeTitle}>Category 01</h1>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <h1 className={ProductViewFormStyle.productTypeName}>Type 01</h1>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <h1 className={ProductViewFormStyle.productTypeName}>Type 02</h1>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <h1 className={ProductViewFormStyle.productTypeName}>Type 02</h1>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <h1 className={ProductViewFormStyle.productTypeName}>Type 02</h1>
      </div>
    </React.Fragment>
  );
}

export default ProductTypeList;
