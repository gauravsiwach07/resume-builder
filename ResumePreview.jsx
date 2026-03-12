
import React from "react";
import jsPDF from "jspdf";

function ResumePreview({data}){

 const download=()=>{
  const doc=new jsPDF();
  doc.text(data.name || "Name",20,20);
  doc.text(data.skills || "Skills",20,40);
  doc.save("resume.pdf");
 };

 return(
  <div>
   <h1>{data.name}</h1>
   <p>{data.skills}</p>
   <button onClick={download}>Download PDF</button>
  </div>
 );
}

export default ResumePreview;
