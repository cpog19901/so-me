import React, {useState} from "react";

function CreatePost (props) {

    const [post, setPost] = useState({
        content: ""
    })

    function handleChange (event) {
        const {name, value} = event.target;
        setPost(prevPost => {
            return{
                ...prevPost,
                [name]:value
            };
        }); 
    }

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