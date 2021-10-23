import React, {useState} from 'react';
import {useParams, Link} from "react-router-dom"
import {Paper, Tabs, Tab, Box, Typography, Grid} from "@material-ui/core"
import PostsPage from "../components/PostsPage"
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';




const useStyles = makeStyles({
    
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
            width: "500px",
            margin:"auto",
          
         
        },
        img:{
            borderRadius: "25%"
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
            


            
            <Typography variant="h2">Wall</Typography>
            {    friendsList.filter(friend =>{
                if(friend.login.username === username)
                return friend;
            }).map((friendDetails, i)=>{
                const code = friendDetails.nat;
                const uri = "https://www.countryflags.io/";
                const uriEnd = "/flat/64.png";
                const fullUri = uri + code + uriEnd

            

                return(

                    
                    
                  
                    <Paper key={randomId} id={randomId} className={classes.paper}><Typography variant="h3">{friendDetails.name.first + " " + friendDetails.name.last} </Typography>
                    <Grid container>
                    <Grid item xs={6}>
                    <Box>
                    <Typography variant="h6">{friendDetails.login.username} </Typography>
                    <img className={classes.img} src={friendDetails.picture.large} alt="" />
                    </Box>
                    </Grid>
                   
                    <Grid item xs={6}>
                    <Typography>{friendDetails.location.state + ", " +friendDetails.location.country}</Typography>
                    <img  src={fullUri} alt="" />
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
                        { value ==="one" ? usersPosts.filter(userPost =>{
                            if(userPost.posterUsername === username){
                            return userPost;
                            }
                        }).map(userPost=>{
                            return(
                               <Link key={userPost.id} id={userPost.id} to={`/so-me/posts/${userPost.id}`} style={{textDecoration:"none"}}> <Typography  variant="h6" >{userPost.title}</Typography></Link>
                            )
                        }) : null}

                        { value ==="two" ? usersPhotos.filter((userPhoto)=>{
                            console.log(userPhoto.photoUploader);
                            if(userPhoto.photoUploader === username){
                                return userPhoto;
                            }
                        }).map(userPhoto=>{
                            return(
                                <Box style={{display: "flex"}}>
                                
                               <img style={{width: "100%"}} src={userPhoto.imageURL} alt="" />
                              
                               </Box>
                            )
                        }) : null}

                        
                    
                  
                    </Box>
                   </Paper>

            

                )
            })}
            
        </div>
    );
};

export default Wall;