import React from "react";
import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { Paper, Button, Typography, Avatar } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { MdDeleteForever} from "react-icons/md";

const useStyles = makeStyles({
    postContent:{
     fontFamily: ['Roboto','sans-serif'].join(),
     fontWeight: "600",
     overflowWrap: "break-word"
    },

    avatar:{
      zIndex: "10"
    },

    name:{
      backgroundColor: "dodgerblue",
      borderRadius: "0 10px 10px 0",
      padding: "3px 25px 3px 25px",
      alignSelf: "center",
      color: "white",
      left: "20px",
      position: "absolute",
      zIndex: "9"
    },

    profileInfo:{
      display:"flex",
      position: "relative",
      top: "20px"
    },

    contentBox:{
      padding: "30px",
      textAlign: "justify",
      marginBottom: "20px"
    },

    commentHolder:{
      width: "90%",
      marginLeft: "auto"
    },
    
    delIcon:{
      float: "right",
      padding:"10px",
     
     }


}) 

const Comment = (props) => {

  const classes = useStyles()

    function handleClick(){
     console.log(props.id)
        props.onDelete(props.id);
}
return(
  <div className={classes.commentHolder}>
  <div className={classes.profileInfo}>
  <Avatar className={classes.avatar}src="images/profile-pic.jpg" alt=""/>
  <Typography className={classes.name} variant="h6">Ciaran O'Grady</Typography>
  </div>
 <Paper className={classes.contentBox} elevation ={12}>
 <MdDeleteForever className={classes.delIcon} style={{cursor: "pointer", fontSize: "20px"}} onClick={handleClick} /> 
  <p className={classes.postContent}>{props.content}</p>

  {/* <AiFillLike style={ {color: isLikeClicked ? "red" : "black"}} size={25} onClick={changeColor}/> */}
  {/* <span>{like}</span> */}

 </Paper>
 </div>
)
}

export default Comment;