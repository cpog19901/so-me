import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios"
import { Image } from "cloudinary-react"; 
import Nav from "../components/Nav"
import {Typography, ImageList, ImageListItem, Box, Button, Card} from "@material-ui/core"
import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles(theme => {

  return{
  input:{
    
    margin: "10px auto",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto, cursive",
    display:"block"
  },

  photosTitle:{
   fontFamily: "Fredoka One",
   backgroundColor: "aliceblue",
   padding: "20px 0"
  },

  photosContainer:{
    padding: "4%",
    width: "500px",
    margin: "auto",
    [theme.breakpoints.down("sm")]:{
      width: "90%",
      padding: "0"
    },
    backgroundColor: "white"
  },

  uploadBtn:{
    margin: "10px"
  }
}
  })


const Photos = ({addPhoto, photos, usersPhotos}) => {

  const currentUser = JSON.parse(localStorage.getItem("myuser"));

const classes= useStyles();

const [imageSelected, setImageSelected] = useState("");
const [imageURLs, setImageURLs]= useState([]);
const [photo, setPhoto] = useState("");
const [itemData, setItemData] = useState("")



// const addURL = (newURL) =>{
//     setImageURLs( prevURLs =>{
//       return [...prevURLs, newURL];
//     } )
// }

const uploadImage = (e) =>{
  const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "iq5xsc7g")

    Axios.post("https://api.cloudinary.com/v1_1/dly13wqwx/image/upload", formData).then((response)=>{
      console.log(response.data)
      const photoURL = response.data.secure_url;
      const photoId = response.data.asset_id;
      const newPhoto = {
          imageId: photoId,
          imageURL: photoURL,
          photoUploader: currentUser.login.username
        };
      
     
      addPhoto(newPhoto);
    });
};





    return (
        <div>
        <Nav/>
        <Box className={classes.photosContainer}>
        <img style={{width: "100%"}}src="images/photos.png" alt="" />
            <Typography className={classes.photosTitle} variant="h4">Photos</Typography>
              
            
        
            
            <Typography  variant="body1">Image name: {imageSelected.name}</Typography>
    <input style={{display: "none"}} id="contained-button-file" className={classes.input} type="file" onChange={((event)=>{
  setImageSelected(event.target.files[0]);
})} />

<label htmlFor="contained-button-file"> 
   <Button variant="contained" component="span"> 
     Choose File
   </Button> 
 </label> 

<Button className={classes.uploadBtn} variant="contained" color="primary" type="submit" onClick={uploadImage}>Upload image</Button>

<Box sx={{ width: "100%", height: 900, overflowY: 'scroll', margin:"auto" }}>
<SRLWrapper>
      <ImageList variant="masonry" cols={2} gap={10}>
        {photos.map((item) => (
          <ImageListItem key={item.imageId} id={item.imageId}>
          
          <a href={item.ImageURL}>
            <img
              src={`${item.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.original_filename}
              loading="lazy"
              style={{width: "100%"}}
            />
            </a>
            
          </ImageListItem>
        ))};

        {usersPhotos.filter((userPhoto)=>{
          if(userPhoto.photoUploader === currentUser.login.username)
          return userPhoto;
        
        }).map((item) => (
          <ImageListItem key={item.imageId} id={item.imageId}>
        
          <a href={item.ImageURL}>
            <img
              src={`${item.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
             </a>
            
          </ImageListItem>
        ))}
      </ImageList>
      </SRLWrapper>
    </Box>
</Box>
  
        </div>
    );
};

export default Photos;