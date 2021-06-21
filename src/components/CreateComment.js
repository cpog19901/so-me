import React, {useState} from "react";


const CreateComment = (props) =>{



    const[comment, setComment] = useState({
        commentContent: ""
    })



    function submitComment(e){
        props.onAdd(comment);
        e.preventDefault();
        setComment({
            commentContent: ""
        });
    }


    const handleChangeComment =(event) =>{
        const {name, value} = event.target;
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
        <button class="submit-btn" name="submit-comment" type="submit" onClick={submitComment}>Submit comment</button>
        </form>
        </div>
    )
}

export default CreateComment;