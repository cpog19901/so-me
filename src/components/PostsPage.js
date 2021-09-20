import React,{useState} from "react";
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import Nav from "../components/Nav"



const PostsPage = () =>{

  //set state of posts constant to an empty array

    const [posts, setPosts] = useState([]);

      
    // addPost function sets the state of posts to return previous submitted posts and the latest post

    function addPost(newPost){
      setPosts(prevPosts =>{
       return [...prevPosts, newPost ]
      })
    }
    
    // deletePost function sets the state of posts to return filtered items in the array where the id is not equal to index. 

    function deletePost(id){
      
      setPosts(prevPosts =>{
        return prevPosts.filter((postItem, index)=> {

          
          return postItem.id !== id;
  
        })
        
      })
    
    }


    return(
    <div>
      <div className="main-page">
     
     <div className= "nav-container">
      <Nav/>
      </div>
      <div className="posts-container">
      <div className="posts-heading-container">
      <h1 className="posts-heading">Posts</h1>
      
      <img className="header-img" src="images/social-media.svg" alt="" />
     
      </div>
      
        <CreatePost onAdd ={addPost}/>

        {/* Map through the posts array and display each post in it*/}

         {posts.map((postItem, index) => {
         return (<Post
         key={postItem.id}
          id ={postItem.id}
          content={postItem.content}
          onDelete={deletePost}
         />
         );
         })}
         </div>
    </div>

    </div>
      
        

    )
}

export default PostsPage;