import React, { useState } from "react";
import HeaderSlider from "./HeaderSlider";
import { toast } from "react-toastify";
import axios from "axios";

const HomepageHeader = () => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "multipart/form-data"
  };
  let requestOptions = {
    url: "", //home top slider post api
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmitNew = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("addNewForm").reset();
        toast.success("تمت الاضافه بنجاح");
      })
      .catch(() => {
        document.getElementById("addNewForm").reset();
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
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
          <form
            onSubmit={handleSubmitNew}
            id="addNewForm"
            className="input-box hero-img"
          >
            <div className="file_feild">
              <p>حمل صوره جديده</p>
              <input
                required
                type="file"
                name="file"
                className="file_in"
                accept="image/*"
                onChange={e => {
                  setFormData({ ...formData, image: e.target.files[0] });
                }}
              />
            </div>
            <textarea
              required
              rows="2"
              name="hero-text"
              id="hero-text"
              placeholder="اضافه نص"
              onChange={e => setFormData({ ...formData, text: e.target.value })}
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
