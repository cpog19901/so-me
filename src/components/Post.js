import React,{useState}  from "react";

import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment.js";

function Post(props){

// set comments to empty array       
const [comments, setComments] = useState([]);    

//set isLikeClicked state to false so like button is not shown as clicked
const[isLikeClicked, setIsLikeClicked] = useState(false);

// addComment function setsComments state to return all previous comments and latest comment
function addComment(newComment){
  setComments(prevComments =>{
   return [...prevComments, newComment ];
  })
}


// deleteComment function returns only comments 
function deleteComment(id){
        setComments(prevComments =>{
          return prevComments.filter((commentItem, index)=> {
            return index !== id;
          })
        })
        console.log(comments);
      }


//get date     
var today = new Date(),
date = today.getDate() + '-' + (today.getMonth() + 1) + '-' +  today.getFullYear() ;

//set date in todayDate state
const [todayDate, setTodayDate] = useState(date); 

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
        <div className="post-container fade-in-fwd">
        <span>{todayDate}</span>
        <button onClick={handleClick}><FcFullTrash size={25}/></button>
         <div className="profile-details">
         <img class="profile-pic" src="images/profile-pic.jpg" alt="" />
         <h4 class="profile-name">Ciaran O'Grady</h4>
         </div>
         <h3 class="post-content">{props.content}</h3>

         <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/>
         <span>{like}</span>
        
        </div>
        


{/* map though all coomments and display them */}
        {comments.map((commentItem, i) => {
         return (<Comment
          key={i}
          id ={i}
          content={commentItem.commentContent}
          onDelete={deleteComment}
          changeColor ={changeColor}
          todayDate ={todayDate}
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