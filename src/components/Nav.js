import React, {useState} from "react";

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

        <img class="menu-icon" src="images/hamburger.svg" alt="" onClick={hideShowMenu} />

        <nav style={{display: isMenuVisible ? "inline-block" : "none"}}>
        
        <h1 class="nav-logo">So-Me</h1>
            <ul>
            
                <li><a href="/"> Friends <img class="link-icon" src="images/friends.svg" alt="" /></a></li>
                <li><a href="/posts"> Posts <img class="link-icon" src="images/social-media.svg" alt="" /></a></li>
                <li><a href=""> Photos <img class="link-icon" src="images/gallery.svg" alt="" /></a></li>
                <li><a href="" id="logout-btn"> Logout <img class="link-icon" src="images/logout.svg" alt="" /></a></li>
            </ul>
            </nav>
            </div>
    )
}

export default Nav;