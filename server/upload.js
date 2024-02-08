import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dthfl5y7j', 
  api_key: '638778637651254', 
  api_secret: 'kjZflJJ44kwyTeZ8HNigzT8FeJU' 
});

  
const uploadImage = (img)=>{
    cloudinary.uploader.upload(img,
 
  function(error, result) {return result });
}
export default uploadImage