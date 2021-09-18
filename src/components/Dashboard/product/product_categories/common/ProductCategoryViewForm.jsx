import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link, useParams } from "react-router-dom";
import Auth from "../../../service/auth";
import {
  getProductCategoriesDetails,
  deleteProductCategoriesDetails,
} from "./../../../service/productCategory";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../../css/dashboard/Products.module.css";
import { notification } from "../../../utils/notification";

function ProductCategoryViewForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    loadCategory();
  }, [id]);

  const [isSubmit, setIsSubmit] = useState(false);

  const loadCategory = async () => {
    try {
      // setLoading(true);
      const result = await getProductCategoriesDetails(id);
      if (result.status === 200) {
        // setLoading(false);
      }
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
      setIsSubmit(true);
      const res = await deleteProductCategoriesDetails(id);
      notification("Product Category Deleted", "/dashboard/products");
      // window.location = "/dashboard/products";
    } catch (error) {
      console.log("There was a problem with the server: ", error);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
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
                    <div className={ProductViewFormStyle.backButtonStyle}>
                      Back
                    </div>
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
                          disabled={isSubmit === false ? false : true}
                          className={
                            ProductViewFormStyle.buttonStyle +
                            " " +
                            ProductViewFormStyle.deleteButtonColor
                          }
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                        <ToastContainer />
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
        </>
      )}
    </React.Fragment>
  );
}

export default ProductCategoryViewForm;
