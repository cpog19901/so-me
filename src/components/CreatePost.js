import React, {useState} from "react";

function CreatePost (props) {

//set key id to empty string in post object

    const [post, setPost] = useState({
        content: ""
    })


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

    // When submit post button is clicked, call the onAdd function and prevent refresh. The value of content is also cleared
    function submitPost(e){
        props.onAdd(post);
        e.preventDefault();
        setPost({
            content: ""
        });
    }

    return(
        <div>
            <form action="">
                
                <textarea name="content" type="text" placeholder= "Enter a post" value={post.content} onChange={handleChange}/>
                <button class="submit-btn" name="submit-post" type="submit" onClick={submitPost}>Submit post</button>
            </form>
            
        </div>
    )
}

export default CreatePost;