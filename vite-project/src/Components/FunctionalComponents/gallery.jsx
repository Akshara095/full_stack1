import {useState} from "react";
import '../FunctionalComponents/gallery.css';
const Gallery =() =>{
    var [count, setCount] = useState(100);
    function increment(){
        setCount(count + 1)
    }
    return (
        <div>
            <h1 id ="gal">Dress gallery</h1>
            <p>Kurti</p>
            <p>Leggins</p>
            <p>Shirts</p>
            <p>Pants</p>
            <p>Product count : {count}</p>
            <button onClick={increment}>Increment </button>
            <button onClick={()=>{setCount(count-1)}}> Decrement</button>
            <button onDoubleClick={()=>{setCount(0)}}>Reset</button>

        </div>
    );
}
export default Gallery;