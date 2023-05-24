import React, { useRef } from "react";

const Ex09 = () => {
  let pdfRef = useRef();
  const changePdf = () => {
    console.log(pdfRef.current.src);
    pdfRef.current.src == "http://localhost:3000/pdf/pdfFile1.pdf"
      ? (pdfRef.current.src = "/pdf/pdfFile2.pdf")
      : (pdfRef.current.src = "/pdf/pdfFile1.pdf");
  };
  return (
    <div style={{ height: "100vh" }}>
      <button onClick={changePdf}>pdf 변경하기</button>
      <iframe
        ref={pdfRef}
        src="/pdf/pdfFile1.pdf"
        width="100%"
        height="90%"
      ></iframe>
    </div>
  );
};

export default Ex09;
