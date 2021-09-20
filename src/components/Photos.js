import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios"
import { Image } from "cloudinary-react"; 

const Photos = ({photoGallery}) => {

const useStyles = makeStyles({
input:{
  
  margin: "auto"
}

})

const classes= useStyles();

const [imageSelected, setImageSelected] = useState("");
const [imageURLs, setImageURLs]= useState([]);



// const addURL = (newURL) =>{
//     setImageURLs( prevURLs =>{
//       return [...prevURLs, newURL];
//     } )
// }

const uploadImage = () =>{
  const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "iq5xsc7g")

    Axios.post("https://api.cloudinary.com/v1_1/dly13wqwx/image/upload", formData).then((response)=>{
      console.log(response.data);
    });

};



    return (
        <div>
            <h1>Photos</h1>
            <Image 
              style={{width:200}}
              cloudName = "dly13wqwx"
              publicId= "https://res.cloudinary.com/dly13wqwx/image/upload/v1631720471/c1pcqkdk327ljcqamnii.jpg"
            />

            
      
    <input className={classes.input} type="file" onChange={((event)=>{
  setImageSelected(event.target.files[0]);
})} />

<button type="submit" onClick={uploadImage}>Upload image</button>

  
        </div>
    );
};

export default Photos;