import React from "react";

export default function NotFound404(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-danger"
      style={{
        position: "absolute",
        top: "56px",
        bottom: "0",
        width: "100%",
      }}
    >
      <h1>
        Oops! Something went wrong.
        <br />
        <pre>{props.errMess.message}</pre>
      </h1>
    </div>
  );
}
