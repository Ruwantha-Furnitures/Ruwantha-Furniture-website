import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";
import { getOrders } from "./../../service/order";
import { getDeliveries } from "./../../service/delivery";
import Pagination from "./../../common/pagination";
import { paginate } from "./../../utils/paginate";
import { getShippings } from "./../../service/shippingDetail";

function CompleteOrderList() {
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
    driver: {
      id: 0,
      first_name: "",
      last_name: "",
    },
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
      const result = await getOrders();
      const ordersData = result.data;

      const resultDeliveries = await getDeliveries();
      const deliveriesData = resultDeliveries.data;
      const shippingResult = await getShippings();

      ordersData.forEach((order) => {
        var shippingStatus = shippingResult.data.filter(
          (shipping) => shipping.order_id === order.id
        )[0];

        console.log(shippingStatus);

        if (shippingStatus !== undefined) {
          var deliveryStatus = deliveriesData.filter(
            (delivery) =>
              delivery.order.id === order.id && delivery.complete_status === 1
          )[0];
          // console.log(deliveryStatus.request_status);

          if (deliveryStatus !== undefined) {
            if (deliveryStatus.request_status === 0) {
              order.delivery_status = "Completed";
              order.driver = deliveryStatus.deliveryDriver;
            } else {
              order.delivery_status = "Assigned";
            }
          } else {
            order.delivery_status = "Not Assigned";
          }
        } else {
          var newDriver = {
            id: 0,
            first_name: "Not",
            last_name: "Required",
          };
          order.delivery_status = "Completed";
          order.driver = newDriver;
        }

        // console.log(order);

        // order.driver = deliveryStatus.deliveryDriver;
      });

      const newOrdersData = ordersData.filter(
        (order) => order.delivery_status === "Completed"
      );

      console.log(newOrdersData);

      setOrders(newOrdersData);
      const data = paginate(newOrdersData, page.currentPage, page.pageSize);
      setFilterOrders(data);

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

  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Completed Orders</h1>
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
                  className={TableStyle.searchinput}
                  onChange={(e) => onInputChange(e)}
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
                <div className={TableStyle.header}>Customer</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Order Date</div>
              </th>
              <th>
                <div className={TableStyle.header}>Driver</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filterOrders) === true && (
              <React.Fragment>
                {filterOrders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      <Link
                        to={`/dashboard/completedOrder/details/${order.id}`}
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
                    <td>{order.createdAt.split("T")[0]}</td>
                    <td>
                      {order.driver.id !== 0 ? (
                        <>
                          <Link
                            to={`/dashboard/deliveryDriver/viewOnly/${order.driver.id}`}
                            className={TableStyle.linkStyle}
                          >
                            <span className={TableStyle.statusStyleLink}>
                              {order.driver.first_name +
                                " " +
                                order.driver.last_name}
                            </span>
                          </Link>
                        </>
                      ) : (
                        <>
                          <span
                            className={
                              TableStyle.statusStyle +
                              " " +
                              TableStyle.statusColorNotAvailabile
                            }
                          >
                            Not Required
                          </span>
                        </>
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
        itemsCount={orders.length}
        pageSize={page.pageSize}
        currentPage={page.currentPage}
        onPageChange={handlePageChange}
      />
    </React.Fragment>
  );
}

export default CompleteOrderList;
