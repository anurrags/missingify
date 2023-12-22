import React from "react";
import "./addpost.css";
const Addpost = () => {
  return (
    <div className="add-main">
      <div className="add-title-div">
        <h1 className="add-title">How to post the Ad ?</h1>
        <div className="ads-title-border"></div>
      </div>
      <div className="add-content">
        <div className="add-content-first">
          <h2 className="add-content-title">Step 1: Register with us</h2>
          <p className="add-content-para">
            Don't know how to deal with lost or found items near you? Register
            with your name and email address. If you have registered already,
            you can use the same account for posting unlimited ads.
          </p>
        </div>
        <div className="add-content-sec">
          <h2 className="add-content-title">Step 2: Verify your account</h2>
          <p className="add-content-para">
            Confirm your registration through the verification link which has
            sent to the given email address and then you can manage the account
            details now. Use either username or email address for login to your
            account.
          </p>
        </div>
        <div className="add-content-third">
          <h2 className="add-content-title">Step 3: Start reporting</h2>
          <p className="add-content-para">
            You can start creating the ad for the lost or found items now to
            claim the item or hand over it to the rightful owner. Once done, we
            will post the ad on the large community where everybody can
            potentially take action in searching for what you have lost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addpost;
