import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
// import { getInvoices } from "./../../service/invoice";

function PurchaseOrdersTable() {
  const [invoices, setInvoices] = useState({
    total_amount: 0,
    no_of_products: 0,
    products_price: 0,
    total_discounts: 0,
    customer_id: 0,
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: 0,
      payment_method: "",
    },
  });

  const [search, setSearch] = useState("");
  const [filterInvoices, setFilterInvoices] = useState({});

  useEffect(() => {
    loadInvoice();
  }, []);

  const loadInvoice = async () => {
    try {
      // const result = await getInvoices();
      // setInvoices(result.data);
      // setFilterInvoices(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterInvoices(invoices);
    } else {
      setFilterInvoices(
        invoices.filter(
          (invoice) =>
            invoice.customer.first_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            invoice.customer.last_name
              .toLowerCase()
              .includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Purchase Orders</h1>
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
                  placeholder="Search Customer Here"
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
                <div className={TableStyle.header}>Order Id</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer Name</div>
              </th>
              <th>
                <div className={TableStyle.header}>No. Products</div>
              </th>
              <th>
                <div className={TableStyle.header}>Price</div>
              </th>
              <th>
                <div className={TableStyle.header}>Discount</div>
              </th>
              <th>
                <div className={TableStyle.header}>Amount</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterInvoices) === true && (
              <React.Fragment>
                {filterInvoices.map((invoice, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to={`/dashboard/purchaseOrder/details/${invoice.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {invoice.id}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {invoice.customer.first_name +
                        " " +
                        invoice.customer.last_name}
                    </td>
                    <td>{invoice.no_of_products}</td>
                    <td>{invoice.products_price}</td>
                    <td>{invoice.total_discounts}</td>
                    <td>{invoice.total_amount}</td>
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

export default PurchaseOrdersTable;
