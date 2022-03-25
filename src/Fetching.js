import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Fetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
   axios
   .get('https://jsonplaceholder.typicode.com/posts')
   .then(res=>{
setPosts(res.data)


   }
    
    )
    }, [])
    
  return (
    <div>
<ul>
{posts.map(post=><li key={post.id}>{post.title}</li>)


}


</ul>

    </div>
  )
}

export default Fetching