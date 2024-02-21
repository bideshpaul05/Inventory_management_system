import mongoose from "mongoose";
// {
//     "_id": {
//       "$oid": "65d556b075c01db515b3a971"
//     },
//     "id": 3,
//     "name": "p3",
//     "description": "d3",
//     "stock": 21,
//     "price": 100,
//     "cat": "accessories",
//     "platform": "nintendo",
//     "img": "https://i.imgur.com/49AmDZF.jpg"
//   }

const schema = mongoose.Schema;

const productSchema = new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    cat:{
        type:String,
        required:true
    },
    platform:{
        type:String,
        required:true
    },
    img:{
        type:String,

    }
    
    

    

})

const Product  = mongoose.model('products',productSchema)
export default Product