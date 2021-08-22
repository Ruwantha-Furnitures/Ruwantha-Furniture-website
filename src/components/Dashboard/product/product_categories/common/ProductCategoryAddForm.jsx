import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link } from "react-router-dom";
import { addProductCategories } from "./../../../service/productCategory";

function ProductCategoryAddForm() {
  const [category, setCategory] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const schema = {
    name: Joi.string().required().label("New Category"),
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation
    const errorMessage = validateInput(e.target);
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    console.log(newErrors);
    setErrors(newErrors);
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProductCategories(category);
      window.location = "/dashboard/product/addProductCategory";
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
    console.log(category);
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Category Add
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
                <div className={ProductViewFormStyle.dataProductTitleNew}>
                  <div className={ProductViewFormStyle.dataFormNew}>
                    <label className={ProductViewFormStyle.labelProductTitle}>
                      New Category
                    </label>
                    <input
                      type="text"
                      value={category.name}
                      name="name"
                      onChange={(e) => onInputChange(e)}
                      placeholder="New Product Category"
                      required
                      className={ProductViewFormStyle.inputProductTitle}
                    />
                  </div>
                  {errors["name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["name"]}
                      </span>
                    </div>
                  )}
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      disabled={
                        Object.keys(errors).length === 0 && isSubmit === false
                          ? false
                          : true
                      }
                      className={ProductViewFormStyle.descButtonAddStyle}
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <ProductCategoryList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductCategoryAddForm;
