import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  const getData = () =>{
     return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((res) =>{
      return res.json();
    });
  }

  const fetchAndUpdateData = async()=>{
    //call API
    //get data
    try{
      const data = await getData();
      console.log(data);
      setPosts(data);
    }
    catch (err){
      console.log(err);
    }
    
    //update state "Posts" from the server
    
  }


  return (
    <>
     <h1>Posts</h1>
     <button onClick={fetchAndUpdateData}>Get Posts</button>
     <ul>
      {posts.map((postItem) => (
         <li key={postItem.id}>{postItem.title}</li>
      ))};
     </ul>
    </>
  )
}

export default App
