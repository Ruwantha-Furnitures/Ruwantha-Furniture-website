import React from "react";
import DetailCardStyle from "../../../css/dashboard/DetailCard.module.css";

function DetailCard({
  detailCardMargin,
  materialIconName,
  cardText,
  cardPrice,
}) {
  return (
    <div
      className={
        detailCardMargin
          ? ` ${DetailCardStyle.detailCard} ${DetailCardStyle.detailCardMarginStyle}`
          : `${DetailCardStyle.detailCard}`
      }
    >
      <div className={DetailCardStyle.cardwrapper}>
        <div className={DetailCardStyle.cardIcon}>
          <span className={"material-icons " + DetailCardStyle.cardStyle}>
            {materialIconName}
          </span>
        </div>
        <div className={DetailCardStyle.cardDetails}>
          <h1 className={DetailCardStyle.cardTextStyle1}>{cardText}</h1>
        </div>
        <div className={DetailCardStyle.cardPrice}>
          <h1 className={DetailCardStyle.cardTextStyle2}>{cardPrice}</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
