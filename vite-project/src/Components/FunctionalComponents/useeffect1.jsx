import { useState, useEffect } from "react";
import axios from 'axios';
var UseEffect1 = () =>{
    var [post, setPost] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
             .then((res)=>{
                console.log(res.data);
                setPost(res.data)
            }).catch((err)=>{
                console.log(err);
            });
        },[])
    return (
        <section>
            <h1>Fetching data from JSON Placeholder API</h1>
              {post.map((element)=>(<li key={element.id}>{element.title}</li>))}
        </section>
    )
}
export default UseEffect1;