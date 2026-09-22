import ChildComp from "./ChildComp";
const App=()=>{
  let name="sukhvendra"
  let age=24
  const person={
    "name":"sukhvendra yadav",
    "age":25
  }
  let arr=["mohit kumar","ajay sinha"]
  return (
    <div>
       <h1>Component Data</h1>
       {/* <ChildComp name="mohit" age={24}/>   */}
       {/* <ChildComp name={name} age={age}/>  */}
       {/* <ChildComp person={person}/>   */}
       <ChildComp arr={arr}/>
       <h4></h4>
    </div>
  )
}
export default App;
