import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core"

const CreateComment = (props) =>{


    // set comment content to blank string
    const[comment, setComment] = useState({
        id: uuidv4(),
        commentContent: ""
    })


    //submitComment function will prevent refresh add the comment to the comments array and 
    function submitComment(e){
        props.onAdd(comment);
        e.preventDefault();
        setComment({
            id: uuidv4(),
            commentContent: ""
        });
    }

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
    }    


    

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
        className="submit-btn"
        name="submit-comment" 
        type="submit" 
        variant="contained"
        color="primary"
        onClick={submitComment}>Submit comment</Button>
        </form>
        </div>
    )
}

export default CreateComment;