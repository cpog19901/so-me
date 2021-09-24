import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Typography, List, ListItem, ListItemText, ListItemAvatar} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';


const useStyles = makeStyles({
    nav:{
    position: "fixed",
    height: "100vh",
    overflowX: "hidden",
    top: "0",
    left: "0",
    zIndex: "1",
    borderRight: "2px solid dodgerblue",
    padding: "0 10px",
    backgroundColor: "aliceblue",
    width: "225px",
    },

    navHeading:{
        marginTop: "50px"
    },

    navBtn:
    {
        border: "2px solid dodgerblue",
        borderRadius: "10px",
        padding: "15px",
        margin: "5px 10px 5px 5px",
        "&:hover" : {
        backgroundColor: "dodgerblue",
        transition: "ease-in",
        transitionDuration: "150ms",
        color: "white",
       
        }
    },
     navIcon : {
      width: "25px",
      position: "absolute",
      marginRight: "5px",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "white",
      borderRadius: "50%",
      padding: "5px"
    },

    navBtnList:{
        paddingRight: "10px"
    },

    logoutBtn:{
        marginTop: "50vh"
    },
    menuBtn:{
        textAlign:"left",
        cursor: "pointer",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
        fontSize:"40px"
    }
  })

const Nav = () => {

   const classes = useStyles();

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

        
<MenuTwoToneIcon className={classes.menuBtn} onClick={hideShowMenu}/>
        <div style={{display: isMenuVisible ? "inline-block" : "none"}} className={classes.nav}>
       
        <Typography variant="h2" className={classes.navHeading} >So-Me</Typography>
            <List className={classes.navBtnList}>
                
                  
              
            <Link to="/friends" style={{ textDecoration: 'none', color:"dodgerblue"}} >
            <ListItem className={classes.navBtn}> 
           <Typography>Friends <img className="link-icon" src="images/friends.svg" alt="" className={classes.navIcon}/></Typography>  
            </ListItem>
            </Link>
            <Link to="/posts" style={{ textDecoration: 'none', color:"dodgerblue" }}>   
            <ListItem className={classes.navBtn}>  
            <Typography>Posts <img className="link-icon" src="images/social-media.svg" alt="" className={classes.navIcon}/></Typography> 
            </ListItem>
            </Link>
            <Link to ="/photos" style={{ textDecoration: 'none', color:"dodgerblue" }}>
            <ListItem className={classes.navBtn}>
          <Typography> Photos <img className="link-icon" src="images/gallery.svg" alt="" className={classes.navIcon} /></Typography> 
            </ListItem>
            </Link>
           <Link to="/logout" style={{ textDecoration: 'none', color:"dodgerblue" }}>
           <ListItem className={classes.navBtn} style={{marginTop: "50vh" }}> 
           <Typography> Logout <img className="link-icon" src="images/logout.svg" alt="" className={classes.navIcon}/></Typography>
           </ListItem>
           </Link>
            </List>
            </div>
            </div>
    )
}

export default Nav;