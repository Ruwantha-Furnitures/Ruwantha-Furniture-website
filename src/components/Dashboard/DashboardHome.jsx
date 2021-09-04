import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";
import Chart from "./common/Chart";
import TableCard from "./common/TableCard";
import PieChartCard from "./common/PieChartCard";
import MainStyle from "../../css/dashboard/Main.module.css";
import DashboardStyle from "../../css/dashboard/Dashboard.module.css";
import { getOrders } from "./service/order";
import { getSellProducts } from "./service/sellProduct";
import { getDeliveries } from "./service/delivery";
import { getShippings } from "./service/shippingDetail";
import { getReviews } from "./service/review";
import { getMessages } from "./service/message";
import { getDeliveryDrivers } from "./service/deliveryDriver";
import Auth from "./service/auth";

function Dashboard() {
  const user = Auth.getCurrentUser();
  const [ordersDataAdmin, setOrdersDataAdmin] = useState({
    todaySales: 0,
    salesItems: 0,
    notAssignOrders: 0,
    todayOrders: 0,
  });

  const [ordersDataOwner, setOrdersDataOwner] = useState({
    today_messages: 0,
    today_available_drivers: 0,
  });

  useEffect(() => {
    loadDataOfDashboard();
  }, []);

  const loadDataOfDashboard = async () => {
    try {
      const result = await getOrders();
      const orders = result.data;

      // var today = new Date("2021-08-12");
      var today = new Date();
      var current_date = today.toISOString().split("T")[0];

      // get today sales
      const today_orders = orders.filter(
        (order) => order.createdAt.split("T")[0] === current_date
      );

      var sales = 0;
      today_orders.forEach((todayOrder) => {
        sales = sales + parseInt(todayOrder.total_product_amount);
      });

      // console.log(today_orders);
      // console.log(sales.toFixed(2));

      const new_today_sales = sales.toFixed(2);
      const new_today_orders = today_orders.length;
      // sales Items
      const resultSellProducts = await getSellProducts();

      const sellProducts = resultSellProducts.data;
      // console.log(sellProducts);

      const today_sell_products = sellProducts.filter(
        (sellProduct) => sellProduct.createdAt.split("T")[0] === current_date
      );

      var count = 0;
      today_sell_products.forEach((sellProductItem) => {
        count = count + sellProductItem.quantity;
      });

      const new_today_sales_items = count;

      // console.log(today_orders.length);
      // console.log(today_sell_products);

      // console.log(current_date);

      // not assign orders
      const resultDeliveries = await getDeliveries();
      const deliveriesData = resultDeliveries.data;

      const shippingResult = await getShippings();

      orders.forEach((order) => {
        var shippingStatus = shippingResult.data.filter(
          (shipping) => shipping.order_id === order.id
        )[0];

        if (shippingStatus !== undefined) {
          var deliveryStatus = deliveriesData.filter(
            (delivery) => delivery.order.id === order.id
          )[0];

          if (deliveryStatus !== undefined) {
            if (deliveryStatus.request_status === 1) {
              order.delivery_status = "Pending";
            } else {
              order.delivery_status = "Assigned";
            }
          } else {
            order.delivery_status = "Not Assigned";
          }
        }
      });
      const newNotAssignOrdersData = orders.filter(
        (order) => order.delivery_status === "Not Assigned"
      );

      // console.log(newNotAssignOrdersData.length);
      const new_not_assign_orders = newNotAssignOrdersData.length;
      const today_order = {
        todaySales: new_today_sales,
        salesItems: new_today_sales_items,
        notAssignOrders: new_not_assign_orders,
        todayOrders: new_today_orders,
      };

      // get owner part data
      const resultMessages = await getMessages();
      const resultReviews = await getReviews();

      const messages = resultMessages.data;
      const reviews = resultReviews.data;

      var count_of_all_messages = 0;

      var today_messages = messages.filter(
        (message) => message.createdAt.split("T")[0] === current_date
      );

      var today_reviews = reviews.filter(
        (review) => review.createdAt.split("T")[0] === current_date
      );

      count_of_all_messages = today_messages.length + today_reviews.length;

      console.log(count_of_all_messages);

      // get available drivers
      const resultDrivers = await getDeliveryDrivers();
      const drivers = resultDrivers.data;

      var today_available_drivers = drivers.filter(
        (driver) => driver.availability === 1
      );

      // console.log(today_available_drivers);

      var today_drivers_count = today_available_drivers.length;

      const newordersDataOwner = {
        today_messages: count_of_all_messages,
        today_available_drivers: today_drivers_count,
      };

      setOrdersDataAdmin(today_order);
      setOrdersDataOwner(newordersDataOwner);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  console.log(ordersDataOwner);
  return (
    <React.Fragment>
      <div className={MainStyle.bodycontainer}>
        <div className={MainStyle.navSection}>
          <Navbar />
        </div>
        {/* Body */}
        <div className={MainStyle.bodySection}>
          {/* Sidebar */}

          <div className={MainStyle.sidebarSection}>
            <Sidebar />
          </div>
          <div className={DashboardStyle.cardSection}>
            <div className={DashboardStyle.detailsCardSection}>
              <DetailCard
                detailCardMargin={true}
                materialIconName={"price_change"}
                cardText={user === "Admin" ? "Today Sales" : "Today Income"}
                cardPrice={"Rs." + ordersDataAdmin.todaySales}
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"category"}
                cardText={
                  user === "Admin" ? "Today Sales Items" : "Today No of Sales"
                }
                cardPrice={
                  ordersDataAdmin.salesItems < 10
                    ? "000" + ordersDataAdmin.salesItems
                    : ordersDataAdmin.salesItems < 100
                    ? "00" + ordersDataAdmin.salesItems
                    : ordersDataAdmin.salesItems < 1000
                    ? "0" + ordersDataAdmin.salesItems
                    : ordersDataAdmin.salesItems
                }
              />
              {user === "Admin" && (
                <>
                  <DetailCard
                    detailCardMargin={true}
                    materialIconName={"assignment_late"}
                    // materialIconName={"stacked_line_chart"}
                    cardText={"Not Assign Orders"}
                    cardPrice={
                      ordersDataAdmin.notAssignOrders < 10
                        ? "000" + ordersDataAdmin.notAssignOrders
                        : ordersDataAdmin.notAssignOrders < 100
                        ? "00" + ordersDataAdmin.notAssignOrders
                        : ordersDataAdmin.notAssignOrders < 1000
                        ? "0" + ordersDataAdmin.notAssignOrders
                        : ordersDataAdmin.notAssignOrders
                    }
                  />
                  <DetailCard
                    detailCardMargin={false}
                    materialIconName={"assignment_turned_in"}
                    // materialIconName={"spa"}
                    cardText={"Today Orders"}
                    cardPrice={
                      ordersDataAdmin.todayOrders < 10
                        ? "000" + ordersDataAdmin.todayOrders
                        : ordersDataAdmin.todayOrders < 100
                        ? "00" + ordersDataAdmin.todayOrders
                        : ordersDataAdmin.todayOrders < 1000
                        ? "0" + ordersDataAdmin.todayOrders
                        : ordersDataAdmin.todayOrders
                    }
                  />
                </>
              )}
              {user === "Owner" && (
                <>
                  <DetailCard
                    detailCardMargin={true}
                    materialIconName={"mark_email_unread"}
                    cardText={"Today Messages"}
                    cardPrice={
                      ordersDataOwner.today_messages < 10
                        ? "000" + ordersDataOwner.today_messages
                        : ordersDataOwner.today_messages < 100
                        ? "00" + ordersDataOwner.today_messages
                        : ordersDataOwner.today_messages < 1000
                        ? "0" + ordersDataOwner.today_messages
                        : ordersDataOwner.today_messages
                    }
                  />
                  <DetailCard
                    detailCardMargin={false}
                    materialIconName={"local_shipping"}
                    cardText={"Available Drivers"}
                    cardPrice={
                      ordersDataOwner.today_available_drivers < 10
                        ? "000" + ordersDataOwner.today_available_drivers
                        : ordersDataOwner.today_available_drivers < 100
                        ? "00" + ordersDataOwner.today_available_drivers
                        : ordersDataOwner.today_available_drivers < 1000
                        ? "0" + ordersDataOwner.today_available_drivers
                        : ordersDataOwner.today_available_drivers
                    }
                  />
                </>
              )}
            </div>
            <div className={DashboardStyle.chartCardSection}>
              <div className={DashboardStyle.graphTableSection}>
                <div className={DashboardStyle.graphSection}>
                  <Chart />
                </div>
                <div className={DashboardStyle.tableSection}>
                  <TableCard />
                </div>
              </div>
              <div className={DashboardStyle.circleGraphSection}>
                <PieChartCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
