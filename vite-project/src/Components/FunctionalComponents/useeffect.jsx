import { useState, useEffect } from "react";

var UseEffect = () =>{
    var [text,setText] = useState("Kongu");
    useEffect(()=>{
        console.log(text);
        setText("KEC")
    },[])
    return (
        <section>
            <h1>UseEffect Example</h1>
            <input type="text" placeholder="Enter your text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <p>The text typed is {text}</p>
        </section>
    );
}
export default UseEffect;