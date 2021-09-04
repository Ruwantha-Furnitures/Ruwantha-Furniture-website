import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import CustomerTable from "./CustomerTable";
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

const CustomerReport = ({ customers, year }) => {
  console.log(customers.length);

  const title = `Top Customers Report of ${year} Year`;

  return (
    <Document
      author="ARMagic Group"
      keywords="Top Customers Report"
      subject="Top Customers Report"
      title="Top Customers Report"
    >
      <Page size="A4" style={styles.page} wrap>
        <Header />
        <PdfNo year={year} />
        <PdfTo />
        <Title title={title} />

        <CustomerTable items={customers} />

        <ThankYouMsg />
      </Page>
    </Document>
  );
};

export default CustomerReport;
