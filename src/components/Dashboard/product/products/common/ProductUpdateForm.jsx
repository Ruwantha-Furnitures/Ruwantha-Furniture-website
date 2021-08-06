import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import {
  editProductDetails,
  getProductDetails,
} from "./../../../service/product";
import { getProductTypes } from "./../../../service/productType";
import { uploadPhoto, deletePhoto } from "./../../../service/image";

function ProductUpdateForm() {
  const { id } = useParams();
  const [file, setFile] = useState("");
  // const [filename, setFilename] = useState("Choose File");
  // const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    type: {
      name: "",
      id: "",
    },
    type_id: "",
    price: "",
    description: "",
    color: "",
    width: "",
    height: "",
    discount: "",
    img_location: "",
  });

  const [productTypes, setProductTypes] = useState({
    id: 0,
    name: "",
    categoryId: "",
  });

  const [imageLocation, setImageLocation] = useState("");

  useEffect(() => {
    loadProduct();
    loadProductTypes();
  }, []);

  const loadProduct = async () => {
    try {
      const result = await getProductDetails(id);
      setProduct(result.data);
      setImageLocation(result.data.img_location);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const loadProductTypes = async () => {
    try {
      const result = await getProductTypes();
      setProductTypes(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await uploadPhoto(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { filePath } = res.data;
      console.log(filePath);
      const name = "img_location";
      const newProduct = { ...product, [name]: filePath };

      const response = await editProductDetails(id, newProduct);

      // handle response process
      window.location = `/dashboard/product/view/${id}`;
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
        if (error.response.data.msg === "No file uploaded") {
          // Normal updated here
          console.log("Hello");
          const response = await editProductDetails(id, product);

          // handle response process
          window.location = `/dashboard/product/view/${id}`;
        }
        // otherwise another error
      }
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Update
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
            <div className={ProductViewFormStyle.Img}>
              <input
                type="file"
                className={ProductViewFormStyle.productImageAddStyle}
                onChange={onChangePicture}
              />
              <img
                src={imgData !== null ? imgData : product.img_location}
                alt="upload-img"
                className={ProductViewFormStyle.productImagePreviewStyle}
              />
            </div>

            <div className={ProductViewFormStyle.desc}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitle}>
                  <label className={ProductViewFormStyle.labelProductTitle}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    value={product.name}
                    onChange={(e) => onInputChange(e)}
                    className={ProductViewFormStyle.inputProductTitle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.descDetails}>
                <div className={ProductViewFormStyle.dataTitle}>
                  <label className={ProductViewFormStyle.labelStyleTitle}>
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={product.description}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Description..."
                    className={ProductViewFormStyle.inputStyleDesc}
                  />
                </div>
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
                  <label className={ProductViewFormStyle.labelStyle}>
                    Type
                  </label>
                  <select
                    className={ProductViewFormStyle.inputFormSelectStyle}
                    name="type_id"
                    onChange={(e) => onInputChange(e)}
                    required
                  >
                    {product.type.id !== null ? (
                      <option value={product.type.id}>
                        {product.type.name}
                      </option>
                    ) : (
                      <option value="">Select Type</option>
                    )}
                    {Array.isArray(productTypes) === true && (
                      <React.Fragment>
                        {productTypes.map((type, index) => (
                          <option key={index} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </React.Fragment>
                    )}
                  </select>
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Colour
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={product.color}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Colour"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Width
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={product.width}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Width in CM"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Height
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={product.height}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Height in CM"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Price in RS"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Discount
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={product.discount}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Product Discount in PR"
                    className={ProductViewFormStyle.inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={ProductViewFormStyle.descButtonsAdd}>
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
      </form>
    </React.Fragment>
  );
}

export default ProductUpdateForm;
