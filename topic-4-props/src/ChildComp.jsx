// const ChildComp=(props)=>{ //first ways using props .props is keyword .esko data bhi likh kar kiya ja sakta tha
//     console.log(props)
//     return(
//         <div>
//            <h4>Component Name:-{props.name}</h4>
//            <h4>Component Age:-{props.age}</h4>
//         </div>
//     )
// }
// export default ChildComp;

// const ChildComp=({name,age})=>{// second ways 
//     return (
//         <div>
//         <h4>Component Name:-{name}</h4>
//         <h4>Component Age:-{age}</h4>

//         </div>
//     )
// }
// export default ChildComp;

// const ChildComp=({person})=>{// objects ways 
//     return (
//         <div>
//         <h4>Component Name:-{person.name}</h4>
//         <h4>Component Age:-{person.age}</h4>
//         </div>
//     )
// }
// export default ChildComp;

const ChildComp=({arr})=>{// array ways 
    return (
        <div>
        <h4>Component 1:-{arr[0]}</h4>
        <h4>Component 2:-{arr[1]}</h4>
        </div>
    )
}
export default ChildComp;