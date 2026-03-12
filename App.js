
import React,{useState} from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App(){

 const [data,setData]=useState({});

 return(
  <div>
   <ResumeForm setData={setData}/>
   <ResumePreview data={data}/>
  </div>
 );
}

export default App;
