import React from "react";
import "./Card.css";
const Card = (props) => {
  const { itemName, category, itemType, city, time } = props;
  return (
    <div className="card-main">
      <div className="news_box">
        {" "}
        <div className="news_img">
          {" "}
          <span className="photo-count"></span>{" "}
          <img
            className="img-fluid"
            src="https://lostandfoundnetworks.com/storage/files/in/2800/thumb-320x240-39ac79ecfff4a2705daee2efb8d3e622.jpeg"
            alt="My pet addy dog"
          />{" "}
        </div>
        <div className="news_detail">
          <h2 className="detail-title">{itemName}</h2>
          <span className="detail-category">{category}</span>
          <span className="detail-type">{itemType}</span>
          <div className="detail-loc-time">
            <span className="detail-loc">{city}</span>
            <span className="detail-time">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
