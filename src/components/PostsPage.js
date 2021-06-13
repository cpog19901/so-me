import React,{useState} from "react";
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"


const PostsPage = () =>{

    const [posts, setPosts] = useState([]);

    console.log(posts);
    
    
    
    
    function addPost(newPost){
      setPosts(prevPosts =>{
       return [...prevPosts, newPost ]
      })
    }
    
    function deletePost(id){
      setPosts(prevPosts =>{
        return prevPosts.filter((postItem, index)=> {
          return index !== id;
  
        })
        
      })
    
    }


    return(
    <div>
      <div class="main-page">
      <h1>Posts</h1>
        <CreatePost onAdd ={addPost}/>
         {posts.map((postItem, index) => {
         return (<Post
          key={index}
          id ={index}
          content={postItem.content}
          onDelete={deletePost}
         />
         );
         })}
        
    </div>

    </div>
      
        

    )
}

export default PostsPage;