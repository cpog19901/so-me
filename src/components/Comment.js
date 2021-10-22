import React from "react";
import { FcLike, FcFullTrash, FcLikePlaceholder} from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
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
      marginBottom: "20px",
      position: "relative"
    },

    commentHolder:{
      width: "90%",
      marginLeft: "auto"
    },
    delIcon:{
      top: "0",
      right: "0",
      position: "absolute",
      transform: "translateY(-50%)"
     },
     date:{
      top: "100%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    color: "white",
    display: "inline",
    padding: "8px",
    position: "absolute",
    borderRadius: "10px",
    backgroundColor: "darkcyan",
    whiteSpace: "nowrap",
    },


}) 

const Comment = (props) => {

const currentUser = JSON.parse(localStorage.getItem("myuser"));


  const classes = useStyles()

    function handleClick(){
     console.log(props.id)
        props.onDelete(props.id, props.commentBelongsTo);
}
return(
  <div className={classes.commentHolder}>
  <div className={classes.profileInfo}>
  <Avatar className={classes.avatar} src={props.commentAvatar} alt=""/>
  <Typography className={classes.name} variant="h5">{props.commentPostedBy}</Typography>
  </div>
 <Paper className={classes.contentBox} elevation ={12}>
 {currentUser.login.username === props.commentPostedBy ? <TiDelete className={classes.delIcon} style={{cursor: "pointer", fontSize: "40px", color:"#bd1604"}} onClick={handleClick}/> : null}
  <p className={classes.postContent}>{props.content}</p>
  <Typography className={classes.date}>{props.commentTimestamp}</Typography>
 </Paper>
 </div>
)
}

export default Comment;