import React from 'react';
import {Paper, Box, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    logoutBox:{
        width: "400px",
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "25px"
    },

})

const LogoutPage = () => {

    localStorage.clear();

    var timer = setTimeout(function() {
        window.location='http://localhost:3000/'
    }, 3000);

const classes = useStyles();
    return (
        <div>
            <Paper className={classes.logoutBox} elevation={12}>
            <Typography variant="h1">So-Me</Typography>
            <Box sx={{ border: "3px dodgerblue solid", p:2, borderRadius: "10px" }}>
                <Typography variant="h5">You are now logged out</Typography>
                <Typography variant="h6">Redirecting....</Typography>
            </Box>
            </Paper>
        </div>
    );
};

export default LogoutPage;