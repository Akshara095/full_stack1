import { useRef, useState, useEffect} from "react";
var UseRef1 =() => {
    var [num,setNum] = useState("");
    var prevNum = useRef("");
    useEffect(()=>{
        prevNum.current = num
    },[num])
    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <h2>My current render is {num}</h2>
            <h3>My previous render is {prevNum.current}</h3>
        </section>
    )
}
export default UseRef1;