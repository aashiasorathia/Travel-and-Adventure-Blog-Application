import { useEffect, useState } from "react";
import Posts from "../Posts";

export default function IndexPage(){
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/post').then(response => {
          response.json().then(posts => {
            setPosts(posts);
          });
        });
      }, []);
    return(
        <>
         {posts.length > 0 && posts.map(posts => (
        <Posts {...posts}/>
         ))}
        </>
    );
}