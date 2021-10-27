import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom"
import {Paper, Tabs, Tab, Box, Typography, Grid, Button} from "@material-ui/core"
import PostsPage from "../components/PostsPage"
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import Nav from "../components/Nav";




const useStyles = makeStyles(theme => {
    return{
        tabs:{
            backgroundColor: "white",
            color: "green",
            margin: "auto",
            
        },
        tab:{
            margin:"auto",
            fontSize: "15px",
            fontWeight: "bold"
        },
        paper:{
            
            margin:"auto",
            [theme.breakpoints.up("sm")]:{
                width: "500px"
            }
          
         
        },
        img:{
            borderRadius: "25%",
            width: "50px"
        },
        postLink:{
            color:"white",
            padding: "15px",
            textAlign:"left",
            borderRadius: "10px",
            margin: "10px",        
            
            background: "linear-gradient(to right, #1488cc, #2b32b2)" ,
            textAlign:"center"
        },
        tabWindow:{
            display: "flex",
            flexDirection: "column",
            margin: "25px 0"
        },
        friendListItem:{
            display: "flex",
             alignItems:"center",
             margin: "10px",
            justifyContent: "space-between",
            flexDirection: "column"
        },
        wallUsername:{
            padding: "50px 5px",
            color:"dodgerblue"
        },
        infoContainer:{
            flexDirection: "column",
            alignItems: "center",
            background: "linear-gradient(to right, #1488cc, #2b32b2)" ,
            color: "white",
            padding: "50px 0",
            [theme.breakpoints.up("sm")]:{
                flexDirection: "row"
            }

        },
        friendContainer:{
            justifyContent:"center"
        },
        flag:{
            width: "30%",
            margin: "20px 0"
        }

    }
    
});

const Wall = ({friendsList, usersPosts, usersPhotos, usersComments, setUsersPosts, setUsersComments}) => {


   

let {username} = useParams();

console.log(username);
const randomId =uuidv4()

const classes = useStyles();


const [value, setValue] = useState('one');
const [wallOwner, setWallOwner] = useState(username) 

const handleChange = (event, newValue) => {
  setValue(newValue);

};


    return (
        <div>
            <Nav/>


            
            
            {    friendsList.filter(friend =>{
                if(friend.login.username === username)
                return friend;
            }).map((friendDetails, i)=>{
                const code = friendDetails.nat;
                const uri = "https://flagcdn.com/";
                const uriEnd = ".svg";
                const fullUri = uri + code.toLowerCase() + uriEnd

            

                return(

                    
                    
                  
                    <Paper key={randomId} id={randomId} className={classes.paper}>
                    <Typography className={classes.wallUsername}  variant="h6">{friendDetails.name.first + " " + friendDetails.name.last} </Typography>
                    <Grid className={classes.infoContainer} container>
                    <Grid item xs={6}>
                    
                    <Box>
                    <Typography variant="h6">{friendDetails.login.username} </Typography>
                    <img className={classes.img} src={friendDetails.picture.large} alt="" />
                    </Box>
                    </Grid>
                   
                    <Grid item xs={6}>
                    <Typography>{friendDetails.location.state + ", " +friendDetails.location.country}</Typography>
                    <img className={classes.flag} src={fullUri} alt="" />
                    </Grid>
                    </Grid>
                    <Box sx={{ width: '100%' }}>
                  
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="profile-tabs"
                        className={classes.tabs}
                        
                    >
                        <Tab className={classes.tab} value="one" label="Posts"/>

                       
                        <Tab className={classes.tab} value="two" label="Photos" />
                       
                        <Tab className={classes.tab} value="three" label="Friends" />
                      
                    </Tabs>
                    <Grid container className={classes.tabWindow}>
                        { value ==="one" ? usersPosts.filter(userPost =>{
                            if(userPost.posterUsername === username){
                            return userPost;
                            }
                        }).map(userPost=>{
                            return(
                               <Link key={userPost.id} id={userPost.id} to={`/so-me/posts/${userPost.id}`} style={{textDecoration:"none"}}> <Typography className={classes.postLink} variant="h6" >{userPost.title}</Typography></Link>
                            )
                        }) : null}
                    </Grid>
                    <Grid container>
                        { value ==="two" ? usersPhotos.filter((userPhoto)=>{
                            console.log(userPhoto.photoUploader);
                            if(userPhoto.photoUploader === username){
                                return userPhoto;
                            }
                        }).map(userPhoto=>{
                            return(
                                
                                
                                <Grid item >
                                <Box>
                               <img style={{width: "100%"}} src={userPhoto.imageURL} alt="" />
                               </Box>
                               </Grid>
                            
                            )
                        }) : null}
                    </Grid>
                    <Grid container className={classes.friendContainer}>
                        { value ==="three" ? friendsList.filter((friend) =>{
                            if(friend.login.username != username){
                                return friend;
                            }
                            })                          
                            .map((friend) =>{
                                return(
                                    <Grid item >
                                    <Link style={{textDecoration: "none"}} to={`/so-me/friends/${friend.login.username}`}>
                                    <Paper className={classes.friendListItem} elevation={12} style={{}}>
                                    <Typography style={{margin: "10px"}} variant="body1">{friend.login.username}</Typography>
                                    <img style={{borderRadius: "10px"}} src={friend.picture.medium} alt="" />
                                    <Button style={{margin: "10px"}} variant="contained" color="primary">Friends<i class="fas fa-check-circle"></i></Button>
                                    </Paper>
                                    </Link>
                                    </Grid>
                                )
                            }) :null
                        

                        }

                
                    </Grid>
                  
                    </Box>
                   </Paper>

            

                )
            })}
            
        </div>
    );
};

export default Wall;