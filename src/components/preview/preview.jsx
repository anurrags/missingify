import React from "react";
import { Link } from "react-router-dom";
import "./preview.css";
const Preview = () => {
  return (
    <div className="preview-div">
      <div className="preview-text">
        <h1 className="preview-h1">Report what you Found or Lost</h1>
        <p className="preview-info">
          Do you have something to report, to help, any one today? Post it at
          Lost & Found, its free, for global people and very easy to use!
        </p>
        <Link className="preview-btn" to="/postad">
          Post-Ad
        </Link>
      </div>
    </div>
  );
};

export default Preview;
