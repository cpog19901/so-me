import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Photos from "./components/Photos"
import PostsPage from "./components/PostsPage";
import LoginPage from "./components/LoginPage";
import Friends from "./components/Friends"
import Wall from "./components/Wall";
import SinglePost from "./components/SinglePost"
import LogoutPage from "./components/LogoutPage"
import Test from "./components/Test"
import './App.css';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';




const theme = createTheme({
 
  typography: {
    fontFamily: [
      'Fredoka One', 
      "cursive"
    ].join(",")
  },

  body1:{
    fontFamily: ['Roboto','sans-serif'].join(),
  },
  palette: {
    primary: {
      main: "#1E90FF"
    }
  }
})

function App() {



  const [friendsList, setFriendsList] = useState([])
  const [usersPosts, setUsersPosts] = useState([])
  const [usersComments, setUsersComments] = useState([])
  const [usersPhotos, setUsersPhotos] = useState([])
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([])


  // addPost function sets the state of posts to return previous submitted posts and the latest post
  function addPost(newPost){
    setPosts(prevPosts =>{
     return [newPost, ...prevPosts ]
    })
    fetch("https://so-me-db.herokuapp.com/posts", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newPost)
    })
  }

// deletePost function sets the state of posts to return filtered items in the array where the id is not equal to index. 

  function deletePost(id){
      
    setPosts(prevPosts =>{
      return prevPosts.filter((postItem)=> {
        return postItem.id !== id;
      })
    })

    setUsersPosts(prevPosts =>{
      return prevPosts.filter((postItem)=> {
        return postItem.id !== id;
      })
    })

    fetch("https://so-me-db.herokuapp.com/posts"+id, {
      method: "DELETE",
    })
  
  }

  
  function addPhoto(newPhoto){
    setPhotos((prevItems)=>{
      return [...prevItems, newPhoto];
    });
    fetch("https://so-me-db.herokuapp.com/photos", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newPhoto)
    })
  }

   


  const fetchData = () =>{
    const usersAPI = "https://so-me-db.herokuapp.com/users"
    const postsAPI = "https://so-me-db.herokuapp.com/posts"
    const commentsAPI = "https://so-me-db.herokuapp.com/comments"
    const photosAPI = "https://so-me-db.herokuapp.com/photos"

    const getUsers = axios.get(usersAPI)
    const getPosts = axios.get(postsAPI);
    const getComments = axios.get(commentsAPI);
    const getPhotos = axios.get(photosAPI)

axios.all([getUsers, getPosts, getComments, getPhotos]).then(
  axios.spread((...allData)=>{
    const allDataUsers = allData[0];
    const allDataPosts= allData[1];
    const allDataComments= allData[2];
    const allDataPhotos = allData[3];


    

    setFriendsList(allDataUsers.data.reverse());
    setUsersPosts(allDataPosts.data.reverse());
    setUsersComments(allDataComments.data);
    setUsersPhotos(allDataPhotos.data.reverse());
    

  })
)
}


  useEffect(() => {
    fetchData()
  },[])

  


  return (<>
  <ThemeProvider theme={theme}>
   <Router>
    <Switch>
   
    <Route path="/so-me/" exact render={() => <LoginPage friendsList={friendsList} />}/>
    <Route path="/so-me/posts" exact render={() => <PostsPage usersPosts={usersPosts} posts={posts} usersComments={usersComments} setUsersPosts={setUsersPosts} setUsersComments={setUsersComments} addPost={addPost} deletePost={deletePost} />}/>
    <Route path="/so-me/friends" exact render={() => <Friends  friendsList={friendsList} />}/>
    <Route path="/so-me/photos" render={() => <Photos addPhoto={addPhoto} photos={photos} usersPhotos={usersPhotos}/>}/>
    <Route path="/so-me/posts/:postId"  render={() => <PostsPage usersPosts={usersPosts} posts={posts} usersComments={usersComments} setUsersPosts={setUsersPosts} setUsersComments={setUsersComments} addPost={addPost} deletePost={deletePost} />}/>
    <Route path="/so-me/friends/:username" render={() => <Wall friendsList={friendsList} usersPosts={usersPosts} usersPhotos={usersPhotos} usersComments={usersComments} setUsersPosts={setUsersPosts} setUsersComments={setUsersComments}  />}/>
    <Route path="/so-me/logout" render={() => <LogoutPage/>}/>
    </Switch>
    
    </Router> 
    </ThemeProvider>
  </>);
}

export default App;
