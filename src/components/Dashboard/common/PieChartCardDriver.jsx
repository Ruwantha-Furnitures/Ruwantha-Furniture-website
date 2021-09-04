import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import PieChartCardStyle from "../../../css/dashboard/PieChardCard.module.css";
import Auth from "./../service/auth";
import { getDeliveryDrivers } from "./../service/deliveryDriver";
import { getDeliveries } from "./../service/delivery";
import { getSellProducts } from "./../service/sellProduct";
import { getProducts } from "./../service/product";
import { getProductCategories } from "./../service/productCategory";

function PieChartCardDriver() {
  const [salesOfCategories, setSalesOfCategories] = useState({
    name: "",
    value: 0,
  });

  useEffect(() => {
    loadPieCharData();
  }, []);

  const loadPieCharData = async () => {
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

      // total sell items
      var total_count = 0;
      driver_sell_products_all.forEach((item) => {
        total_count = total_count + parseInt(item.quantity);
      });

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

      // select
      let products = productsData;
      var topSellProducts = [];
      var position;
      var maxQuantity;
      // console.log(products);
      for (var i = 0; i < productsData.length; i++) {
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

      const resultCategories = await getProductCategories();

      const productCategories = resultCategories.data;

      var salesCategories = [];
      productCategories.forEach((category) => {
        var sellProductData = topSellProducts.filter(
          (sellProduct) => sellProduct.type.category_id === category.id
        );
        var countSellProducts = 0;
        for (var i = 0; i < sellProductData.length; i++) {
          countSellProducts = countSellProducts + sellProductData[i].quantity;
        }
        var new_sales_categories = {};
        var percentage =
          (parseInt(countSellProducts) / parseInt(total_count)) * 100;
        new_sales_categories = {
          id: category.id,
          name: category.name,
          value: Math.round(percentage) === 0 ? 1 : Math.round(percentage),
        };
        salesCategories.push(new_sales_categories);
        // console.log(topSellProducts);
        // console.log(salesCategories);
        // Select Top product categories selling
        let productCategoriesData = salesCategories;
        var topSellProductCategories = [];
        var index;
        var maxPercentage;
        // console.log(products);
        for (var i = 0; i < 7; i++) {
          maxPercentage = 0;
          index = 0;
          for (var j = 0; j < productCategoriesData.length; j++) {
            if (maxPercentage < productCategoriesData[j].value) {
              maxPercentage = productCategoriesData[j].value;
              index = j;
            }
          }

          // console.log(index);

          var new_product_categories = productCategoriesData[index];
          if (new_product_categories !== undefined) {
            topSellProductCategories.push(new_product_categories);

            productCategoriesData = productCategoriesData.filter(
              (item) => item.id !== new_product_categories.id
            );
          }
        }
        // console.log(topSellProductCategories);
        setSalesOfCategories(topSellProductCategories);
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const COLORS = [
    "#E3E6EC",
    "#542B14",
    "#B89068",
    "#a3582d",
    "#cfd3db",
    "#351a0b",
    "#806346",
    "#a54812",
  ];

  return (
    <div className={PieChartCardStyle.pieChartSection}>
      <div className={PieChartCardStyle.pieChartLabel}>
        <h1 className={PieChartCardStyle.pieChartLabelStyle}>
          Deliveries Of Categories
        </h1>
      </div>
      <div className={PieChartCardStyle.pieChart}>
        <PieChart
          width={250}
          height={200}
          // onMouseEnter={this.onPieEnter}
        >
          <Pie
            data={salesOfCategories}
            cx={140}
            cy={90}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {Array.isArray(salesOfCategories) === true && (
              <>
                {salesOfCategories.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </>
            )}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className={PieChartCardStyle.pieChartTable}>
        {Array.isArray(salesOfCategories) === true && (
          <>
            {salesOfCategories.map((category, index) => (
              <div className={PieChartCardStyle.tablerow} key={index + 1}>
                <div className={PieChartCardStyle.rowPointer}>
                  <span
                    className={
                      "material-icons " + PieChartCardStyle.pointerSize
                    }
                  >
                    circle
                  </span>
                </div>
                <div className={PieChartCardStyle.rowText}>
                  <h1 className={PieChartCardStyle.rowTextStyle}>
                    {category.name}
                  </h1>
                </div>
                <div className={PieChartCardStyle.rowPercentage}>
                  <h1 className={PieChartCardStyle.rowPercentageStyle}>
                    {category.value === 1
                      ? "000"
                      : category.value < 10
                      ? "0" + category.value
                      : category.value}
                    %
                  </h1>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PieChartCardDriver;
