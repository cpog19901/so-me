import React from "react";
import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";

const Comment = (props) => {

    function handleClick(){
        props.onDelete(props.id);
}
return(
    <div className = "comment-container">
      <span>{props.todayDate}</span>
        <button onClick={handleClick}><FcFullTrash size={25}/></button>
         <div className="profile-details">
         <img class="profile-pic" src="images/profile-pic.jpg" alt="" />
         <h4 class="profile-name">Ciaran O'Grady</h4>
         </div>
         <h3 class="post-content">{props.content}</h3>

         <AiFillLike style={ {color: props.isLikeClicked ? "red" : "black"}} size={25} onClick={props.changeColor}/>
         <span>{props.like}</span>
    </div>
)
}

export default Comment;