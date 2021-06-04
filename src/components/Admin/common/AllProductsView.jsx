import React from "react";
import "../css/AllProductsView.css";

function AllProductsView() {
  return (
    <React.Fragment>
      <div className="allProductsSection">
        <div className="allProductsLabel">
          <h1 className="allProductsLabelStyle">All Products</h1>
        </div>
        <div className="allProductsTable">
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Table</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Chair</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Cupboard</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Desk</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Desk(High)</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Cabinet</h1>
            </div>
          </div>
          <div className="allProductsTableRow">
            <div className="allProductsRowPointer">
              <span className="material-icons allProductPointerSize">
                circle
              </span>
            </div>
            <div className="allProductsRowText">
              <h1 className="allProductsRowTextStyle">Gaming Chair</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProductsView;
