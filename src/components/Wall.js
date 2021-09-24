import React, {useState} from 'react';
import {useParams} from "react-router-dom"
import {Paper, Tabs, Tab, Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';




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
            width: "75%",
            margin:"auto",
            borderRight: "2px solid dodgerblue",
            borderLeft: "2px solid dodgerblue",
         
        },
        img:{
            borderRadius: "50%"
        }


    
});

const Wall = ({friendsList}) => {

let {username} = useParams();


const classes = useStyles();


const [value, setValue] = useState('one');

const handleChange = (event, newValue) => {
  setValue(newValue);

};


    return (
        <div>
            <h1>Wall</h1>
            {    friendsList.filter(friend =>{
                if(friend.login.username === username)
                return friend;
            }).map((friendDetails, i)=>{
                const code = friendDetails.nat;
                const uri = "https://www.countryflags.io/";
                const uriEnd = "/flat/64.png";
                const fullUri = uri + code + uriEnd

            

                return(
                    
                    <Paper key={i} id={i} className={classes.paper}><h2 >{friendDetails.login.username}</h2>
                    <img className={classes.img} src={friendDetails.picture.large} alt="" />
                    <h2>{friendDetails.location.state + ", " +friendDetails.location.country}</h2>
                    <img  src={fullUri} alt="" />
                    <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="profile-tabs"
                        className={classes.tabs}
                        
                    >
                        <Tab className={classes.tab} value="one" label="Posts" />
                        <Tab className={classes.tab} value="two" label="Photos" />
                        <Tab className={classes.tab} value="three" label="Friends" />
                    </Tabs>
                    </Box>
                   </Paper>

                 
                

                )
            })}
            
        </div>
    );
};

export default Wall;