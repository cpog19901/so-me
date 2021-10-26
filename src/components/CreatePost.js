import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    submitBtn:{
        margin: "25px",
        backgroundColor: "dodgerblue", 
        color: "white",
        "&:hover": {
            backgroundColor: 'dodgerblue'
          }
    },
    textBox:{
        backgroundColor:"aliceblue",
        margin: "10px 0"
      }
})


function CreatePost (props) {

const classes = useStyles()

const currentDate = new Date().toLocaleString();
 
//set key id to empty string in post object




    const [post, setPost] = useState({
        id: uuidv4(),
        title: "",
        content: "",
        posterUsername: props.posterUsername,
        avatar: props.avatar,
        timestamp: currentDate
    })


  // When submit post button is clicked, call the onAdd function and prevent refresh. The value of content is also cleared
  function submitPost(e){
    props.onAdd(post);
    e.preventDefault();
    setPost({
        id: uuidv4(),
        title: "",
        content: "",
        posterUsername: props.posterUsername,
        avatar: props.avatar,
        timestamp: currentDate
    });
}


  //get name and value of the event and then update "content" value in post state

    function handleChange (event) {
        const {name, value} = event.target;
          setPost(prevPost => {
           
            return{
                ...prevPost,
                [name]:value
            };
        }); 
    }

  

    return(
        <div>
            <form action="">
            <TextField
                fullWidth
                placeholder= "Enter post title" 
                name="title"
                value={post.title} 
                onChange={handleChange}
                id="filled-textarea"
                variant="filled"
                label="Title"
                className={classes.textBox}
                
                />
                
               
                <TextField
                fullWidth
                placeholder= "Enter post content" 
                name="content"
                value={post.content} 
                onChange={handleChange}
                id="filled-textarea"
                multiline
                variant="filled"
                label="Content"
                className={classes.textBox}
                
                />
                <Button className={classes.submitBtn}  variant="contained" size="medium" name="submit-post" type="submit" onClick={submitPost}>Submit post</Button>
            </form>
            
        </div>
    )
}

export default CreatePost;