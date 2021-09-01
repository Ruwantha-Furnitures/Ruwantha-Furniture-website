import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getOrders } from "./../../service/order";
import { getDeliveries } from "./../../service/delivery";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";
import { getShippings } from "./../../service/shippingDetail";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductStyle from "../../../../css/dashboard/Products.module.css";

function TrackingOrdersTable() {
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
    delivery_status: "",
    completed_date: "",
    days: 0,
  });

  const [page, setPage] = useState({
    pageSize: 8,
    currentPage: 1,
  });

  const [search, setSearch] = useState("");
  const [filterOrders, setFilterOrders] = useState({});

  useEffect(() => {
    loadOrders();
  }, [page]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const result = await getOrders();
      const ordersData = result.data;

      const resultDeliveries = await getDeliveries();
      const deliveriesData = resultDeliveries.data;

      const shippingResult = await getShippings();

      if (
        result.status === 200 &&
        resultDeliveries.status === 200 &&
        shippingResult.status === 200
      ) {
        setLoading(false);
      }

      ordersData.forEach((order) => {
        var shippingStatus = shippingResult.data.filter(
          (shipping) => shipping.order_id === order.id
        )[0];

        if (shippingStatus !== undefined) {
          var deliveryStatus = deliveriesData.filter(
            (delivery) => delivery.order.id === order.id
          )[0];

          console.log(deliveryStatus);

          var startDate;
          var lastDate;

          if (deliveryStatus !== undefined) {
            if (
              deliveryStatus.request_status === 0 &&
              deliveryStatus.complete_status === 1
            ) {
              order.delivery_status = "Completed";
              order.completed_date = deliveryStatus.updatedAt;
              startDate = new Date(order.createdAt);
              lastDate = new Date(deliveryStatus.updatedAt);
            }
            if (
              deliveryStatus.request_status === 0 &&
              deliveryStatus.complete_status === 0
            ) {
              order.delivery_status = "Not Completed";
              order.driver_id = deliveryStatus.delivery_driver_id;
              startDate = new Date(order.createdAt);
              lastDate = new Date();
            }
            if (
              deliveryStatus.request_status === 1 &&
              deliveryStatus.complete_status === 0
            ) {
              order.delivery_status = "Pending Assigned";
              startDate = new Date(order.createdAt);
              lastDate = new Date();
            }
          } else {
            order.delivery_status = "Not Assigned";
            startDate = new Date(order.createdAt);
            lastDate = new Date();
          }
          let differenceTime = lastDate.getTime() - startDate.getTime();
          let differenceDays = differenceTime / (1000 * 3600 * 24);
          order.days = Math.round(differenceDays);
        } else {
          order.delivery_status = "Completed";
          order.completed_date = order.createdAt;
          startDate = new Date(order.createdAt);
          lastDate = new Date(order.updatedAt);
          order.days = 0;
        }
      });

      const newOrdersData = ordersData.filter(
        (order) =>
          order.delivery_status === "Not Completed" ||
          order.delivery_status === "Pending Assigned"
      );

      // const newOrdersData = ordersData;

      setOrders(newOrdersData);
      setFilterOrders(paginate(newOrdersData, page.currentPage, page.pageSize));

      console.log(newOrdersData);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    if (search === "") {
      setFilterOrders(paginate(orders, page.currentPage, page.pageSize));
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

  console.log(orders);

  return (
    <React.Fragment>
      {loading ? (
        <div className={ProductStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <div className={TableStyle.titleHeader}>
            <h1 className={TableStyle.tableTitleProductStyle}>
              Tracking Not Completed Orders
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
                    <div className={TableStyle.header}>Order Date</div>
                  </th>
                  <th>
                    <div className={TableStyle.header}>Duration</div>
                  </th>
                  <th>
                    <div className={TableStyle.header}>Status</div>
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
                            to={`/dashboard/trackingOrder/details/${order.id}`}
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
                        <td>{order.createdAt.split("T")[0]}</td>
                        <td>
                          {order.days < 10 ? "0" + order.days : order.days}
                        </td>
                        <td>
                          {order.delivery_status === "Not Completed" ? (
                            <>
                              <Link
                                to={`/dashboard/deliveryDriverNotCompleted/view/${order.driver_id}`}
                                className={TableStyle.linkStyle}
                              >
                                <span
                                  className={
                                    TableStyle.statusStyle +
                                    " " +
                                    TableStyle.statusColorNotCompleted
                                  }
                                >
                                  Not Completed
                                </span>
                              </Link>
                            </>
                          ) : (
                            <>
                              <span
                                className={
                                  TableStyle.statusStyle +
                                  " " +
                                  TableStyle.statusColorAvailabile
                                }
                              >
                                {order.delivery_status}
                              </span>
                            </>
                          )}

                          {/* {order.createdAt.split("T")[0]} */}
                        </td>
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

export default TrackingOrdersTable;
