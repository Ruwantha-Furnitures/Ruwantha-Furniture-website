import React from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../css/dashboard/ProductViewForm.module.css";

function ProductCategoryList() {
  return (
    <React.Fragment>
      <h1 className={ProductViewFormStyle.productTypeTitle}>Categories</h1>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductCategory"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Category 01</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductCategory"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Category 02</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductCategory"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Category 03</h1>
        </Link>
      </div>
      <div className={ProductViewFormStyle.productType}>
        <span class={"material-icons " + ProductViewFormStyle.iconSize}>
          circle
        </span>
        <Link
          to="/dashboard/product/viewProductCategory"
          className={ProductViewFormStyle.linkStyle}
        >
          <h1 className={ProductViewFormStyle.productTypeName}>Category 04</h1>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ProductCategoryList;
