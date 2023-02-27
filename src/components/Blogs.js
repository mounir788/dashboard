import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>حذف او تعديل المقالات الحالية</h2>
          <div className="imgs">
            <Blog />
          </div>
        </div>
        <div className="add-new">
          <h2>اضافه مقالة جديدة</h2>
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
              placeholder="اضف اسم المقالة"
              name="hero-text"
              id="hero-text"
              rows="2"
            />
            <textarea
              placeholder="اضف محتوي المقالة"
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

export default Blogs;
