import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { ToastContainer } from "react-toastify";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductTypeList from "./ProductTypeList";
import { Link } from "react-router-dom";
import { getProductCategories } from "./../../../service/productCategory";
import { addProductType } from "../../../service/productType";
import { notification } from "../../../utils/notification";

function ProductTypeAddForm() {
  const [type, setType] = useState({
    name: "",
    category_id: 0,
  });

  const [categories, setCategories] = useState({
    id: 0,
    name: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    category_id: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const schema = {
    name: Joi.string().required().label("New Type"),
    category_id: Joi.number().min(1).required().label("Category"),
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const result = await getProductCategories();
      setCategories(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

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

    setType({ ...type, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await addProductType(type);
      notification(
        "Added New Product Type",
        "/dashboard/product/addProductType"
      );
      // window.location = "/dashboard/product/addProductType";
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
          Product Type Add
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
                      Category
                    </label>
                    <select
                      className={ProductViewFormStyle.inputProductTitle}
                      name="category_id"
                      onChange={(e) => onInputChange(e)}
                      required
                    >
                      <option value="#">Select Category</option>
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
                  {errors["category_id"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        "Category" is not allowed to be empty
                      </span>
                    </div>
                  )}
                </div>
                <div className={ProductViewFormStyle.dataProductTitleNew}>
                  <div className={ProductViewFormStyle.dataFormNew}>
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
                      required
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
                      Add Type
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <ProductTypeList categoryId={type.category_id} />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductTypeAddForm;
