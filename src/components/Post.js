import React,{useState}  from "react";

import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment.js";
import { v4 as uuidv4 } from 'uuid';

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
  console.log(id)
        setComments(prevComments =>{
          return prevComments.filter((commentItem, index)=> {
            
            return commentItem.id !== id;
          })
        })
        
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
         <img className="profile-pic" src="images/profile-pic.jpg" alt="" />
         <h4 className="profile-name">Ciaran O'Grady</h4>
         </div>
         <h3 className="post-content">{props.content}</h3>

         <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/>
         <span>{like}</span>
        
        </div>
        


{/* map though all coomments and display them */}
        {comments.map((commentItem, i) => {
         return (<Comment
          key={commentItem.id}
          id ={commentItem.id}
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