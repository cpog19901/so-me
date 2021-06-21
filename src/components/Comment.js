import React from "react";

const Comment = (props) => {
return(
    <div className = "comment-container">
    <h4 class="comment-content">{props.content}</h4>
    </div>
)
}

export default Comment;