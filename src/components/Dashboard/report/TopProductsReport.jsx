import React, { useState, useEffect } from "react";
import { PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import ProductReport from "./common/productReport/ProductReport";
import { getOrders } from "../service/order";
import { getSellProducts } from "../service/sellProduct";
import { getCustomers } from "../service/customer";
import { getProducts } from "./../service/product";

function TopProductsReport() {
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

  const [topProductsData, setTopProductsData] = useState({});

  useEffect(() => {
    loadTopProductsForYear();
  }, []);

  const loadTopProductsForYear = async () => {
    try {
      // get the data

      const resultProducts = await getProducts();
      const products = resultProducts.data;

      const resultOrders = await getOrders();
      const all_orders = resultOrders.data;
      const orders = all_orders.filter(
        (order) => order.createdAt.split("T")[0].split("-")[0] === year
      );

      const resultSellProducts = await getSellProducts();
      const all_sell_products = resultSellProducts.data;

      const sell_products = all_sell_products.filter(
        (sell_product) =>
          sell_product.createdAt.split("T")[0].split("-")[0] === year
      );

      products.forEach((product) => {
        var product_sell_products = sell_products.filter(
          (sell_product) => sell_product.product_id === product.id
        );

        var product_quantity = 0;
        var product_total_amount = 0;
        product_sell_products.forEach((sell_product) => {
          // console.log(sell_product.quantity);
          var price_of_sell_product =
            Number.parseFloat(sell_product.price) *
            ((100 - sell_product.discount) / 100) *
            sell_product.quantity;
          // console.log(price_of_sell_product);

          product_quantity = product_quantity + sell_product.quantity;
          product_total_amount = product_total_amount + price_of_sell_product;
        });
        product.items = product_quantity;
        product.total_amount =
          Number.parseFloat(product_total_amount).toFixed(2);
      });

      // filter products
      var topProducts = [];
      var maxTotalProductAmount;
      var position;
      let year_products = products;
      for (var i = 0; i < 18; i++) {
        maxTotalProductAmount = 0;
        position = 0;

        for (var j = 0; j < year_products.length; j++) {
          console.log(year_products[j].items);
          if (
            parseInt(year_products[j].total_amount) > 0 &&
            year_products[j].items > 0
          ) {
            if (
              maxTotalProductAmount < parseInt(year_products[j].total_amount)
            ) {
              maxTotalProductAmount = parseInt(year_products[j].total_amount);
              position = j;
            }
          }
        }

        var new_product = year_products[position];
        topProducts.push(new_product);
        year_products = year_products.filter(
          (product) => product.id !== new_product.id
        );
      }

      topProducts = topProducts.filter(
        (product) =>
          product !== undefined &&
          product.items > 0 &&
          parseInt(product.total_amount) > 0
      );

      console.log(products);
      console.log(topProducts);
      setTopProductsData(topProducts);
      // filter customers
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  console.log(topProductsData);

  return (
    <>
      {Array.isArray(topProductsData) === true && (
        <div style={styles.loader}>
          <PDFViewer style={styles.container}>
            <ProductReport products={topProductsData} year={year} />
          </PDFViewer>
        </div>
      )}
    </>
  );
}

export default TopProductsReport;
