import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getOrders } from "./../../service/order";

function PurchaseOrdersTable() {
  const [orders, setOrders] = useState({
    total_amount: 0,
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
  const [filterOrders, setFilterOrders] = useState({});

  useEffect(() => {
    loadInvoice();
  }, []);

  const loadInvoice = async () => {
    try {
      const result = await getOrders();
      const ordersData = result.data;
      setOrders(result.data);
      setFilterOrders(result.data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterOrders(orders);
    } else {
      setFilterOrders(
        orders.filter(
          (order) =>
            order.customer.first_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            order.customer.last_name
              .toLowerCase()
              .includes(search.toLowerCase())
        )
      );
    }

    setSearch(search);
  };

  // console.log(orders);

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
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Amount</div>
              </th>
              <th>
                <div className={TableStyle.header}>Payment Method</div>
              </th>
              <th>
                <div className={TableStyle.header}>Date</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterOrders) === true && (
              <React.Fragment>
                {filterOrders.map((order, index) => (
                  <tr key={index + 1}>
                    <td>
                      <Link
                        to={`/dashboard/purchaseOrder/details/${order.id}`}
                        className={TableStyle.linkStyle}
                      >
                        <span className={TableStyle.statusStyleLink}>
                          {order.id}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {order.customer.first_name +
                        " " +
                        order.customer.last_name}
                    </td>
                    <td>{order.customer.contact_number}</td>
                    <td>{"Rs. " + order.total_amount}</td>
                    <td>{order.customer.payment_method}</td>
                    <td>{order.createdAt.split("T")[0]}</td>
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
