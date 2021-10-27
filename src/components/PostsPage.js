import React,{useState} from "react";
import CreatePost from "../components/CreatePost"
import Post from "../components/Post"
import Nav from "../components/Nav"
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import {useParams, Link} from "react-router-dom"

const useStyles=makeStyles(theme=>{

  return{
    postsTitle : {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "aliceblue",
    fontFamily: "Fredoka One"
  },
    mainPage:{
      display:"flex",
      margin: "auto",
    [theme.breakpoints.up("sm")]:{
      width: "500px"
    }
  
},
  postsContainer:{
    width: "500px",
    margin: "auto",
    padding: "4%",
    [theme.breakpoints.down("sm")]:{
      width: "90%"
    },
    backgroundColor: "white"
  } 
}
})

const PostsPage = ({ usersPosts, usersComments, setUsersPosts, setUsersComments, addPost, deletePost, posts}) =>{

 
const classes=useStyles();
const currentUser = JSON.parse(localStorage.getItem("myuser"));

  //set state of posts constant to an empty array

   
    const [postDate, setPostDate]= useState([]);
    const [posterUsername, setPosterUsername]=useState(currentUser.login.username)
    const [avatar, setAvatar] = useState(currentUser.picture.medium)

    let {postId} = useParams();
    console.log(postId)
  

    return(
    <div>
   <Nav/>
     
      <div className={classes.mainPage}>
     
      
      
      <div className={classes.postsContainer}>
      <img style={{width: "100%"}} src="images/newsfeed.png" alt="" />
      
      <Typography className={classes.postsTitle} variant="h4">Newsfeed</Typography>
      
 
     
      
      
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