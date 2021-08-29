import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getReviews } from "./../../service/review";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";

function ReviewsTable() {
  const [loading, setLoading] = useState(false);
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

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterReviews, setFilterReviews] = useState({});

  useEffect(() => {
    loadReviews();
  }, [page]);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const result = await getReviews();

      if (result.status === 200) {
        setLoading(false);
      }

      setReviews(result.data);
      setFilterReviews(paginate(result.data, page.currentPage, page.pageSize));
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterReviews(paginate(reviews, page.currentPage, page.pageSize));
    } else {
      setFilterReviews(
        paginate(
          reviews.filter((review) =>
            review.product.name.toLowerCase().includes(search.toLowerCase())
          ),
          1,
          page.pageSize
        )
      );
    }

    setSearch(search);
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage({ currentPage: page, pageSize: 8 });
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
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
                            to={`/dashboard/customer/detials/${review.id}`}
                            className={TableStyle.linkStyle}
                          >
                            <span className={TableStyle.statusStyleLink}>
                              {review.id < 10
                                ? "RV000" + review.id
                                : review.id < 100
                                ? "RV00" + review.id
                                : "RV0" + review.id}
                            </span>
                          </Link>
                        </td>
                        <td>{review.product.name}</td>
                        <td>{"Rs. " + review.product.price}</td>
                        <td>{review.product.discount + "%"}</td>
                        <td>
                          {review.rating_points >= 1 ? (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star
                            </span>
                          ) : (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star_outline
                            </span>
                          )}
                          {review.rating_points >= 2 ? (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star
                            </span>
                          ) : (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star_outline
                            </span>
                          )}
                          {review.rating_points >= 3 ? (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star
                            </span>
                          ) : (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star_outline
                            </span>
                          )}
                          {review.rating_points >= 4 ? (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star
                            </span>
                          ) : (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star_outline
                            </span>
                          )}
                          {review.rating_points >= 5 ? (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
                            >
                              star
                            </span>
                          ) : (
                            <span
                              className={
                                "material-icons " + TableStyle.rateStar
                              }
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
          <Pagination
            itemsCount={reviews.length}
            pageSize={page.pageSize}
            currentPage={page.currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </React.Fragment>
  );
}

export default ReviewsTable;
