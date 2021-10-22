import React,{useState} from "react";
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import Nav from "../components/Nav"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import {useParams, Link} from "react-router-dom"

const useStyles=makeStyles({
  postsTitle : {
    backgroundColor:"aliceblue",
    padding: "20px",
    borderRadius: "10px",
  },
  
})

const PostsPage = ({ usersPosts, usersComments, setUsersPosts, setUsersComments, addPost, deletePost, posts}) =>{

 
const classes=useStyles();
const currentUser = JSON.parse(localStorage.getItem("myuser"));

  //set state of posts constant to an empty array

   
    const [postDate, setPostDate]= useState([]);
    const [posterUsername, setPosterUsername]=useState(currentUser.login.username)
    const [avatar, setAvatar] = useState(currentUser.picture.medium)

   

    // addPost function sets the state of posts to return previous submitted posts and the latest post

    // function addPost(newPost){

      
  
    //   setPosts(prevPosts =>{
    //    return [newPost, ...prevPosts ]
    //   })
        
    //   fetch("http://localhost:8000/posts/", {
    //     method: "POST",
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify(newPost)
    //   })



    // }
    
    // deletePost function sets the state of posts to return filtered items in the array where the id is not equal to index. 

    // function deletePost(id){
      
    //   setPosts(prevPosts =>{
    //     return prevPosts.filter((postItem)=> {
    //       return postItem.id !== id;
    //     })
    //   })

    //   setUsersPosts(prevPosts =>{
    //     return prevPosts.filter((postItem)=> {
    //       return postItem.id !== id;
    //     })
    //   })

    //   fetch("http://localhost:8000/posts/"+id, {
    //     method: "DELETE",
    //   })
    
    // }

    let {postId} = useParams();
    console.log(postId)
  

    return(
    <div>
   <Nav/>
     
      <div className="main-page">
     
      
      
      <div className="posts-container">
      <div className="posts-heading-container">
      <Typography className={classes.postsTitle} variant="h3">Posts</Typography>
    
 
     
      </div>
      
    {postId === undefined ? <CreatePost 
        onAdd ={addPost}
        posterUsername ={posterUsername}
        avatar={avatar}
        /> : null }


        {/* Map through the posts array and display each post in it*/}

      {posts.filter(postItem=>{
         if(postId===postItem.id){
            return postItem ;
         } else if(postId === undefined){
           return postItem;
         }
        }).map((postItem, index) => {
         return (
          
          <Post
         key={postItem.id}
          id ={postItem.id}
          postId ={postItem.id}
          title={postItem.title}
          content={postItem.content}
          posterUsername ={postItem.posterUsername}
          avatar={postItem.avatar}
          timestamp = {postItem.timestamp}
          onDelete={deletePost}
          postDate ={postDate}
          usersComments ={usersComments}
          setUsersComments ={setUsersComments}
          
         
         />
         );
         })}

         {usersPosts.filter(userPost =>{
          if(postId===userPost.id){
          return userPost
          }else if(postId === undefined){
            return userPost;
          }
         }).map((postItem, index) => {
         return (<Post
         key={postItem.id}
          id ={postItem.id}
          postId ={postItem.id}
          title={postItem.title}
          content={postItem.content}
          posterUsername ={postItem.posterUsername}
          avatar={postItem.avatar}
          timestamp = {postItem.timestamp}
          onDelete={deletePost}
          postDate ={postDate}
          usersComments ={usersComments}
          setUsersComments ={setUsersComments}
         />
         );
         })}

       

         
         </div>
    </div>

    </div>
      
        

    )
}

export default PostsPage;