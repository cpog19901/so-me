import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Typography, List, ListItem, Avatar} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';


const useStyles = makeStyles( theme => { 
    return {
    nav:{
    position: "fixed",
    height: "100vh",
    overflowX: "hidden",
    top: "0",
    left: "0",
    zIndex: "100",
    borderRight: "2px solid dodgerblue",
    padding: "0 10px",
    backgroundColor: "aliceblue",
    width: "225px",
    
    },

    navHeading:{
        marginTop: "50px",
        fontFamily: "Fredoka One"
    },

    navBtn:
    {
        border: "2px solid dodgerblue",
        borderRadius: "10px",
        padding: "15px",
        margin: "5px 10px 5px 5px",
        justifyContent: "space-between",
        "&:hover" : {
        backgroundColor: "dodgerblue",
        transition: "ease-in",
        transitionDuration: "150ms",
        color: "white",
        
       
        }
    },
     navIcon : {
      width: "25px",
      height: "25px",
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
        zIndex: "101",
        fontSize:"40px",
        color: "whitesmoke"
        
    },
    navImg:{
        margin: "auto"
    },

    navBtnText:{
        fontFamily: "Roboto",
        fontWeight: "600"
    }
    }
  })

const Nav = () => {

   const classes = useStyles();

 const currentUser = JSON.parse(localStorage.getItem("myuser"));

 
const [isMenuVisible, setMenuVisible] = useState(false)

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

        
<MenuTwoToneIcon className={classes.menuBtn} onClick={hideShowMenu} />
        <div style={{display: isMenuVisible ? "inline-block" : "none"}} className={classes.nav}>
       
        <Typography variant="h2" className={classes.navHeading} >So-Me</Typography>
        <Avatar className={classes.navImg} src={currentUser.picture.medium} alt=""/>
        <Typography variant="subtitle1">{currentUser.login.username}</Typography>
        
            <List className={classes.navBtnList}>
                
                  
              
            <Link to="/so-me/friends" style={{ textDecoration: 'none', color:"dodgerblue"}} >
            <ListItem className={classes.navBtn}> 
           <Typography className={classes.navBtnText}>Friends </Typography>  <i className="fas fa-user-friends"></i>
            </ListItem>
            </Link>
            <Link to="/so-me/posts" style={{ textDecoration: 'none', color:"dodgerblue" }}>   
            <ListItem className={classes.navBtn}>  
            <Typography className={classes.navBtnText}>Posts </Typography> <i className="far fa-newspaper"></i>
            </ListItem>
            </Link>
            <Link to ="/so-me/photos" style={{ textDecoration: 'none', color:"dodgerblue" }}>
            <ListItem className={classes.navBtn}>
          <Typography className={classes.navBtnText}> Photos </Typography> <i className="fas fa-images"></i>
            </ListItem>
            </Link>
           <Link to="/so-me/logout" style={{ textDecoration: 'none', color:"dodgerblue" }}>
           <ListItem className={classes.navBtn} style={{marginTop: "50vh" }}> 
           <Typography className={classes.navBtnText}> Logout </Typography> <i className="fas fa-sign-out-alt"></i>
           </ListItem>
           </Link>
            </List>
            </div>
            </div>
    )
}

export default Nav;