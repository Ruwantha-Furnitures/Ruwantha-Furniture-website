import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { getProductCategories } from "./../../../service/productCategory";

function ProductCategoryList() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const result = await getProductCategories();
      setCategories(result.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  // console.log(categories);
  return (
    <React.Fragment>
      <h1 className={ProductViewFormStyle.productTypeTitle}>Categories</h1>
      {Array.isArray(categories) === true && (
        <React.Fragment>
          {categories.map((category, index) => (
            <div className={ProductViewFormStyle.productType} key={index + 1}>
              <span
                className={"material-icons " + ProductViewFormStyle.iconSize}
              >
                circle
              </span>
              <Link
                to={`/dashboard/product/viewProductCategory/${category.id}`}
                className={ProductViewFormStyle.linkStyle}
              >
                <h1 className={ProductViewFormStyle.productTypeName}>
                  {category.name}
                </h1>
              </Link>
            </div>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ProductCategoryList;
