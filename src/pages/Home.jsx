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
      // console.log(data);
    })
    .catch((err) =>{
      console.log(err);
    })
    },[])

  return (
    <>
      <div className="main">
      <div className="container">
        <div className="app">
        <div className="heade w-[100%]  mb-10 mx-auto">
          <h1 className="text-center text-4xl font-bold">Welcome to Our site</h1>
          </div> 
        <div className="card-wrapper flex gap-2 flex-wrap justify-center">  
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
