import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <section className="Card">
        <section className="Card_header">
          <div>
            <div className="Card_header__title">{props.post.name}</div>
            <div className="Card_header__location">{props.post.location}</div>
          </div>
          <span>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </span>
        </section>

        <section className="Card_image">
          <img src={props.post.PostImage} alt="" />
        </section>

        <section className="Card_actions">
          <span>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </span>
          <span>{props.post.date}</span>
        </section>

        <section className="likes">{props.post.likes} likes</section>

        <section className="description">{props.post.description}</section>
      </section>
    </>
  );
};

export default Card;
