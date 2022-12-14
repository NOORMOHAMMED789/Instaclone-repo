import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormPage.css";

const FormPage = () => {
  const [data, setData] = useState({
    name: "",
    location: "",
    desc: "",
  });
  const authorChangeHandler = (event) => {
    setData({
      ...data,
      name: event.target.value,
    });
  };

  const locChangeHandler = (event) => {
    setData({
      ...data,
      location: event.target.value,
    });
  };

  const desChangeHandler = (event) => {
    setData({ ...data, desc: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    return fetch("http://localhost:4000/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div>
          <input type="file" className="filetype" />
        </div>
        <input
          type="text"
          placeholder="Author"
          className="input"
          onChange={authorChangeHandler}
        />
        <input
          type="text"
          placeholder="location"
          className="input"
          onChange={locChangeHandler}
        />
        <div>
          <input
            type="text"
            placeholder="Description"
            className="input1"
            onChange={desChangeHandler}
          />
        </div>
        <div>
          <Link to="/postView">
            <button className="submit-btn">Check Status</button>
          </Link>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
