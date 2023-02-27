import React, { useState } from "react";

const HomepageHeader = () => {
  const [edit, setEdit] = useState(false);
  return (
    <main>
      <div className="input-box hero-img">
        <div className="lable">Hero Image</div>
        <div className="input-row">
          <input type="file" name="hero-img" id="hero-img" />
          <button type="submit" className="btn">
            Update
          </button>
        </div>
      </div>
      <div className="input-box hero-text">
        <div className="lable">Hero Text</div>
        <div className="input-row">
          {edit
            ? <textarea name="hero" id="hero-text" cols="30" rows="10" />
            : <textarea
                name="hero"
                id="hero-text"
                cols="30"
                rows="10"
                readOnly
              />}
          <button
            type="submit"
            className="btn"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            {edit ? "Update" : "Edit"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomepageHeader;
