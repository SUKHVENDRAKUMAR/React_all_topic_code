const App=()=>{
  const name="sukhvendra"
  let arr=["sukhvendra",24,"etah","up"]
  let age=29
  let isFollow=true
   const setEventFunction=()=>{
    alert("hello sukhvendra")
  }
  const setEventFunctionPara=(lastname)=>{
    alert("hello sukhvendra"+" "+lastname)
  }
  const sum=(a,b)=>{
         return a+b
  }
  const obj={
    "name":"ajay",
    "age":15
  }
  return(
    <div>
       <h1>{name}</h1>
       <p>{arr}</p>
       <p>{arr.map((val,index)=>
         <p key={index}>{val}{index}</p> 
      )}</p>
      <p>my is {obj.name} and my age is {obj.age}</p>
      <p>{age>=18?"adult":"minor"}</p>
      <p>{isFollow && "followed "}</p>
      <button onClick={setEventFunction}>Click Me 1</button> {/* first ways-->jab bhi ham event lagate hai to usko camel case me likhte hai react me chahe bo kaunsa bhi event ho*/}
      <button onClick={()=>alert("welcome to my website ")}>Click Me 2</button><br />
      <button onClick={()=>setEventFunctionPara("yadav")}>Click Me 3</button>
      <p>{sum(10,30)}</p>

    </div>
  )
}
export default App;