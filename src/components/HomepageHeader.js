import React from "react";
import HeaderSlider from "./HeaderSlider";

const HomepageHeader = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>حذف او تعديل العناصر الحاليه</h2>
          <div className="imgs">
            <HeaderSlider />
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه عنصر جديد</h2>
          <form action="" className="input-box hero-img">
            <div className="file_feild">
              <p>حمل صوره جديده</p>
              <input
                required
                type="file"
                name="file"
                className="file_in"
                accept="image/*"
              />
            </div>
            <textarea
              placeholder="اضافه نص"
              name="hero-text"
              id="hero-text"
              rows="2"
            />
            <button type="submit" className="btn">
              اضافه
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HomepageHeader;
