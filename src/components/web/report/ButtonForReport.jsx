import React, { useEffect, useState } from "react";
// import generatePDF from "../services/reportGenerator";
import GeneratePDF from "./MessageList/gerneratePDF";
import axios from 'axios';

const ButtonForReport = () => {
  
  const [messages,setMesages] = useState([]);
  

  useEffect(() => {
    const getAllMessages = async () => {
        try {
            let response = await axios.get("http://localhost:8080/api/message");
            console.log(response.data); // received products from the backend API
            setMesages(response.data);// set the received products into the products state array
        } catch (err) {
            console.log("error");
        }
    };    
    getAllMessages();
}, []);


// const reportMessages= tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">         
            <button
              className="btn btn-primary"
              onClick={() => GeneratePDF.generatePDF(messages)}
            >
              Generate monthly report
            </button>          
        </div>
      </div>
      <GeneratePDF messages={messages} />
    </div>
  );
};

export default ButtonForReport;
