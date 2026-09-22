import { useState } from "react";
const App=()=>{
  // let name="Sukhvendra Kumar"
  // const changeName=()=>{
  //    name="Ajay Yadav"
  //    console.log(name)
// }
  // const [state,setState]=useState(initiatevalue)

  //Defination:-state->state is a container to store data like variable but state is a dyanamic and mutable.
  //Required:-state ke andar component ko rerender(refresh) karne ki facilities hoti hai variable ke pass nahi esliye state required hai component me. Ui par Change hoga. varible se console me.
  const [name,setName]=useState("Sukhvendra")
  const [count,setCount]=useState(0)
  const [user,setUser]=useState({"name":"sukhvendra","age":24})//object ese lete hai
 const changeName1 = () => {
    setUser({
        ...user,
        name: "Ajay",
        age:90
    });
}
  const [arr,setArr]=useState([1,2,3,4])//array ese lete hai
  const changeName=()=>{
    setName("Sukhvendra Yadav")
    console.log(name)
  }
  
  return (
    <div>
      <h1>State</h1>
      <h1>{count}</h1>
      <p>User Name:-{user.name}</p>
      <p>User Age :-{user.age}</p>
      <br />
      <p>{name}</p>
      <button onClick={changeName1}>User Name Change Button</button>
      <br />
      <button onClick={()=>setUser({name:"sukhvendra",age:24})}> Privious User Name  Button  </button><br />
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <br />
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <br />
      <button onClick={()=>setCount(0)}>Reset</button>
      <br />
      <button onClick={changeName}>Change Name Button1</button>
      
      <br />
      <button onClick={()=>setName("Ajay Yadav")}>Change Name Button2</button>
      <br />
      <button onClick={()=>setName("sukhvendra")}>Privious Name Button3</button>
    </div>
  )
}

export default App;