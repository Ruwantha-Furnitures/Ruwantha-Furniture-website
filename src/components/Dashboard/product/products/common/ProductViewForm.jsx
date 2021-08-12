import React, { useEffect, useState } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";

import Auth from "../../../service/auth";
import { getProductDetails, deleteProduct } from "./../../../service/product";

function ProductViewForm() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    type: {
      name: "",
    },
    price: "",
    description: "",
    color: "",
    width: "",
    height: "",
    discount: "",
    img_location: "",
    is_deleted: false,
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const result = await getProductDetails(id);
      // console.log(result.data);
      setProduct(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const user = Auth.getCurrentUser();

  const handleUpdate = () => {
    window.location = `/dashboard/product/update/${id}`;
  };

  const handleDelete = async () => {
    try {
      const res = await deleteProduct(id);
      console.log(res);
      window.location = "/dashboard/products";
    } catch (error) {
      console.log("There was a problem with the server: ", error);
    }
  };

  return (
    <>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Views
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
          <div className={ProductViewFormStyle.Img}>
            <img
              src={product.img_location}
              alt=""
              className={ProductViewFormStyle.productImageStyle}
            />
          </div>
          <div className={ProductViewFormStyle.desc}>
            <div className={ProductViewFormStyle.descTitle}>
              <h2 className={ProductViewFormStyle.descTitleStyle}>
                {product.name}
              </h2>
            </div>
            <div className={ProductViewFormStyle.descDetails}>
              <p className={ProductViewFormStyle.descDetailsStyle}>
                {product.description}
              </p>
            </div>
            <div className={ProductViewFormStyle.descButtons}>
              {user === "Admin" && (
                <>
                  <div
                    className={
                      ProductViewFormStyle.descButton +
                      " " +
                      ProductViewFormStyle.sidemargin
                    }
                  >
                    <button
                      className={
                        ProductViewFormStyle.descButtonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor
                      }
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                  <div className={ProductViewFormStyle.descButton}>
                    <button
                      className={
                        ProductViewFormStyle.descButtonStyle +
                        " " +
                        ProductViewFormStyle.deleteButtonColor
                      }
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={ProductViewFormStyle.infoPart}>
          <div className={ProductViewFormStyle.form}>
            <div
              className={
                ProductViewFormStyle.formLine +
                " " +
                ProductViewFormStyle.setMarginTop
              }
            >
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Type</label>
                <input
                  type="text"
                  value={product.type.name}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Colour
                </label>
                <input
                  type="text"
                  value={product.color}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Width</label>
                <input
                  type="text"
                  value={product.width + " cm"}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Height
                </label>
                <input
                  type="text"
                  value={product.height + " cm"}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
            <div className={ProductViewFormStyle.formLine}>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>Price</label>
                <input
                  type="text"
                  value={"Rs." + product.price}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
              <div className={ProductViewFormStyle.data}>
                <label className={ProductViewFormStyle.labelStyle}>
                  Discount
                </label>
                <input
                  type="text"
                  value={product.discount + "%"}
                  className={ProductViewFormStyle.inputStyle}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductViewForm;
