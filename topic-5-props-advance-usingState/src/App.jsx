import { useState } from "react";
import Bio from "./Bio";
import Hobby from "./Hobby.jsx"

const App=()=>{
  const [show,setShow]=useState(false)
  const [hobby,setHobby]=useState()
  const [name,setName]=useState("xyz")
  return(
    <div>
      {/* <Hobby name="sukhvendra"/> */}
      { name && <Hobby name={name}/>}
      <button onClick={()=>setName("sukhvendra")}>Change Name</button>
      {/* <button onClick={()=>setShow(!show)}>
       {show?"Hide":"Show"} Details
      </button>
      {show && <Bio/>}
      <br />
      
      <button onClick={()=>setHobby("cricket")}>Show Hobby </button>
      <button onClick={()=>setHobby()}>Hide Hobby </button>
      {hobby && <Hobby name={hobby}/>} */}
    </div>
  )
}
export default App;
