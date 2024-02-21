import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import axios from'axios'

function Single() {
  // const item = useLocation().state;
  const url = "https://inventory-management-system-bidesh.onrender.com/api"
  const itemId = useLocation().pathname.split('/')[2]
  console.log(itemId)
  const [load,setload] = useState(true)
  const [item, setItem] = useState({}

  //   //   {
  //     //   name: "Tekken 8",
  //     //   id: 34,
  //     //   platform: "Playstation",
  //     //   desc: " Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt, based on video game designer Mike Pondsmith's tabletop game series. Set in a dystopian cyberpunk universe, the player assumes the role of V (played by Gavin Drea/Cherami Leigh), a mercenary in the fictional Californian city known as Night City, where they deal with the fallout from a heist gone wrong that results in an experimental cybernetic bio-chip containing an engram of the legendary rock star and terrorist Johnny Silverhand (played by Keanu Reeves) threatening to slowly overwrite V's mind; as the story progresses V and Johnny must work together to find a way to be separated and save V's life.  ",
  //     //   images: "https://i.imgur.com/49AmDZF.jpg",
  //     //   price: 90,
  //     //   stock: 5,
  //     //   cat: "game",
  //     // }
      );
  // setItem(state)
  useEffect(()=>{
    const fetch = async()=>{
      try{
        const res = await axios.get(`${url}/products/${itemId}`)
        // console.log(res.data[0])

        
       
        setItem(res.data)
        setload(false)
      }
      catch(err)
      {
        console.log(err)
      }
    }
    fetch()
  },[itemId])
  console.log( item)
  const nav = useNavigate();
  const upper = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const func = ()=>{
    var doc  = document.getElementsByClassName('description')[0]
  
    if(document.getElementsByClassName('read_more')[0].innerText ===  "Read More")
    {

     
      // doc.style.maxHeight = "auto"
      doc.style.height = "auto"
      document.getElementsByClassName("read_more")[0].innerText =  "Read Less"
    }
    else{
    
      
      doc.style.height = "120px"
      document.getElementsByClassName("read_more")[0].innerText = "Read More"
    }
  }
  const handleclick = async (id)=>{
    try{
      await axios.delete(`${url}/products/delete/${id}`)
      nav("/")
    }
    catch(err) {
      console.log(err)
    }
  }
   if(!load)
   {

    return (
    <div className="single">
      <div className="container">
        <div className="image">
          <img src={item.img} alt="" srcset="" />
        </div>
        <div className="details">
          <div className="header">
            <span className="cat">
              {upper(item.cat)}
              {/* {} */}
            </span>
            <h1>{item.name}</h1>
            <span className="platform">
              {item.cat === "console" ? "by " : "for " }
              {
              upper(item.platform)
              
              }
            </span>
          </div>
          <div className="price">${item.price}</div>
          <div className="desc">
            <div className="description" style={item.description.length <= 100 ?{height: "auto"}:{height:"120px"}}>

            {item.description}
          
            </div>
         { item.description.length > 100 ? <button className="read_more" onClick={func}>Read More</button> : <span></span>}
          </div>
          <div className="stock">
            <b>In Stock:</b>
            <div>{item.stock} left</div>
          </div>

          <div className="buttons">
            <Link to= {`/write/${item.cat}/${item._id}`} state = {item} >
              <button id="update">Update</button>
            </Link>
            <Link>
              <button id="delete" onClick={(e)=>handleclick(item._id)}>Delete</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
            }
  else{

    return (
      <div className="loading">
      loading
    </div>
  )
} 
}

export default Single;
