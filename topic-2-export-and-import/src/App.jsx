import User ,{Username,profile} from "./User.jsx"
const App=()=>{
  return(
    <div>
        <h1>App component </h1>
         <User/>
         <Username/>
         {profile}
    </div>
  )
}

export default App;{/* ye component export kardiya hai ab esko kahi bhi import kar sakte hai multiple time ye default export hai*/}