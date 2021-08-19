import React, { useEffect, useState } from "react";
import ProductViewFormStyle from "../../../../css/dashboard/ProductViewForm.module.css";
import { Link, useParams } from "react-router-dom";
import { getReviewDetails } from "./../../service/review";

function CustomerDetails() {
  const { id } = useParams();

  const [review, setReview] = useState({
    product_id: 0,
    feedback: "",
    rating_points: 0,
    createdAt: "",
    product: {
      name: "",
      price: "",
      discount: "",
    },
  });

  useEffect(() => {
    loadReview();
  }, []);

  const loadReview = async () => {
    try {
      const result = await getReviewDetails(id);
      // console.log(result.data);
      setReview(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <React.Fragment>
      <div>
        <div className={ProductViewFormStyle.titleHeader}>
          <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
            Customer Review Details
          </h1>
          <div className={ProductViewFormStyle.backSection}>
            <div className={ProductViewFormStyle.back}>
              <Link
                to="/dashboard/customers"
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
      </div>
      <form action="#" className={ProductViewFormStyle.formStyle}>
        <div className={ProductViewFormStyle.details}>
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
                    Product
                  </label>
                  <input
                    type="text"
                    value={review.product.name}
                    placeholder="name"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Price
                  </label>
                  <input
                    type="text"
                    value={"Rs. " + review.product.price}
                    placeholder="price"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Rating
                  </label>
                  <input
                    type="text"
                    value={review.rating_points}
                    placeholder="rating_points"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
                <div className={ProductViewFormStyle.data}>
                  <label className={ProductViewFormStyle.labelStyle}>
                    Date
                  </label>
                  <input
                    type="text"
                    value={review.createdAt.split("T")[0]}
                    placeholder="Customer Number"
                    className={ProductViewFormStyle.inputStyle}
                    readOnly
                  />
                </div>
              </div>
              <div className={ProductViewFormStyle.formLine}>
                <div
                  className={
                    ProductViewFormStyle.dataforLong +
                    " " +
                    ProductViewFormStyle.addInlineFlex
                  }
                >
                  <label
                    className={
                      ProductViewFormStyle.labelStyleforLong +
                      " " +
                      ProductViewFormStyle.addMarginBottom
                    }
                  >
                    Feedback
                  </label>
                  <textarea
                    value={review.feedback}
                    placeholder="Customer Feedback..."
                    className={ProductViewFormStyle.labelStyleforLongDesc}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default CustomerDetails;
