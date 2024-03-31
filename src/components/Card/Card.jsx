import React from "react";
import './index.css';

function Card(props) {
  const {title, image, price } = props.data.attributes
  function handleClick() {
    alert("Awesome!")
  }
  return (
    <>
      <div onClick={handleClick} className="card">
        <img src={image} className="card-img-top" alt="..." />
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
    </>
  );
}

export default Card;
