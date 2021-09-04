import React, { useState, useEffect } from "react";
import { PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import OrderReport from "./common/orderReport/OrderReport";
import DriverReport from "./common/driverReport/DriverReport";
import { getOrders } from "../service/order";
import { getSellProducts } from "../service/sellProduct";
import { getCustomers } from "./../service/customer";
import { getDeliveries } from "./../service/delivery";
import { getDeliveryDrivers } from "./../service/deliveryDriver";

function TopDriversReport() {
  const { year } = useParams();

  //   Font.register({
  //     family: "Oswald",
  //     src: `https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf`,
  //   });

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100vh",
      //   backgroundColor: "red",
    },
    loader: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
    },
  });

  const [topCustomersData, setTopCustomersData] = useState({});
  const [topDriversData, setTopDriversData] = useState({});

  useEffect(() => {
    loadTopDriversForYear();
  }, []);

  const loadTopDriversForYear = async () => {
    try {
      const resultDeliveries = await getDeliveries();
      const all_deliveries = resultDeliveries.data;
      const deliveries = all_deliveries.filter(
        (delivery) =>
          delivery.order.createdAt.split("T")[0].split("-")[0] === year &&
          delivery.complete_status === 1
      );

      const resultDrivers = await getDeliveryDrivers();
      const drivers = resultDrivers.data;

      const resultSellProducts = await getSellProducts();
      const sellProducts = resultSellProducts.data;

      drivers.forEach((driver) => {
        var drivers_orders = deliveries.filter(
          (delivery) => delivery.delivery_driver_id === driver.id
        );
        var totalOrders = 0;
        var totalAmount = 0;
        var totalItems = 0;
        if (drivers_orders.length > 0) {
          drivers_orders.forEach((order) => {
            // console.log(order);
            totalAmount =
              totalAmount + parseFloat(order.order.total_product_amount);

            var driver_sell_products = sellProducts.filter(
              (sellProduct) => sellProduct.order_id === order.id
            );

            driver_sell_products.forEach((sellProduct) => {
              totalItems = totalItems + sellProduct.quantity;
            });
          });

          totalOrders = drivers_orders.length;
        }
        driver.items = totalItems;
        driver.orders = totalOrders;
        driver.amount = totalAmount.toFixed(2);
      });

      // filter customers
      var topDrivers = [];
      var maxTotalOrderAmount;
      var position;
      let year_drivers = drivers;
      for (var i = 0; i < 18; i++) {
        maxTotalOrderAmount = 0;
        position = 0;

        for (var j = 0; j < year_drivers.length; j++) {
          if (
            parseInt(year_drivers[j].amount) > 0 &&
            year_drivers[j].items > 0
          ) {
            if (maxTotalOrderAmount < parseInt(year_drivers[j]._amount)) {
              maxTotalOrderAmount = parseInt(year_drivers[j].amount);
              position = j;
            }
          }
        }

        var new_driver = year_drivers[position];
        topDrivers.push(new_driver);
        year_drivers = year_drivers.filter(
          (driver) => driver.id !== new_driver.id
        );
      }

      topDrivers = topDrivers.filter(
        (driver) =>
          driver !== undefined &&
          driver.items > 0 &&
          parseInt(driver.amount) > 0 &&
          driver.orders > 0
      );

      //   console.log(drivers);
      //   console.log(topDrivers);
      setTopDriversData(topDrivers);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  // console.log(topDriversData);

  return (
    <>
      {Array.isArray(topDriversData) === true && (
        <div style={styles.loader}>
          <PDFViewer style={styles.container}>
            <DriverReport drivers={topDriversData} year={year} />
          </PDFViewer>
        </div>
      )}
    </>
  );
}

export default TopDriversReport;
