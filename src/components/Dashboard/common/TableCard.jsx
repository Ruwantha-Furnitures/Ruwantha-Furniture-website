import React, { useState, useEffect } from "react";
import TableCardStyle from "../../../css/dashboard/Table.module.css";
import { getSellProducts } from "./../service/sellProduct";
import { getProducts } from "./../service/product";

function TableCard() {
  const [topProducts, setTopProducts] = useState({
    name: "",
    price: "",
    discount: 0,
    quantity: 0,
  });

  useEffect(() => {
    loadTopProducts();
  }, []);

  const loadTopProducts = async () => {
    try {
      const result = await getSellProducts();
      const sellProductsData = result.data;

      const resultProduct = await getProducts();
      const productsData = resultProduct.data;

      productsData.forEach((product) => {
        var sellProducts = sellProductsData.filter(
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
      console.log(products);
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
      setTopProducts(topSellProducts);
      console.log(productsData.sort());
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <div className={TableCardStyle.table}>
      <div className={TableCardStyle.tabletitle}>
        <h1 className={TableCardStyle.tableTitleStyle}>Top Selling Products</h1>
      </div>
      <div className={TableCardStyle.tablebody}>
        <table className={TableCardStyle.tableShow}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(topProducts) === true && (
              <>
                {topProducts.map((product, index) => (
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

export default TableCard;
