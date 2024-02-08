import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Feed() {
  const [platform, setPlatform] = useState("View All");
  const navigator = useLocation();

  const path = navigator.pathname.split("/")[2];

  const [cat, setcat] = useState("");
  const [data, setdata] = useState(
    [
  //   {
  //     name: "Tekken 8",
  //     id: 34,
  //     platform: "Playstation",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15,
  //     platform: "Xbox",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 157,
  //     platform: "Xbox",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 1573,
  //     platform: "Nintendo",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "game",
  //   },
  ]
  );
  useEffect(()=>{
    const fetchdata = async ()=>{
      try{

        const res = await axios.get(`inventory-management-system-jade.vercel.app/api/products?cat=${path}`)
        setdata(res.data)
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchdata()
   
  },[path])
 
  // console.log(platform)
 
  const func = () => {
    var doc = document.getElementsByClassName("btns")[0];
    if (doc.style.display === "flex") doc.style.display = "none";
    else doc.style.display = "flex";
  };

  return (
    <div className="feed">
      <div className="container">
        <h1>{path.toUpperCase()}</h1>
        <div className="filter">
          <span>Filter</span>
          <div className="dropdown">
            <div className="display" onClick={func}>
              {platform}
            </div>
            <div className="btns">
              <button onClick={() => setPlatform("View All")}>View All</button>
              <button onClick={() => setPlatform("Playstation")}>
                Playstation
              </button>
              <button onClick={() => setPlatform("Xbox")}>Xbox</button>
              <button onClick={() => setPlatform("PC")}>PC</button>
              <button onClick={() => setPlatform("Nintendo")}>
                Nintendo Switch
              </button>
            </div>
          </div>
        </div>
        <div className="items">
          {data && data.map((item, id) => {
            if (platform === "View All" || platform.toLowerCase() === item.platform.toLowerCase())
              return (
                <div className="item_container" key={item.id}>
                  <div className="item_image">
                    {<img src={item.img} alt="" srcSet="" />}
                  </div>

                  <div className="info">
                    <div className="name">{item.name}</div>
                    <div className="stock">{item.platform}</div>

                    <div className="price">{item.price}$</div>
                  </div>
                  <Link to={`/item/${item.id}`} >
                    <button>View details</button>
                  </Link>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
export default Feed;
