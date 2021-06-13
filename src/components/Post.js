import React,{useState}  from "react";

import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment.js";

function Post(props){

       
const [comments, setComments] = useState([]);    
const[isLikeClicked, setIsLikeClicked] = useState(false);

function addComment(newComment){
  setComments(prevComments =>{
   return [...prevComments, newComment ];
  })
}

function deleteComment(id){
        setComments(prevComments =>{
          return prevComments.filter((commentItem, index)=> {
            return index !== id;
          })
        })
        console.log(comments);
      }

var today = new Date(),

date = today.getDate() + '-' + (today.getMonth() + 1) + '-' +  today.getFullYear() ;



const [like, setLike] = useState(0)
const [todayDate, setTodayDate] = useState(date); 

function countLike(){
        setLike(like+1);        
}      
       
function handleClick(){
        props.onDelete(props.id);
        setTodayDate(date);
}        

function changeColor(){
 setIsLikeClicked(true)
 setLike("You liked this post");

}


return(<>
        <div className="post-container fade-in-fwd">
        <span>{todayDate}</span>
        <button onClick={handleClick}><FcFullTrash size={25}/></button>
         <div className="profile-details">
        
         <img class="profile-pic" src="images/so-me image.jpg" alt="" />
         <h2 class="profile-name">Ciaran O'Grady</h2>
         
         </div>
         <p>{props.content}</p>
         
        
         {/* <FcLikePlaceholder size={25} onClick={countLike}/>
         <FcLike size={25}/> */}
         <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/>
         <span>{like}</span>
        
        </div>
        



        {comments.map((commentItem, i) => {
         return (<Comment
          key={i}
          id ={i}
          content={commentItem.commentContent}
          onDelete={deleteComment}
         />
         );
         })}

        <CreateComment
          onAdd={addComment}      
        />
         
        

</>)

}

export default Post;