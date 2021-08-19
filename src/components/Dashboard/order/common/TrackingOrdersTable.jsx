import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getOrders } from "./../../service/order";
import { getDeliveries } from "./../../service/delivery";

function TrackingOrdersTable() {
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

  const [search, setSearch] = useState("");
  const [filterOrders, setFilterOrders] = useState({});

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const result = await getOrders();
      const ordersData = result.data;

      const resultDeliveries = await getDeliveries();
      const deliveriesData = resultDeliveries.data;

      ordersData.forEach((order) => {
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
          } else {
            order.delivery_status = "Not Completed";
            startDate = new Date(order.createdAt);
            lastDate = new Date();
          }
        } else {
          order.delivery_status = "Not Completed";
          startDate = new Date(order.createdAt);
          lastDate = new Date();
        }

        let differenceTime = lastDate.getTime() - startDate.getTime();
        let differenceDays = differenceTime / (1000 * 3600 * 24);
        order.days = Math.round(differenceDays);
      });

      //   const newOrdersData = ordersData.filter(
      //     (order) => order.delivery_status === "Not Assigned"
      //   );

      const newOrdersData = ordersData;

      setOrders(newOrdersData);
      setFilterOrders(newOrdersData);

      console.log(newOrdersData);
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
        orders.filter((order) =>
          (order.customer.first_name + " " + order.customer.last_name)
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
    }
    setSearch(search);
  };

  console.log(orders);

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Tracking Orders</h1>
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
                  placeholder="search customer here"
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
                <div className={TableStyle.header}>Date</div>
              </th>
              {/* <th>
                <div className={TableStyle.header}>Amount</div>
              </th> */}
              <th>
                <div className={TableStyle.header}>Days</div>
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
                    <td>{order.days < 10 ? "0" + order.days : order.days}</td>
                    <td>
                      {order.delivery_status === "Not Completed" ? (
                        <>
                          <span
                            className={
                              TableStyle.statusStyle +
                              " " +
                              TableStyle.statusColorNotAvailabile
                            }
                          >
                            Not Completed
                          </span>
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
                            Completed
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

export default TrackingOrdersTable;
