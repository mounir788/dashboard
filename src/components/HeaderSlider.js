import React, { useState } from "react";
import dummy from "../assets/home1.jpg";

const HeaderSlider = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="img">
      <div className="container">
        <div className="content">
          <img src={dummy} alt="img" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="control-btn">
          <button
            className="edit"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          <button className="delete">Delete</button>
        </div>
      </div>
      <form action="" className={edit ? "active" : ""}>
        <label htmlFor="picture">Choose Image</label>
        <input type="file" name="picture" id="picture" />
        <label htmlFor="hero-text">Edit Text</label>
        <textarea name="hero-text" id="hero-text" cols="30" rows="10" />
        <button
          type="submit"
          className="btn"
          onClick={e => {
            e.preventDefault();
            setEdit(false);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HeaderSlider;
