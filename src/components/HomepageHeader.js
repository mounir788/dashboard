import React from "react";
import HeaderSlider from "./HeaderSlider";

const HomepageHeader = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>Edit the exist</h2>
          <div className="imgs">
            <HeaderSlider />
            <HeaderSlider />
          </div>
        </div>
        <div className="add-new">
          <h2>Add New</h2>
          <div className="input-box hero-img">
            <div className="lable">Hero Image</div>
            <div className="input-row">
              <input type="file" name="hero-img" id="hero-img" />
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </div>
          <div className="input-box hero-text">
            <div className="lable">Hero Text</div>
            <div className="input-row">
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomepageHeader;
