import React from "react";
import {Grid, Tabs, Tab, Box, Paper, Input, Button, Typography} from "@material-ui/core"
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import image from '../images/login-img.jpg'; // Import using relative path
import skulls from "../images/skulls.png"
import {Link} from "react-router-dom"






const useStyles = makeStyles({
    image1:{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'bottom', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: "100%",
        position: "relative",
        opacity: "0.8"
       
        
    },

    input:{
        borderRadius:"10px",
        fontSize: "25px",
        padding: "20px"
    },

    loginPaper:{
        padding: "25px",
        maxWidth: "350px",
        margin: "auto",  
        alignItems: "center", 
        marginTop:"25px",
        backgroundColor: "aliceblue"     
    },

    btn:{
        fontSize: "20px",
        margin: "25px",
        backgroundColor: "dodgerblue"
    },

    subtitle:{
        fontFamily: ['Roboto','sans-serif'].join(),
        fontSize: "20px",
        margin: "25px"
    },

    grid:{
        alignSelf:"center"
    },

    overlay:{
        position: "absolute",
        top: "0",
        left: "0",
        backgroundImage: `url(${skulls})`,
        width: "100%",
        height: "100%",
        zIndex: "20",
        backgroundRepeat: 'repeat',
        backgroundColor: "#008c8c",
        mixBlendMode: "color-burn"
    },

    imgText:{
        color: "white",
        fontSize: "40px",      
        padding: "20px",
        backgroundColor: "dodgerblue",
        borderRadius: "10px",
        maxWidth: "300px",
       
    },

    imgTextMiddle:{
        fontSize: "40px", 
        color: "white",
        maxWidth: "500px",
        fontFamily:[
            "Roboto",
            "sans-serif"
        ].join(","),
       marginTop: "25px"
    },

    imgTextLower:{
        fontSize: "40px", 
        color: "white",
        bottom: "5%",
        maxWidth: "500px",
        margin:"auto",
        fontFamily:[
            "Pacifico",
            "sans-serif"
        ].join(","),
        borderRadius: "10px",
        width: "100%"
       
    },

    sloganContainer:{
        position: "absolute",
        top: "5%",
        zIndex: "30",
        width:"100%",
       margin: "auto"
    }



})

const LoginPage = () =>{

const classes = useStyles();


    return(
        
      

        <Grid container >
        <Grid item xs={12} sm={6}>
      <div id="image-holder" className={classes.image1}>
        <div id="overlay" className={classes.overlay}>
            
        </div>
        <div id="slogan" className={classes.sloganContainer}>
        <Typography className={classes.imgText}>Social media</Typography>
        <Typography className={classes.imgTextMiddle}>...that's free from ads</Typography>
        <Typography className={classes.imgTextLower}>and much more personal!</Typography>
        </div>
      </div>
       
      
    
        
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
        
         <Paper className={classes.loginPaper} >
         <Typography variant="h1">So-Me</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">Connect with your friends without anything getting in your way!</Typography>
            <Input className={classes.input} fullWidth placeholder="Username"/>
            <Input type="password" className={classes.input} fullWidth placeholder="Password"/>
           <Link to="/posts" style={{ textDecoration: 'none' }}><Button className={classes.btn} size="large" variant="contained" color="primary">Sign In</Button></Link>
         </Paper>
        </Grid>
      
       
      </Grid>
   
    )
}

export default LoginPage;