import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

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
        <textarea name="commentContent" value={comment.commentContent} id="" cols="30" rows="5" placeholder="Enter a comment" onChange={handleChangeComment}></textarea>
        <button className="submit-btn" name="submit-comment" type="submit" onClick={submitComment}>Submit comment</button>
        </form>
        </div>
    )
}

export default CreateComment;