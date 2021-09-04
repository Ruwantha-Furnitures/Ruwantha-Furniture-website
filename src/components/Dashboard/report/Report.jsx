// import React from "react";
// import { PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
// import Invoice from "./invoice";
// import MainStyle from "../../../css/dashboard/Main.module.css";
// // import invoice from "./data/invoice-data";

// function Report() {
//   const invoiceData = {
//     id: "5df3180a09ea16dc4b95f910",
//     invoice_no: "201906-28",
//     balance: "$2,283.74",
//     company: "MANTRIX",
//     email: "susanafuentes@mantrix.com",
//     phone: "+1 (872) 588-3809",
//     address: "922 Campus Road, Drytown, Wisconsin, 1986",
//     trans_date: "2019-09-12",
//     due_date: "2019-10-12",
//     items: [
//       {
//         sno: 1,
//         desc: "ad sunt culpa occaecat qui",
//         qty: 5,
//         rate: 1555405.89,
//       },
//       {
//         sno: 2,
//         desc: "cillum quis sunt qui aute",
//         qty: 5,
//         rate: 373.11,
//       },
//       {
//         sno: 3,
//         desc: "ea commodo labore culpa irure",
//         qty: 5,
//         rate: 458.61,
//       },
//       {
//         sno: 4,
//         desc: "nisi consequat et adipisicing dolor",
//         qty: 10,
//         rate: 725.24,
//       },
//       {
//         sno: 5,
//         desc: "proident cillum anim elit esse",
//         qty: 4,
//         rate: 141.02,
//       },
//     ],
//   };

//   //   Font.register({
//   //     family: "Oswald",
//   //     src: `https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf`,
//   //   });

//   const styles = StyleSheet.create({
//     container: {
//       width: "100%",
//       height: "100vh",
//       //   backgroundColor: "red",
//     },
//     loader: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100vh",
//     },
//   });

//   console.log(invoiceData);

//   return (
//     <>
//       <div style={styles.loader}>
//         <PDFViewer style={styles.container}>
//           <Invoice invoice={invoiceData} />
//         </PDFViewer>
//       </div>
//     </>
//   );
// }

// export default Report;
