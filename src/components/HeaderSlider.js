import React, { useState } from "react";
import dummy from "../assets/home1.jpg";

const HeaderSlider = () => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSubmitEdits = e => {
    e.preventDefault();
    setEdit(false);
  };
  const handleDelete = () => {};
  return (
    <div className="img">
      <div className="container">
        <div className="content">
          <img src={dummy} alt="img" />
          <p>
            مكتب عمر الطويـان للاستشـارات الإداريـة حاصل على الترخيص المهني رقم
            15384.
          </p>
        </div>
        <div className="control-btn">
          <button className="edit" onClick={handleEdit}>
            تعديل
          </button>
          <button onClick={handleDelete} className="delete">
            حذف
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmitEdits} className={edit ? "active" : ""}>
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
          id="hero-text"
          name="hero-text"
          placeholder="تعديل النص"
          onChange={e => setFormData({ ...formData, text: e.target.value })}
        />
        <button type="submit" className="btn">
          تعديل
        </button>
      </form>
    </div>
  );
};

export default HeaderSlider;
