import React from "react";

export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "absolute",
        top: "56px",
        bottom: "0",
        width: "100%",
      }}
    >
      <div className="icon-container">
        <i class="fa fa-sun"></i>
        <i class="fa fa-cloud"></i>
      </div>
      {/* <div className="display-4" style={{ position: "absolute", zIndex: "2" }}>
        LOADING
      </div>
      <div className="loading-outer d-flex justify-content-center align-items-center"></div> */}
    </div>
  );
}
