import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";
import ProductTableBlankSpace from "./ProductTableBlankSpace";
import ProductTableFooter from "./ProductTableFooter";

const tableRowsCount = 18;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#9e5c28",
    // backgroundColor: "yellow",
  },
  container: {
    height: 530,
  },
});

const ProductTable = ({ items }) => (
  <View style={styles.container} wrap={false}>
    <View style={styles.tableContainer}>
      <ProductTableHeader />
      <ProductTableRow items={items} />
      <ProductTableBlankSpace rowsCount={tableRowsCount - items.length} />
      <ProductTableFooter items={items} />
    </View>
  </View>
);

export default ProductTable;
