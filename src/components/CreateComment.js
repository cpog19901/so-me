import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles" 

const useStyles = makeStyles({

   submitCommentBtn:{
       margin: "10px 0", 
       backgroundColor: "dodgerblue", 
       color: "white",
       "&:hover": {
        backgroundColor: 'dodgerblue'
      }

   }
   
})

const CreateComment = (props) =>{

    const classes = useStyles();
    const currentDate = new Date().toLocaleString();

    const currentUser = JSON.parse(localStorage.getItem("myuser"));

const commentOwner =props.commentBelongsTo;


    // set comment content to blank string
    const[comment, setComment] = useState({
        id: uuidv4(),
        commentContent: "",     
        commentOwner: commentOwner,
        commentPostedBy : currentUser.login.username,
        commentAvatar: currentUser.picture.medium,
        commentTimestamp: currentDate
    });


    //submitComment function will prevent refresh add the comment to the comments array and 
    function submitComment(e){
        props.onAdd(comment);
        e.preventDefault();
        setComment({
            id: uuidv4(),
            commentContent: "",
            commentOwner: commentOwner,   
            commentPostedBy : currentUser.login.username,
            commentAvatar: currentUser.picture.medium,
            commentTimestamp: currentDate
        });
    };

        //get name and value of the event and then update "content" value in comment state
    const handleChangeComment =(event) =>{
        const {name, value} = event.target;
        console.log(comment)
        setComment(prevComment => {
            return{
                ...prevComment,
                [name]:value
            };
        });
    };    


    

    return(
        
        <div className="comment-input">
        <form action="">
        <TextField 
        name="commentContent" 
        value={comment.commentContent} 
        fullWidth
        placeholder="Enter a comment" 
        multiline
        variant="filled"
        label="New comment"
        onChange={handleChangeComment}>
        </TextField>
        <Button 
        className={classes.submitCommentBtn}
        name="submit-comment" 
        type="submit" 
        variant="contained"
        onClick={submitComment}>Submit comment</Button>
        </form>
        </div>
    )
}

export default CreateComment;