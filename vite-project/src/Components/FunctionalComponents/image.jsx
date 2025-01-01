import { useState, useEffect } from "react";
import axios from 'axios';
var Image = () =>{
    var [image, setImage] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
             .then((res)=>{
                console.log(res.data);
                setImage(res.data)
            }).catch((err)=>{
                console.log(err);
            });
        },[image])
    return (
        <section>
            <h1>Fetching Image data from API</h1>
              {image.slice(0,10).map((element)=>(
                <li key={element.id}>
                    <img src={element.thumbnailUrl} alt={element.title}/>
                </li>))}
        </section>
    )
}
export default Image;