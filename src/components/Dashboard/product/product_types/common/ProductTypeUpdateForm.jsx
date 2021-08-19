import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductTypeList from "./ProductTypeList";
import { Link, useParams } from "react-router-dom";
import {
  editProductTypeDetails,
  getProductTypeDetails,
} from "./../../../service/productType";
import { getProductCategories } from "./../../../service/productCategory";

function ProductTypeUpdateForm() {
  const { id } = useParams();

  const [type, setType] = useState({
    id: 0,
    name: "",
    categoryId: 0,
  });

  const [categories, setCategories] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    loadTypeAndCategories();
  }, []);

  const loadTypeAndCategories = async () => {
    try {
      const result = await getProductTypeDetails(id);
      setType(result.data);
      const resultCategories = await getProductCategories();
      setCategories(resultCategories.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const onInputChange = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editProductTypeDetails(id, type);
      window.location = `/dashboard/product/viewProductType/${id}`;
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Type Update
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
      <form onSubmit={(e) => onSubmit(e)}>
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.imgDescPart}>
            <div className={ProductViewFormStyle.typeForm}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    Category
                  </label>
                  <select
                    className={ProductViewFormStyle.inputProductTitle}
                    name="categoryId"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    {type.categoryId !== 0 ? (
                      <option value={type.category.id}>
                        {type.category.name}
                      </option>
                    ) : (
                      <option value="#">Select Type</option>
                    )}
                    {Array.isArray(categories) === true && (
                      <React.Fragment>
                        {categories.map((category, index) => (
                          <option key={index} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </React.Fragment>
                    )}
                  </select>
                </div>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    New Type
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={type.name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="New Product Type"
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <ProductTypeList categoryId={type.categoryId} />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductTypeUpdateForm;
