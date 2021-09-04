import React from "react";
import {
  Page,
  Document,
  Image,
  StyleSheet,
  Font,
  View,
} from "@react-pdf/renderer";
import OrderTable from "./OrderTable";
import ThankYouMsg from "../ThankYouMsg";
import Header from "../Header";
import Title from "../Title";
import PdfNo from "../PdfNo";
import PdfTo from "../PdfTo";
import OrderTableLong from "./OrderTableLong";

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

const OrderReport = ({ orders, year }) => {
  console.log(orders.length);
  const length = orders.length;
  var items = orders;
  var firstItems = [];
  var secondItems = [];
  if (length > 18) {
    var chunk;
    var firstArray = true;
    while (items.length > 0) {
      if (firstArray == true) {
        chunk = items.splice(0, 18);
        firstItems.push(chunk);
        firstArray = false;
      } else {
        chunk = items.splice(0, 28);
        secondItems.push(chunk);
      }

      // console.log(chunk);
    }
  }

  const title = `Annual Order Report of ${year} Year`;

  // console.log(firstItems);
  // console.log(secondItems);

  return (
    <Document
      author="ARMagic Group"
      keywords="awesome, resume, start wars"
      subject="Annual Order Report"
      title="Annual Order Report"
    >
      {length <= 18 && (
        <>
          <Page size="A4" style={styles.page} wrap>
            <Header />
            <PdfNo year={year} />
            <PdfTo />
            <Title title={title} />

            <OrderTable items={orders} />

            <ThankYouMsg />
          </Page>
        </>
      )}
      {length > 18 && (
        <>
          {Array.isArray(secondItems) === true &&
            Array.isArray(firstItems) === true && (
              <>
                <Page size="A4" style={styles.page} wrap>
                  <Header />
                  <PdfNo year="2021" />
                  <PdfTo />
                  <Title title="Annual Order Report" />

                  <OrderTable items={firstItems[0]} />

                  <ThankYouMsg />
                </Page>

                {secondItems.map((items, index) => (
                  <>
                    <Page size="A4" style={styles.page} key={index + 1}>
                      <OrderTableLong items={items} />
                      <ThankYouMsg />
                    </Page>
                  </>
                ))}
              </>
            )}
        </>
      )}
    </Document>
  );
};

export default OrderReport;
