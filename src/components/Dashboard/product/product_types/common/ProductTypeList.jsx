import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { getProductTypes } from "./../../../service/productType";
import { getProductCategories } from "./../../../service/productCategory";

function ProductTypeList({ categoryId }) {
  const [types, setTypes] = useState({
    name: "",
    categoryId: 0,
    category: {},
  });

  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    loadTypes();
  }, [categoryId]);

  const loadTypes = async () => {
    // console.log(categories);
    try {
      const result = await getProductTypes();
      const resultCategories = await getProductCategories();
      var category_id;
      if (categoryId !== 0) {
        category_id = categoryId;
      }
      var typesResult = result.data.filter(
        (type) => type.categoryId == category_id
      );

      setCategory(
        resultCategories.data.filter(
          (category) => category.id == category_id
        )[0]
      );
      setTypes(typesResult);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  return (
    <React.Fragment>
      <h1 className={ProductViewFormStyle.productTypeTitle}>
        {category === undefined ? "Select Category" : category.name}
      </h1>
      {Array.isArray(types) === true && (
        <React.Fragment>
          {types.map((type, index) => (
            <div key={index + 1} className={ProductViewFormStyle.productType}>
              <span
                className={"material-icons " + ProductViewFormStyle.iconSize}
              >
                circle
              </span>
              <Link
                to="/dashboard/product/viewProductType"
                className={ProductViewFormStyle.linkStyle}
              >
                <h1 className={ProductViewFormStyle.productTypeName}>
                  {type.name}
                </h1>
              </Link>
            </div>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ProductTypeList;
