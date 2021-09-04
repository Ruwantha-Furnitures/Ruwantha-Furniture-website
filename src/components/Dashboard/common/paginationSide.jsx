import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import AllProductViewStyle from "../../../css/dashboard/AllProductsView.module.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  // console.log(
  //   currentPage + ":ItemsCount" + itemsCount + ":PageSize" + pageSize
  // );

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  // console.log(pages);

  return (
    <div className={AllProductViewStyle.tablePagination}>
      <Link
        to="#"
        className={AllProductViewStyle.paginationLink}
        onClick={() =>
          onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
        }
      >
        <span
          className={
            "material-icons " + AllProductViewStyle.paginationArrowIcon
          }
        >
          arrow_back_ios
        </span>
      </Link>
      {pages.map((page, index) => (
        <>
          <Link
            key={index + 1}
            to="#"
            className={AllProductViewStyle.paginationLink}
            onClick={() => onPageChange(page)}
          >
            <span
              className={
                page === currentPage
                  ? "material-icons " +
                    AllProductViewStyle.paginationCircleIcon +
                    " " +
                    AllProductViewStyle.active
                  : "material-icons " + AllProductViewStyle.paginationCircleIcon
              }
            >
              circle
            </span>
          </Link>
        </>
      ))}

      <Link
        to="#"
        className={AllProductViewStyle.paginationLink}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span
          className={
            "material-icons " + AllProductViewStyle.paginationArrowIcon
          }
        >
          arrow_forward_ios
        </span>
      </Link>
    </div>
  );
};

export default Pagination;
