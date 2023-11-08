import React from "react";

const Cancel = () => {
  return (
    <>
      <div className="mt-40 mx-auto bg-red-400 text-white text-center flex-col py-3">
        <h1>Payment Cancelled</h1>
        <a href="/" className="underline">
          Return to Home
        </a>
      </div>
    </>
  );
};

export default Cancel;
