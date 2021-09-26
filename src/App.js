import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Photos from "./components/Photos"
import PostsPage from "./components/PostsPage";
import LoginPage from "./components/LoginPage";
import Friends from "./components/Friends"
import Wall from "./components/Wall";
import Nav from "./components/Nav"
import './App.css';
import axios from 'axios';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';




const theme = createTheme({
 
  typography: {
    fontFamily: [
      'Fredoka One', 
      "cursive"
    ].join(",")
  },

  body1:{
    fontFamily: ['Roboto','sans-serif'].join(),
  }
})

function App() {



  const [friendsList, setFriendsList] = useState([])
  const [photoGallery, setPhotoGallery] = useState([])

  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=50")
    .then(response => { 
      setFriendsList(response.data.results);
      
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])


//   const fetchData = () =>{
//     const usersAPI = "https://randomuser.me/api/?results=50"
//     const imagesAPI = "https://picsum.photos/v2/list?limit=10"

//     const getUser = axios.get(usersAPI)
//     const getImage = axios.get(imagesAPI);

// axios.all([getUser, getImage]).then(
//   axios.spread((...allData)=>{
//     const allDataUser = allData[0]
//     const allDataImage = allData[1]

//     setFriendsList(allDataUser.data.results);
//     setPhotoGallery(allDataImage.data)
    

//   })
// )
// }


  // useEffect(() => {
  //   fetchData()
  // },[])


  return (<>
  <ThemeProvider theme={theme}>
   <Router>
   <Nav/>
    <Switch>
    <Route path="/" exact render={() => <LoginPage  />}/>
    <Route path="/posts" render={() => <PostsPage  />}/>
    <Route path="/friends" exact render={() => <Friends  friendsList={friendsList} />}/>
    <Route path="/photos" render={() => <Photos photoGallery={photoGallery} />}/>
    <Route path="/friends/:username" render={() => <Wall  friendsList={friendsList} />}/>
    </Switch>
    
    </Router> 
    </ThemeProvider>
  </>);
}

export default App;
