import { useState } from "react"
import Bio from "./Bio.jsx"
const App=()=>{
  const [show,setShow]=useState(false)
  return (
    <div>
      <h1>Toogle Button </h1>
      <button onClick={()=>setShow(!show)}>
        {show?"Hide":"Show"} Details
      </button>
      { show && <Bio/>}
    </div>
  )
}
export default App;