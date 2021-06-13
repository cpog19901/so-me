import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav"
import PostsPage from "./components/PostsPage";
import LoginPage from "./components/LoginPage";
import './App.css';


function App() {




  return (<>
   <Router>
  
    {/* <Nav /> */}
    <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/posts" component={PostsPage}/>
    </Switch>
    
    </Router> 
  </>);
}

export default App;
