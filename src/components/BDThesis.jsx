import React from "react";

const BDThesis = () => {
  return (
    <div className="thesis">
      <iframe
        src={require("../pdf/BD_Thesis_Enzo_Zerega.pdf")}
        width="100%"
        height="100%"
      >
        This browser does not support PDFs. Please download the PDF to view it:
        Download PDF
      </iframe>
    </div>
  );
};

export default BDThesis;
