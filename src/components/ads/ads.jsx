import React, { useContext, useEffect, useState } from "react";
import "./ads.css";
import Card from "../card/Card";
import axios from "axios";
const Ads = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getFormData"); // Replace with the appropriate endpoint
        setData(response.data);
        // console.log(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="ads-main">
      <h1 className="ads-title">Latest Ads</h1>
      <div className="ads-title-border"></div>
      <div className="ads-div">
        {data &&
          data.map((item) => (
            <Card
              key={item._id}
              itemName={item.itemName}
              category={item.category}
              itemType={item.itemType}
              city={item.city}
              time={item.time}
            />
          ))}
      </div>
    </div>
  );
};

export default Ads;
