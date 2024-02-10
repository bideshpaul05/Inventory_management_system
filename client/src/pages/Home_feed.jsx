import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import accesories from '../images/accessories.jpg'
// import gamebox from '../images/gameboxes.jpg'
// import xbox from '../images/xbox.jpg'

function Home_feed() {
  const url = "https://inventory-management-system-bidesh.onrender.com/api"
  const [cat, setcat] = useState("all");
  const [data, setdata] = useState(
    [
  //   {
  //     name: "Tekken 8",
  //     id: 15734,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15730,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 15,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15739,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "console",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15738,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "accessories",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15737,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 15,
  //     cat: "game",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15736,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "console",
  //   },
  //   {
  //     name: "Tekken 8",
  //     id: 15735,
  //     firstReleaseDate: "2024-01-25T00:00:00.000Z",
  //     tier: "Mighty",
  //     images: "https://i.imgur.com/49AmDZF.jpg",
  //     price: 90,
  //     stock: 5,
  //     cat: "accessories",
  //   },
  ]
  );

  
  useEffect(()=>{
    const fetchdata = async()=>{
      try{

        const res = await axios.get(`${url}/products/`);
        // console.log(res)
        setdata(res.data)
      }
      catch(err)
      {
        console.log(err)
      }
    }
    fetchdata()

  },[])
  // console.log(data.data)
  return (
    <div className="feed">
      <div className="container">
        <div className="categories">
          <div className="cat game">
            <Link to="/shop/game">
              <button>Games</button>
            </Link>
          </div>
          <div className="cat console">
            <Link to="/shop/console">
              <button>consoles</button>
            </Link>
          </div>
          <div className="cat acc">
            <Link to="/shop/accessories">
              <button>Accessories</button>
            </Link>
          </div>
        </div>
        <div className="trending">
          <h1>New Arrivals</h1>
          <div className="selectors">
            <div className="selector" onClick={() => setcat("all")}>
              All
            </div>
            <div className="selector" onClick={() => setcat("game")}>
              Games
            </div>
            <div className="selector" onClick={() => setcat("console")}>
              Consoles
            </div>
            <div className="selector" onClick={() => setcat("accessories")}>
              Accesories
            </div>
          </div>
          <div className="content">
            {data && data.map((item, id) => {
              console.log(item.cat)
              if (cat === "all" || cat === item.cat)
                return (
                  <div className="item_container" key={item.id}>
                    <div className="item_image">
                      {<img src={item.img} alt="" srcSet="" />}
                    </div>

                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="stock">{item.stock} stocks left</div>
                      <div className="price">{item.price}$</div>
                    </div>
                    <Link to={`/item/${item.id}`} > 
                    {/* state={item} */}
                      <button>View details</button>
                    </Link>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_feed;
