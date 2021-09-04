import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import DriverTable from "./DriverTable";
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

const DriverReport = ({ drivers, year }) => {
  console.log(drivers.length);

  const title = `Top Drivers Report of ${year} Year`;

  return (
    <Document
      author="ARMagic Group"
      keywords="Top Drivers Report"
      subject="Top Drivers Report"
      title="Top Drivers Report"
    >
      <Page size="A4" style={styles.page} wrap>
        <Header />
        <PdfNo year={year} />
        <PdfTo />
        <Title title={title} />

        <DriverTable items={drivers} />

        <ThankYouMsg />
      </Page>
    </Document>
  );
};

export default DriverReport;
