import React, { useState }from 'react';
import { Typography, Button, Box, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import skulls from "../images/skulls.png"



const useStyles = makeStyles({
    btn: {
        fontSize : 15,
        backgroundColor: "violet",
        borderRadius: 20,
        padding: 10,
        color: "white",
        margin: 25
    },
    box: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        maxWidth:200,
        margin: "auto",
        paddingTop: 25,
        height: "100%",
    },
    profilePic:{
        borderRadius: 20,
    },
    grid:{
        padding: 50
    },
    name:{
        padding: 10
    },
    email:{
        overflowWrap: "break-word",
        padding: 10,
        fontFamily: ['Roboto','sans-serif'].join(),
    },
    bg:{
        backgroundImage: `url(${skulls})`,
        backgroundRepeat: "repeat",
        backgroundColor: "aliceblue"
    }
})



const Friends = ({friendsList}) => {

  const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState("")
    const handleClick = () =>{
        
    }



   const handleSearch = (e) =>{
        const searchTerm = e.target.value;
    
            setSearchQuery(searchTerm);     
   }  

 

    return (
        <div className={classes.bg}>
        <Typography variant="h2">Friends</Typography>
        <TextField onChange={handleSearch} placeholder="Search for a friend"/>
 <Grid container spacing={3} alignItems="center" className={classes.grid} >
    


        {friendsList.filter(val =>{
            if(searchQuery==""){
                return val;
            } else if(val.name.first.toLowerCase().includes(searchQuery.toLowerCase())){
                return val;
            }
        }).map((friend, i)=>{
            return(
                <Grid  key={i} id={i}  item xs={6}  md={6} lg={4}>     
                <Link style={{ textDecoration: 'none' }} to={`/friends/${friend.login.username}`}>  
                <Paper className={classes.box}>
                <img className={classes.profilePic} src={friend.picture.large} alt="" />
               <Typography className={classes.name} variant="h4" component="h4"> {friend.name.first + " " + friend.name.last}</Typography>
               <Typography variant="body1" className={classes.email}>{friend.email}</Typography>
                </Paper>
                </Link>
                </Grid>
               
               
            )
        })}
           
        </Grid>
        <Button className ={classes.btn} onClick={handleClick}>Load more...</Button>
           
        </div>
    );
};

export default Friends;


