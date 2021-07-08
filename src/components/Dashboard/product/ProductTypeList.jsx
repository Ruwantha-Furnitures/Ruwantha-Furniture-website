import React from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../css/dashboard/ProductViewForm.module.css";

function ProductTypeList() {
  return (
    <React.Fragment>
      <h1 className={ProductViewFormStyle.productTypeTitle}>Category 01</h1>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductType"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Type 01</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductType"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Type 02</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductType"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Type 03</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductType"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Type 04</h1>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ProductTypeList;
