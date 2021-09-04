import React, { useState, useEffect } from "react";
import TableCardStyle from "../../../css/dashboard/Table.module.css";
import { getSellProducts } from "./../service/sellProduct";
import Auth from "./../service/auth";
import { getDeliveryDrivers } from "./../service/deliveryDriver";
import { getDeliveries } from "./../service/delivery";
import { getProducts } from "./../service/product";

function TableCardDriver() {
  const [topProductDeliveries, setTopProductDeliveries] = useState({
    name: "",
    price: "",
    discount: 0,
    quantity: 0,
  });

  useEffect(() => {
    loadTopProductsDeliveries();
  }, []);

  const loadTopProductsDeliveries = async () => {
    try {
      const user_email = Auth.getCurrentUserEmail();
      const result_drivers = await getDeliveryDrivers();
      const user_driver = result_drivers.data.filter(
        (driver) => driver.account.email === user_email
      )[0];

      const resultDeliveries = await getDeliveries();
      const driver_deliveries = resultDeliveries.data.filter(
        (delivery) => delivery.deliveryDriver.id === user_driver.id
      );

      // console.log(driver_deliveries);

      const result = await getSellProducts();
      const sellProducts = result.data;

      var driver_sell_products_all = [];
      driver_deliveries.forEach((delivery) => {
        var driver_sell_products = sellProducts.filter(
          (sellProduct) => sellProduct.order_id === delivery.order_id
        );

        // console.log(driver_sell_products);

        driver_sell_products.forEach((sellProduct) => {
          driver_sell_products_all.push(sellProduct);
        });
      });

      // console.log(driver_sell_products_all);

      const resultProduct = await getProducts();
      const productsData = resultProduct.data;

      productsData.forEach((product) => {
        var sellProducts = driver_sell_products_all.filter(
          (sellProduct) => sellProduct.product_id === product.id
        );

        // console.log(sellProducts);
        // console.log(sellProducts.length);
        var itemCount = 0;
        if (sellProducts.length > 0) {
          sellProducts.forEach((sellProduct) => {
            itemCount = itemCount + sellProduct.quantity;
          });
        }
        product.quantity = itemCount;
      });

      // select Top 5 products
      let products = productsData;
      var topSellProducts = [];
      var position;
      var maxQuantity;
      // console.log(products);
      for (var i = 0; i < 5; i++) {
        maxQuantity = 0;
        position = 0;
        for (var j = 0; j < products.length; j++) {
          if (maxQuantity < products[j].quantity) {
            maxQuantity = products[j].quantity;
            position = j;
          }
        }

        // console.log(position);

        var new_product = products[position];
        // console.log(position);
        // console.log(new_product);
        topSellProducts.push(new_product);

        products = products.filter((item) => item.id !== new_product.id);
        // console.log(products);
        // console.log(topSellProducts);
      }
      // console.log(topSellProducts);
      setTopProductDeliveries(topSellProducts);
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  return (
    <div className={TableCardStyle.table}>
      <div className={TableCardStyle.tabletitle}>
        <h1 className={TableCardStyle.tableTitleStyle}>
          Top Deliveries Products
        </h1>
      </div>
      <div className={TableCardStyle.tablebody}>
        <table className={TableCardStyle.tableShow}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(topProductDeliveries) === true && (
              <>
                {topProductDeliveries.map((product, index) => (
                  <tr key={index + 1}>
                    <td>{product.name}</td>
                    <td>
                      Rs.
                      {product.price}
                    </td>
                    <td>
                      {product.discount < 10
                        ? "0" + product.discount
                        : product.discount}
                      %
                    </td>
                    <td>
                      {product.quantity < 10
                        ? "00" + product.quantity
                        : product.quantity < 100
                        ? "0" + product.quantity
                        : product.quantity}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCardDriver;
