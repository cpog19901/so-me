import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios"
import { Image } from "cloudinary-react"; 
import Nav from "../components/Nav"
import {Typography, ImageList, ImageListItem, Box, Button, Card} from "@material-ui/core"


const useStyles = makeStyles({
  input:{
    
    margin: "auto",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "Roboto, cursive"
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
      
      const photoURL = response.data.url;
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
            <Typography variant="h2">Photos</Typography>
        

        
            
      
    <input className={classes.input} type="file" onChange={((event)=>{
  setImageSelected(event.target.files[0]);
})} />

<Button variant="contained" color="primary" type="submit" onClick={uploadImage}>Upload image</Button>

<Box sx={{ width: 800, height: 900, overflowY: 'scroll', margin:"auto" }}>

      <ImageList variant="masonry" cols={3} gap={10}>
        {photos.map((item) => (
          <ImageListItem key={item.imageId} id={item.imageId}>
            <img
              src={`${item.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))};

        {usersPhotos.filter((userPhoto)=>{
          if(userPhoto.photoUploader === currentUser.login.username)
          return userPhoto;
        
        }).map((item) => (
          <ImageListItem key={item.imageId} id={item.imageId}>
            <img
              src={`${item.imageURL}?w=248&fit=crop&auto=format`}
              srcSet={`${item.ImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
     
    </Box>

  
        </div>
    );
};

export default Photos;