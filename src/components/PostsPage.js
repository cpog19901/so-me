import React,{useState} from "react";
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import Nav from "../components/Nav"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"



const PostsPage = () =>{

  

  //set state of posts constant to an empty array

    const [posts, setPosts] = useState([]);
    const [postDate, setPostDate]= useState("");

      


    // addPost function sets the state of posts to return previous submitted posts and the latest post

    function addPost(newPost){
  
      setPosts(prevPosts =>{
       return [newPost, ...prevPosts ]
      })
    }
    
    // deletePost function sets the state of posts to return filtered items in the array where the id is not equal to index. 

    function deletePost(id){
      
      setPosts(prevPosts =>{
        return prevPosts.filter((postItem)=> {

          
          return postItem.id !== id;
  
        })
        
      })
    
    }


    return(
    <div>
   
     
      <div className="main-page">
     
     
      
      <div className="posts-container">
      <div className="posts-heading-container">
      <Typography variant="h3">Posts</Typography>
      
 
     
      </div>
      
        <CreatePost onAdd ={addPost}/>

        {/* Map through the posts array and display each post in it*/}

         {posts.map((postItem, index) => {
         return (<Post
         key={postItem.id}
          id ={postItem.id}
          content={postItem.content}
          onDelete={deletePost}
          postDate ={postDate}
         />
         );
         })}
         </div>
    </div>

    </div>
      
        

    )
}

export default PostsPage;