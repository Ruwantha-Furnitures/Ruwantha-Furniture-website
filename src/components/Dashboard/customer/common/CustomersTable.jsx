import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getReviews } from "./../../service/review";

function CustomersTable() {
  const [reviews, setReviews] = useState({
    product_id: 0,
    feedback: "",
    rating_points: 0,
    product: {
      name: "",
      price: "",
      discount: "",
    },
  });

  const [search, setSearch] = useState("");
  const [filterReviews, setFilterReviews] = useState({});

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const result = await getReviews();
      setReviews(result.data);
      setFilterReviews(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterReviews(reviews);
    } else {
      setFilterReviews(
        reviews.filter((review) =>
          review.product.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Reviews</h1>
        <div className={TableStyle.searchSection}>
          <form action="#">
            <div className={TableStyle.search}>
              <div className={TableStyle.searchicon}>
                <span
                  className={"material-icons " + TableStyle.searchIconStyle}
                >
                  search
                </span>
              </div>

              <div className={TableStyle.searchText}>
                <input
                  type="search"
                  placeholder="search product here"
                  value={search}
                  name="search"
                  onChange={(e) => onInputChange(e)}
                  className={TableStyle.searchinput}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <div className={TableStyle.header}>Review Id</div>
              </th>
              <th>
                <div className={TableStyle.header}>Product</div>
              </th>
              <th>
                <div className={TableStyle.header}>Price</div>
              </th>
              <th>
                <div className={TableStyle.header}>Discount</div>
              </th>
              <th>
                <div className={TableStyle.header}>Rating</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterReviews) === true && (
              <React.Fragment>
                {filterReviews.map((review, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to="/dashboard/customer/detials"
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {review.id}
                        </span>
                      </Link>
                    </td>
                    <td>{review.product.name}</td>
                    <td>{"Rs. " + review.product.price}</td>
                    <td>{review.product.discount + "%"}</td>
                    <td>
                      {review.rating_points >= 1 ? (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star
                        </span>
                      ) : (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star_outline
                        </span>
                      )}
                      {review.rating_points >= 2 ? (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star
                        </span>
                      ) : (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star_outline
                        </span>
                      )}
                      {review.rating_points >= 3 ? (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star
                        </span>
                      ) : (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star_outline
                        </span>
                      )}
                      {review.rating_points >= 4 ? (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star
                        </span>
                      ) : (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star_outline
                        </span>
                      )}
                      {review.rating_points >= 5 ? (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star
                        </span>
                      ) : (
                        <span
                          className={"material-icons " + TableStyle.rateStar}
                        >
                          star_outline
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
      <div className={TableStyle.tablePagination}>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_back_ios
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span
            className={
              "material-icons " +
              TableStyle.paginationCircleIcon +
              " " +
              TableStyle.active
            }
          >
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default CustomersTable;
