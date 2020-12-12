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
      <div className="display-4" style={{ position: "absolute", zIndex: "2" }}>
        LOADING
      </div>
      <div className="loading-outer d-flex justify-content-center align-items-center">
        {/* <div className="loading-middle d-flex justify-content-center align-items-center">
          <div className="loading-inner"></div>
        </div> */}
      </div>
    </div>
  );
}
