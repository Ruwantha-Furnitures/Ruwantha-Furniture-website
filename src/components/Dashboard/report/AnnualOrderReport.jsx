import React, { useState, useEffect } from "react";
import { PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import OrderReport from "./common/orderReport/OrderReport";
import { getOrders } from "./../service/order";
import { getSellProducts } from "./../service/sellProduct";

function AnnualOrderReport() {
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

  const [orders, setOrders] = useState({});

  useEffect(() => {
    loadOrderForYear();
  }, []);

  const loadOrderForYear = async () => {
    try {
      const resultOrders = await getOrders();
      const all_orders = resultOrders.data;
      const orders = all_orders.filter(
        (order) => order.createdAt.split("T")[0].split("-")[0] === year
      );

      const resultSellProducts = await getSellProducts();
      const sell_products = resultSellProducts.data;

      orders.forEach((order) => {
        var num_of_sell_products = sell_products.filter(
          (sellProduct) => sellProduct.order_id === order.id
        );
        order.items = num_of_sell_products.length;
      });

      var new_orders = orders.filter(
        (order) => order.items > 0 && parseInt(order.total_product_amount) > 0
      );

      console.log(year);
      console.log(orders);
      setOrders(new_orders);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  console.log(orders);

  return (
    <>
      {Array.isArray(orders) === true && (
        <div style={styles.loader}>
          <PDFViewer style={styles.container}>
            <OrderReport orders={orders} year={year} />
          </PDFViewer>
        </div>
      )}
    </>
  );
}

export default AnnualOrderReport;