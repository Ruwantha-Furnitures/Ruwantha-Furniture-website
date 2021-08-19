import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link, useParams } from "react-router-dom";
import Auth from "../../../service/auth";
import {
  getProductCategoriesDetails,
  deleteProductCategoriesDetails,
} from "./../../../service/productCategory";

function ProductCategoryViewForm() {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    loadCategory();
  }, [id]);

  const loadCategory = async () => {
    try {
      const result = await getProductCategoriesDetails(id);
      setCategory(result.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const user = Auth.getCurrentUser();

  const handleUpdate = () => {
    window.location = `/dashboard/product/updateProductCategory/${id}`;
  };

  const handleDelete = async () => {
    try {
      const res = await deleteProductCategoriesDetails(id);
      window.location = "/dashboard/products";
    } catch (error) {
      console.log("There was a problem with the server: ", error);
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Category View
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
      <div className={ProductViewFormStyle.details}>
        <div className={ProductViewFormStyle.imgDescPart}>
          <div className={ProductViewFormStyle.typeForm}>
            <div className={ProductViewFormStyle.descTitle}>
              <div className={ProductViewFormStyle.dataProductTitle}>
                <label className={ProductViewFormStyle.labelProductTitle}>
                  Category
                </label>
                <input
                  type="text"
                  value={category.name}
                  placeholder="Category 1"
                  className={ProductViewFormStyle.inputProductTitle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.descButtonsAddType}>
                {user === "Admin" && (
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor +
                        " " +
                        ProductViewFormStyle.addRightMargin
                      }
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.deleteButtonColor
                      }
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={ProductViewFormStyle.typesList}>
            {/* Product Category List View */}
            <ProductCategoryList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCategoryViewForm;
