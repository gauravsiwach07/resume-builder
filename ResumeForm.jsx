
import React,{useState} from "react";

function ResumeForm({setData}){

 const [name,setName]=useState("");
 const [skills,setSkills]=useState("");

 const submit=()=>{
  setData({name,skills});
 };

 return(
  <div>
   <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
   <input placeholder="Skills" onChange={(e)=>setSkills(e.target.value)}/>
   <button onClick={submit}>Generate Resume</button>
  </div>
 );
}

export default ResumeForm;
