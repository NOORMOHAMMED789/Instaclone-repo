import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header">
        <section className="insta-logo">
          <img
            src={
              "https://res.cloudinary.com/dymojrrtf/image/upload/v1670907172/10x/iijklxncygpqh8tuqunz.png"
            }
            alt="instalogo"
          />
        </section>

        <section className="insta-camera">
          <Link to="/formPage">
            <img
              src={
                "https://res.cloudinary.com/dymojrrtf/image/upload/v1670907125/10x/vp6ezmsiiqmwifrbe9hd.png"
              }
              alt="instalogo"
            />
          </Link>
        </section>
      </nav>
    </>
  );
};

export default Header;
