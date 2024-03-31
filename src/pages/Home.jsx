import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
function Home() {
  
  const [items, setItems] = useState([]);
  useEffect (() =>{
    fetch(`https://strapi-store-server.onrender.com/api/products`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) =>{
      setItems(data.data)
      console.log(data);
    })
  },[])

  return (
    <>
      <div className="main">
      <div className="container">
        <div className="app">
        <div className="card-wrapper flex gap-2 ">   
        {
          items && items.map((el, index) =>{
            return <Card key = {index} data = {el}></Card>
          })
        }
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Home;
