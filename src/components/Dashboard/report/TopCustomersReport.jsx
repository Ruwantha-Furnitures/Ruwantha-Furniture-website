import React, { useState, useEffect } from "react";
import { PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import OrderReport from "./common/orderReport/OrderReport";
import CustomerReport from "./common/customerReport/CustomerReport";
import { getOrders } from "../service/order";
import { getSellProducts } from "../service/sellProduct";
import { getCustomers } from "./../service/customer";

function TopCustomersReport() {
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

  useEffect(() => {
    loadTopCustomersForYear();
  }, []);

  const loadTopCustomersForYear = async () => {
    try {
      // get the data
      const resultOrders = await getOrders();
      const all_orders = resultOrders.data;
      const orders = all_orders.filter(
        (order) => order.createdAt.split("T")[0].split("-")[0] === year
      );

      const resultSellProducts = await getSellProducts();
      const sell_products = resultSellProducts.data;

      const resultCustomers = await getCustomers();
      const customers = resultCustomers.data;

      customers.forEach((customer) => {
        var customer_orders = orders.filter(
          (order) => order.customer_id === customer.id
        );
        customer.total_orders = customer_orders.length;
        var total_order_amount = 0;
        var total_product_items = 0;
        if (customer_orders.length > 0) {
          customer_orders.forEach((order) => {
            total_order_amount =
              total_order_amount + parseFloat(order.total_product_amount);
          });

          customer_orders.forEach((order) => {
            var sell_product_items_order = sell_products.filter(
              (sellProduct) => sellProduct.order_id === order.id
            );
            total_product_items =
              total_product_items + sell_product_items_order.length;
          });
        }
        customer.total_order_amount = total_order_amount.toFixed(2);
        customer.product_items = total_product_items;
      });

      // filter customers
      var topCustomers = [];
      var maxTotalOrderAmount;
      var position;
      let year_customers = customers;
      for (var i = 0; i < 18; i++) {
        maxTotalOrderAmount = 0;
        position = 0;

        for (var j = 0; j < year_customers.length; j++) {
          if (
            parseInt(year_customers[j].total_order_amount) > 0 &&
            year_customers[j].product_items > 0
          ) {
            if (
              maxTotalOrderAmount <
              parseInt(year_customers[j].total_order_amount)
            ) {
              maxTotalOrderAmount = parseInt(
                year_customers[j].total_order_amount
              );
              position = j;
            }
          }
        }

        var new_customer = year_customers[position];
        topCustomers.push(new_customer);
        year_customers = year_customers.filter(
          (customer) => customer.id !== new_customer.id
        );
      }

      topCustomers = topCustomers.filter(
        (customer) =>
          customer !== undefined &&
          customer.product_items > 0 &&
          parseInt(customer.total_order_amount) > 0 &&
          customer.total_orders > 0
      );

      // console.log(customers);
      console.log(topCustomers);
      setTopCustomersData(topCustomers);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  console.log(topCustomersData);

  return (
    <>
      {Array.isArray(topCustomersData) === true && (
        <div style={styles.loader}>
          <PDFViewer style={styles.container}>
            <CustomerReport customers={topCustomersData} year={year} />
          </PDFViewer>
        </div>
      )}
    </>
  );
}

export default TopCustomersReport;
