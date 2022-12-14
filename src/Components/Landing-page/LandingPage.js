import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing_image">
        <img
          src="https://res.cloudinary.com/dymojrrtf/image/upload/v1670907212/10x/xfh5x83vcc6zt0lhtmfh.png"
          alt="landing"
        />
      </div>

      <div className="landing_actions">
        <div className="landing_actions__text">10x Team 04</div>
        <Link to="/postView">
          <div>
            <button>Enter</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
