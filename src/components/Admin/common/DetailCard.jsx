import React from "react";
import "../css/DetailCard.css";

function DetailCard({
  detailCardMargin,
  materialIconName,
  cardText,
  cardPrice,
}) {
  return (
    <div
      className={
        detailCardMargin ? "detailCard detailCardMargin" : "detailCard"
      }
    >
      <div className="cardwrapper">
        <div className="cardIcon">
          <span className="material-icons cardStyle">{materialIconName}</span>
        </div>
        <div className="cardDetails">
          <h1 className="cardTextStyle1">{cardText}</h1>
        </div>
        <div className="cardPrice">
          <h1 className="cardTextStyle2">{cardPrice}</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
