import { useState } from "react";

const App=()=>{
   const [name,setName]=useState("")
   const [file,setFile]=useState("")
  return (
    <div>
      <h1>OnChange Event and Clear </h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
      <button onClick={()=>setName("")}>Clear</button>
      <h2>Live Priviews:-{name} </h2>
      <br />
       <input type="file" value={file} onChange={(e)=>setFile(e.target.value)}/>
       <button onClick={()=>setFile("")}>Clear</button>
       <h2>live:-{file}</h2>
      
    </div>
  )
}

export default App;