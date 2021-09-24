import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core"

function CreatePost (props) {

//set key id to empty string in post object

    const [post, setPost] = useState({
        id: uuidv4(),
        content: ""
    })


  // When submit post button is clicked, call the onAdd function and prevent refresh. The value of content is also cleared
  function submitPost(e){
    props.onAdd(post);
    e.preventDefault();
    setPost({
        id: uuidv4(),
        content: ""
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
                placeholder= "Enter a post" 
                name="content"
                value={post.content} 
                onChange={handleChange}
                id="filled-textarea"
                multiline
                variant="filled"
                label="New post"
                />
                <Button color="primary" variant="contained" size="medium" className="submit-btn" name="submit-post" type="submit" onClick={submitPost}>Submit post</Button>
            </form>
            
        </div>
    )
}

export default CreatePost;