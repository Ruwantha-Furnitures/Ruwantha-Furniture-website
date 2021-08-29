import React, { useEffect, useState } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductTypeList from "./ProductTypeList";
import { Link, useParams } from "react-router-dom";
import Auth from "../../../service/auth";
import {
  getProductTypeDetails,
  deleteProductTypeDetails,
} from "./../../../service/productType";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../../css/dashboard/Products.module.css";

function ProductTypeViewForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState({
    name: "",
    categoryId: 0,
    category: {
      name: "",
    },
  });

  useEffect(() => {
    loadProductType();
  }, [id]);

  const loadProductType = async () => {
    try {
      setLoading(true);
      const result = await getProductTypeDetails(id);
      if (result.status === 200) {
        setLoading(false);
      }
      setType(result.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const user = Auth.getCurrentUser();
  const handleUpdate = () => {
    window.location = `/dashboard/product/updateProductType/${id}`;
  };

  const handleDelete = async () => {
    try {
      const response = await deleteProductTypeDetails(id);
      window.location = "/dashboard/products";
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
              Product Type View
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
          {/* <form action="#"> */}
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
                      value={type.category.name}
                      placeholder="Category 1"
                      className={ProductViewFormStyle.inputProductTitle}
                      readOnly
                    />
                  </div>
                  <div className={ProductViewFormStyle.dataProductTitle}>
                    <label className={ProductViewFormStyle.labelProductTitle}>
                      Type
                    </label>
                    <input
                      type="text"
                      value={type.name}
                      placeholder="Product Type 1"
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
                {/* Product type List View */}
                <ProductTypeList categoryId={type.categoryId} />
              </div>
            </div>
          </div>
          {/* </form> */}
        </>
      )}
    </React.Fragment>
  );
}

export default ProductTypeViewForm;
