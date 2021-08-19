import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  console.log(
    currentPage + ":ItemsCount" + itemsCount + ":PageSize" + pageSize
  );

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  console.log(pages);

  return (
    <div className={TableStyle.tablePagination}>
      <Link
        to="#"
        className={TableStyle.paginationLink}
        onClick={() =>
          onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
        }
      >
        <span className={"material-icons " + TableStyle.paginationArrowIcon}>
          arrow_back_ios
        </span>
      </Link>
      {pages.map((page) => (
        <>
          <Link
            key={page}
            to="#"
            className={TableStyle.paginationLink}
            onClick={() => onPageChange(page)}
          >
            <span
              className={
                page === currentPage
                  ? "material-icons " +
                    TableStyle.paginationCircleIcon +
                    " " +
                    TableStyle.active
                  : "material-icons " + TableStyle.paginationCircleIcon
              }
            >
              circle
            </span>
          </Link>
        </>
      ))}
      <Link
        to="#"
        className={TableStyle.paginationLink}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span className={"material-icons " + TableStyle.paginationArrowIcon}>
          arrow_forward_ios
        </span>
      </Link>
    </div>
  );
};

export default Pagination;
