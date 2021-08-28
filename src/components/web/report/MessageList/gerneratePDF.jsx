// services/reportGenerator.js

import jsPDF from "jspdf";
import "jspdf-autotable";


// define a generatePDF function that accepts a tickets argument
const generatePDF = messages => {
    const doc = new jsPDF();       

    // define the columns we want and their titles
    const tableColumn = ["first_name", "last_name", "contact_number", "email","details"];
    // define an empty array of rows
    const tableRows = [];
  
    // for each ticket pass all its data into an array
    messages.forEach(message => {
        const messageData = [                
            message.first_name,
            message.last_name,
            message.contact_number,                                
            message.email,                                
            message.details,                                
        ];
        // push each tickcet's info into a row
        tableRows.push(messageData);
    });  
    
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
};

export default generatePDF;