import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link, useParams } from "react-router-dom";
import {
  getProductCategoriesDetails,
  editProductCategoriesDetails,
} from "./../../../service/productCategory";

function ProductCategoryUpdateForm() {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const result = await getProductCategoriesDetails(id);
      setCategory(result.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editProductCategoriesDetails(id, category);
      window.location = `/dashboard/product/viewProductCategory/${id}`;
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
          Product Category Update
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
                    New Category
                  </label>
                  <input
                    type="text"
                    value={category.name}
                    name="name"
                    placeholder="Update Product Category"
                    onChange={(e) => onInputChange(e)}
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
              <ProductCategoryList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductCategoryUpdateForm;
