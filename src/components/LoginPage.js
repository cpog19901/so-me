import React, {useState} from "react";
import {Grid, Tabs, Tab, Box, Paper, Input, Button, Typography} from "@material-ui/core"
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import image from '../images/login-img.jpg'; // Import using relative path
import skulls from "../images/skulls.png"
import { useHistory} from "react-router-dom"






const useStyles = makeStyles((theme) =>{

    return {
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
        margin: "50px auto",  
        alignItems: "center", 
        marginTop:"25px",
        backgroundColor: "aliceblue",
        [theme.breakpoints.down("sm")]:{
           
        }     
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
    },

    logo:{
        fontFamily:"Fredoka One, Roboto"
    },
    error:{
        fontFamily: "Fredoka One"
    }

    }

})

const LoginPage = ({friendsList, getCurrentUser}) =>{

let history = useHistory();

const [creds, setCreds] = useState({
    username: "",
    password: "",
})

const [error, setError] = useState(false)


const handleCreds = (e) =>{
const {name, value} = e.target
setCreds (prevCreds =>{
    return {
        ...prevCreds,
        [name]: value
    }
})
}

const handleSubmit=(e)=>{

e.preventDefault();



friendsList.filter(friend => {
    if(friend.login.username === creds.username && friend.login.password === creds.password){
        localStorage.setItem("myuser", JSON.stringify(friend));
        history.push("/so-me/friends")
    } else{
        setError(true);
    }
})

}

const classes = useStyles();


    return(
        
      <>
        
        <Grid container>
        <Box clone order={{ xs: 2 , md: 1}}>

        <Grid item xs={12} md={6}>
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
        </Box>

        <Box clone order={{ xs: 1 , md: 2}}>
        <Grid item xs={12} md={6} className={classes.grid}>
        
         <Paper className={classes.loginPaper} >
         <Typography className={classes.logo} variant="h1">So-Me</Typography>
            <Typography className={classes.subtitle} variant="subtitle1">Connect with your friends without anything getting in your way!</Typography>
            {error ? <Typography className={classes.error}variant ="subtitle1">Incorrect username and/or password</Typography> : null}
            <form action="">
            <Input className={classes.input} fullWidth placeholder="Username" onChange={handleCreds} name="username" value={creds.username}/>
            <Input type="password" className={classes.input} fullWidth placeholder="Password" onChange={handleCreds} name="password" value ={creds.password}/>
           <Button type="submit" className={classes.btn} size="large" variant="contained" color="primary" onClick={handleSubmit}>Sign In</Button>
           </form>
       
         </Paper>
        </Grid>
      </Box>
       
      </Grid>
</>
      
   
    )
}

export default LoginPage;