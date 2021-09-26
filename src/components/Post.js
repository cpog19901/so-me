import React,{useState}  from "react";

import { MdDeleteForever} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment.js";
import { v4 as uuidv4 } from 'uuid';
import { Paper, Button, Typography, Avatar } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles({
    postContent:{
     fontFamily: ['Roboto','sans-serif'].join(),
     fontWeight: "600",
     overflowWrap: "break-word"
    },

    avatar:{
      zIndex: "10"
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
      marginBottom: "20px"
    },
    delIcon:{
     float: "right",
     padding:"10px",
    
    }


}) 

function Post(props){


const classes = useStyles()

// set comments to empty array       
const [comments, setComments] = useState([]);    

//set isLikeClicked state to false so like button is not shown as clicked
const[isLikeClicked, setIsLikeClicked] = useState(false);


const currentDate = new Date().toLocaleString();

// addComment function setsComments state to return all previous comments and latest comment
function addComment(newComment){

  setComments(prevComments =>{
   return [...prevComments, newComment ];
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
        <div className={classes.profileInfo}>
         <Avatar className={classes.avatar}src="images/profile-pic.jpg" alt=""/>
         <Typography className={classes.name} variant="h5">Ciaran O'Grady</Typography>
         </div>
        <Paper className={classes.contentBox} elevation ={12}>
        <MdDeleteForever className={classes.delIcon} style={{cursor: "pointer", fontSize: "20px"}} onClick={handleClick}/>
         <p className={classes.postContent}>{props.content}</p>

         <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/><span>{like}</span>
         <Typography>{currentDate}</Typography>
         
    
        </Paper>
        


{/* map though all coomments and display them */}
        {comments.map((commentItem, i) => {
         return (<Comment
          key={commentItem.id}
          id ={commentItem.id}
          content={commentItem.commentContent}
          onDelete={deleteComment}
          changeColor ={changeColor}
         
          isLikeClicked={isLikeClicked}
          like ={like}
         />
         );
         })}

        <CreateComment
          onAdd={addComment}      
        />
         
        

</>)

}

export default Post;