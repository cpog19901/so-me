import React,{useState}  from "react";
import { AiFillLike } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment.js";
import { Paper, Button, Typography, Avatar, Box } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const currentUser = JSON.parse(localStorage.getItem("myuser"));



const useStyles = makeStyles({
    postContent:{
     fontFamily: ['Roboto','sans-serif'].join(),
     fontWeight: "600",
     overflowWrap: "break-word"
    },

    avatar:{
      zIndex: "10"
    },

    date:{
      top: "100%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    color: "white",
    display: "inline",
    padding: "8px",
    position: "absolute",
    borderRadius: "10px",
    backgroundColor: "darkcyan",
    whiteSpace: "nowrap",
    fontFamily: "Roboto"
    },

    name:{
      backgroundColor: "dodgerblue",
      borderRadius: "0 10px 10px 0",
      padding: "3px 25px 3px 25px",
      alignSelf: "center",
      color: "white",
      left: "20px",
      position: "absolute",
      zIndex: "9"
    },

    profileInfo:{
      display:"flex",
      position: "relative",
      top: "20px"
    },

    contentBox:{
      padding: "30px",
      textAlign: "justify",
      marginBottom: "20px",
      position: "relative"
    },
    delIcon:{
     top: "0",
     right: "0",
     position: "absolute",
     transform: "translateY(-50%)"
    }


}) 

function Post(props){


const classes = useStyles()

// set comments to empty array       
const [comments, setComments] = useState([]);    

//set isLikeClicked state to false so like button is not shown as clicked
const[isLikeClicked, setIsLikeClicked] = useState(false);


const currentUser = JSON.parse(localStorage.getItem("myuser"));
 


// addComment function setsComments state to return all previous comments and latest comment
function addComment(newComment){
 
  
  setComments(prevComments =>{
   return [...prevComments, newComment ];
  })

  

  

  fetch("http://localhost:8000/comments/", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(newComment)
  })
}






// deleteComment function returns only comments 
function deleteComment(id){
  console.log(id)
        setComments(prevComments =>{
          return prevComments.filter((commentItem, index)=> {
            
            return commentItem.id !== id;
          })
        })

        props.setUsersComments(prevComments =>{
          return prevComments.filter((commentItem, index)=> {
            
            return commentItem.id !== id;
          })
        })
        
        fetch("http://localhost:8000/comments/"+id, {
        method: "DELETE",
      })
        
      }



//set date in todayDate state


const [like, setLike] = useState("Like")




// function countLike(){
//         setLike(like+1);        
// }      
      

//handleClick function will call the onDelete function and take in the post id
function handleClick(){
        props.onDelete(props.id);
        // setTodayDate(date);
}        


// change color of like icon when clicked
function changeColor(){
 setIsLikeClicked(true)
 setLike("You liked this post");

}


return(<>
     
        <Box className={classes.profileInfo} >
         <Avatar className={classes.avatar} src={props.avatar} alt=""/>
         <Typography className={classes.name} variant="h5">{props.posterUsername}</Typography>
         </Box>
        <Paper className={classes.contentBox} elevation ={12}>
      { props.posterUsername === currentUser.login.username ? <TiDelete className={classes.delIcon} style={{cursor: "pointer", fontSize: "40px", color:"#bd1604"}} onClick={handleClick}/> : null}
        <Typography variant="h6">{props.title}</Typography>
         <p className={classes.postContent}>{props.content}</p>
         <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/><span>{like}</span>
         <Typography className={classes.date}>{props.timestamp}</Typography>
        </Paper>
        


{/* map though all coomments and display them */}
        {comments.map((commentItem, i) => {
         return (<Comment
          key={commentItem.id}
          id ={commentItem.id}
          content={commentItem.commentContent}
          commentPostedBy ={commentItem.commentPostedBy}
          commentAvatar ={commentItem.commentAvatar}
          commentTimestamp = {commentItem.commentTimestamp}
          onDelete={deleteComment}
          changeColor ={changeColor}
          commentBelongsTo ={props.postId}
          isLikeClicked={isLikeClicked}
          like ={like}
         />
         );
         })}

        <CreateComment
          onAdd={addComment}   
          commentBelongsTo ={props.postId}   
        />

{props.usersComments.filter((commentItem)=>{
  
  return commentItem.commentOwner === props.postId 
  
}).map((commentItem, i) => {
         return (<Comment
          key={commentItem.id}
          id ={commentItem.id}
          content={commentItem.commentContent}
          commentPostedBy ={commentItem.commentPostedBy}
          commentAvatar ={commentItem.commentAvatar}
          commentTimestamp = {commentItem.commentTimestamp}
          onDelete={deleteComment}
          changeColor ={changeColor}
          commentBelongsTo ={props.postId}
          isLikeClicked={isLikeClicked}
          like ={like}
         />
         );
         })}

        
         
        

</>)

}

export default Post;