import React from "react";

const Comment = (props) => {
return(
    <div className = "post-container">
    <p>{props.content}</p>
    </div>
)
}

export default Comment;