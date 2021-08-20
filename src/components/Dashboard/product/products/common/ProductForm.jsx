import React, { useState, useEffect } from "react";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductImage from "../../../../../assets/dashboard/product/addPhotoNew2.png";
import { Link } from "react-router-dom";
import { getProductTypes } from "./../../../service/productType";
import { uploadPhoto } from "./../../../service/image";
import { addProduct } from "./../../../service/product";

function ProductForm() {
  const [file, setFile] = useState("");
  // const [filename, setFilename] = useState("Choose File");
  // const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    type_id: 0,
    price: "",
    description: "",
    color: "",
    width: "",
    height: "",
    discount: "",
    img_location: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    type_id: 0,
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

  useEffect(() => {
    loadProductTypes();
  }, []);

  const loadProductTypes = async () => {
    try {
      const result = await getProductTypes();
      setProductTypes(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const validateInput = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Product name is required";
    }
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation
    const errorMessage = validateInput(e.target);
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    console.log(newErrors);
    setErrors(newErrors);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      // setPicture(e.target.files[0]);
      setFile(e.target.files[0]);
      // setFilename(e.target.files[0].name);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
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
      console.log(newProduct);

      const response = await addProduct(newProduct);
      // handle response process
      window.location = "/dashboard/product/add";

      // Product submit process
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
          Product Add
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
                src={imgData !== null ? imgData : ProductImage}
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
                  {/* <span>Error Here</span> */}
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
                    required
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
                    <option value="">Select Type</option>
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={ProductViewFormStyle.descButtonsAdd}>
          <div className={ProductViewFormStyle.descButtonAdd}>
            <button className={ProductViewFormStyle.descButtonAddStyle}>
              Add Product
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductForm;
