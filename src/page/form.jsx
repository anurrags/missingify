// FormComponent.js

import React, { useState } from "react";
import "./FormComponent.css"; // Import the external CSS file
import Navigation from "../components/navigation/navigation.jsx";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    itemType: "",
    city: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");
      } else {
        console.error("Failed to submit form data.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="ad-form">
          <label className="label-post">
            Item Name:
            <input
              className="input-field"
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
            />
          </label>
          <label className="label-post">
            Category:
            <input
              className="input-field"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </label>
          <label className="label-post">
            Item Type:
            <input
              className="input-field"
              type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleInputChange}
            />
          </label>
          <label className="label-post">
            City:
            <input
              className="input-field"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>
          <label className="label-post">
            Time:
            <input
              className="input-field"
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>
          <button className="post" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
