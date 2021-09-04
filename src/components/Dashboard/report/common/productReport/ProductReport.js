import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import ProductTable from "./ProductTable";
import ThankYouMsg from "../ThankYouMsg";
import Header from "../Header";
import Title from "../Title";
import PdfNo from "../PdfNo";
import PdfTo from "../PdfTo";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    // fontFamily: "Oswald",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },

  logo: {
    width: 45,
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const ProductReport = ({ products, year }) => {
  console.log(products.length);

  const title = `Top Products Report of ${year} Year`;

  return (
    <Document
      author="ARMagic Group"
      keywords="Top Products Report"
      subject="Top Products Report"
      title="Top Products Report"
    >
      <Page size="A4" style={styles.page} wrap>
        <Header />
        <PdfNo year={year} />
        <PdfTo />
        <Title title={title} />

        <ProductTable items={products} />

        <ThankYouMsg />
      </Page>
    </Document>
  );
};

export default ProductReport;
