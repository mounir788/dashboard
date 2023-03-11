import React, { useState } from "react";

const HeaderSlider = ({ slide }) => {
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
          <img
            src={`http://89.116.236.15/images/${slide.image}`}
            alt={slide._id}
          />
          <p>
            {slide.text.ar}
          </p>
          <p>
            {slide.text.en}
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
        <textarea
          required
          rows="2"
          id="hero-text"
          name="hero-text"
          style={{ direction: "ltr" }}
          placeholder="Edit Text"
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
