import { useState } from "react";
const Counter = ()=>{
    //this single line comment
    /*thisis multilines comment */

    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Type here");
    console.log(`You clicked ${count} time`);
    return(<>
        <button onClick={() => setCount(count+1)}>Click me</button>
        <p>You clicked {count} times</p>
        <input type="text" value={value} onChange={(event) =>setValue(event.target.value)}/>
        <h3>You typed {value.length} character</h3>
        <h3>{parseFloat(value)}$ to {(value * 33.55).toFixed(2)} baht</h3>
        <button onClick={() => setValue("")}>reset</button>
        <button onClick={() => setValue(value * 33.55)}>exchange</button>
        <img src="/Octocat.png"/>
    </>);
}

export default Counter;

