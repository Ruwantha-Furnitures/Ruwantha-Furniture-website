import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getOrders } from "./../../service/order";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";
import PropagateLoader from "react-spinners/PropagateLoader";
import MainStyle from "../../../../css/dashboard/Products.module.css";

function PurchaseOrdersTable() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState({
    total_amount: 0,
    customer_id: 0,
    payment_method: "",
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      contact_number: 0,
    },
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterOrders, setFilterOrders] = useState({});

  useEffect(() => {
    loadInvoice();
    // setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 28000);
  }, [page]);

  const loadInvoice = async () => {
    try {
      setLoading(true);
      const result = await getOrders();

      if (result.status === 200) {
        setLoading(false);
      }

      console.log(result);

      // const ordersData = result.data;
      setOrders(result.data);
      const data = paginate(result.data, page.currentPage, page.pageSize);
      setFilterOrders(data);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      const data = paginate(orders, page.currentPage, page.pageSize);
      setFilterOrders(data);
    } else {
      setFilterOrders(
        paginate(
          orders.filter((order) =>
            (order.customer.first_name + " " + order.customer.last_name)
              .toLowerCase()
              .includes(search.toLowerCase())
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

  // console.log(orders);
  return (
    <React.Fragment>
      {loading ? (
        <div className={MainStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div className={TableStyle.titleHeader}>
            <h1 className={TableStyle.tableTitleProductStyle}>
              Purchase Orders
            </h1>
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
                      placeholder="Search customer here"
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
                    <div className={TableStyle.header}>Method</div>
                  </th>
                  <th>
                    <div className={TableStyle.header}>Order Date</div>
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
                              {order.id < 10
                                ? "OD000" + order.id
                                : order.id < 100
                                ? "OD00" + order.id
                                : "OD0" + order.id}
                            </span>
                          </Link>
                        </td>
                        <td>
                          {order.customer.first_name +
                            " " +
                            order.customer.last_name}
                        </td>
                        <td>{"0" + order.customer.contact_number}</td>
                        <td>{order.payment_method}</td>
                        <td>{order.createdAt.split("T")[0]}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            itemsCount={orders.length}
            pageSize={page.pageSize}
            currentPage={page.currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </React.Fragment>
  );
}

export default PurchaseOrdersTable;
