import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Add() {
  const location = useLocation()
  const state = useLocation().state;
  const [name,setname] = useState(state?.name || "")
  const [platform,setplatform] = useState(state?.platform || "")
  const [Cat,setcat] = useState(state?.cat || "")
  const [description,setdesc] = useState(state?.description || "")
  const [stock,setstock] = useState(state?.stock || "")
  const [price,setprice] = useState(state?.price || "")
  const [image,setimage] = useState(null)
  // const [img,setimg] = useState(state?.img || "")
  // console.log(img)

  const nav = useNavigate()

  const cat = location.pathname.split('/')[2]
 
  const upload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("file", image);
      const res = await axios.post("inventory-management-system-jade.vercel.app/upload", formdata);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

//  console.log( + platform + Cat + desc + stock + price + image.name)
const handleclick = async (e) => {
  e.preventDefault();
  const imgurl = await upload();
  // console.log(imgurl)
  try {
    state? await axios.put(`inventory-management-system-jade.vercel.app/api/products/${state.id}`,{
      name,description,cat:Cat,price,stock,platform,img:imgurl?imgurl:state.img
    }):await axios.post(`inventory-management-system-jade.vercel.app/api/products/add`,{
      // title,desc:value,cat,img:img? imgurl:"", 
      name,description,cat:Cat,price,stock,platform,img:imgurl?imgurl:"https://res.cloudinary.com/dthfl5y7j/image/upload/v1707305949/samples/ecommerce/leather-bag-gray.jpg"
      // date: "moment"
    })
    // console.log('sucs')
    nav("/")
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className='write'>
      <div className="container">

      <h1>Create {cat}</h1>
        <div className='form'>
          <div className="hero">

          <input type="text" name="title" id="" placeholder='Title' value={name} onChange={e=>setname(e.target.value)} required />
          {cat==="console"?"by":"for"} <select name="Platform" id="" required>
            <option value="playstation" onClick={e=>setplatform(e.target.value)} >Playstation</option>
            <option value="nintendo" onClick={e=>setplatform(e.target.value)} >nintendo</option>
            <option value="xbox" onClick={e=>setplatform(e.target.value)} >xbox</option>
            <option value="pc" onClick={e=>setplatform(e.target.value)} >pc</option>
          </select>
          </div>
          <div>
            <span style={{"margin":"0px 10px 0px 0px"}}>Category:</span>
          <select name="Category" id=""  value={Cat} required >
            <option value="game" onClick={e=>setcat(e.target.value)}>Game</option>
            <option value="console" onClick={e=>setcat(e.target.value)}>Console</option>
            <option value="accessories" onClick={e=>setcat(e.target.value)}>Accessories</option>
            {/* <option value="pc">pc</option> */}
          </select>
          </div>
          <div>
            
          <input type="text" name="price" id="" placeholder='Price' value={price} onChange={e=>setprice(e.target.value)} required />  $
          <div>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setimage(e.target.files[0])}
            />
          <label className="file" htmlFor="file" style={{margin:"15px 0px"}}>
            { image?.name ||  "Upload Image"}
          </label>
            </div>
          </div>
        

         <textarea name="" id="" cols="30" rows="10" placeholder='Description about the product' style={{resize:"none"}} value={description} onChange={e=>setdesc(e.target.value)} required></textarea>
         <div>
          {/* <span>Stocks:</span> */}
          <input type="text" name="Stock" id="" placeholder='Number of stocks' required  value={stock} onChange={e=> setstock(e.target.value)} />
         </div>
          <div className="buttons">
            <button id="update" onClick={handleclick}>Submit</button>
            <button id="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add