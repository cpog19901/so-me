import React, {useState} from "react";
import {Link} from "react-router-dom";
const Nav = () => {

const [isMenuVisible, setMenuVisible] = useState(true)

const hideShowMenu = () =>{

    if(isMenuVisible == true){
        setMenuVisible(false);
    }
    else if(isMenuVisible ==false){
        setMenuVisible(true);
    }
    
}


    return(
        <div>

        <img className="menu-icon" src="images/hamburger.svg" alt="" onClick={hideShowMenu} />

        <nav style={{display: isMenuVisible ? "inline-block" : "none"}}>
        
        <h1 className="nav-logo">So-Me</h1>
            <ul>
                
                  
              
            <Link to="/friends"><li> Friends <img className="link-icon" src="images/friends.svg" alt="" /></li></Link>
            <Link to="/posts"><li> Posts <img className="link-icon" src="images/social-media.svg" alt="" /></li></Link>
            <Link to ="/photos"><li> Photos <img className="link-icon" src="images/gallery.svg" alt="" /></li></Link>
                <li><a href="" id="logout-btn"> Logout <img className="link-icon" src="images/logout.svg" alt="" /></a></li>
            </ul>
            </nav>
            </div>
    )
}

export default Nav;