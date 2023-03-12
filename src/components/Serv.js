import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Serv = ({ service, id }) => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSubmitEdits = e => {
    e.preventDefault();
    setEdit(false);
    const reader = new FileReader();
    reader.readAsDataURL(formData.image);
    reader.onload = () => {
      const imageDataUrl = reader.result;
      axios
        .patch(`https://test.dummydealer.com/api/v1/admin/service/${id}`, {
          image: imageDataUrl,
          title: formData.title,
          subTitle: formData.subTitle,
          description: formData.description
        })
        .then(() => {
          toast.success("تم التعديل بنجاح");
        })
        .catch(() => {
          toast.error("اختار صوره اخرى بحجم اقل");
        });
    };
  };
  const handleDelete = async () => {
    axios
      .delete(`https://test.dummydealer.com/api/v1/admin/service/${id}`)
      .then(() => {
        document.getElementById("uform").reset();
        toast.success("تم الحذف بنجاح");
      })
      .catch(() => {
        document.getElementById("uform").reset();
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <div className="img">
      <div className="container">
        <div className="content">
          <img
            src={`https://test.dummydealer.com/images/${service.image}`}
            alt={service.name}
          />
          <ul className="servUl">
            <li>
              <span>العنوان:</span>
              <span>
                {service.title.ar}
              </span>
            </li>
            <li>
              <span>العنوان الفرعي:</span>
              <span>
                {service.subTitle.ar}
              </span>
            </li>
          </ul>
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
      <form
        onSubmit={handleSubmitEdits}
        id="uform"
        className={edit ? "active" : ""}
      >
        <div className="file_feild">
          <p>حمل صوره جديده</p>
          <input
            type="file"
            name="file"
            className="file_in"
            accept="image/*"
            onChange={e => {
              setFormData({ ...formData, image: e.target.files[0] });
            }}
          />
        </div>
        <div className="inputs-group">
          <input
            type="text"
            placeholder="اضف العنوان"
            onChange={e =>
              setFormData({
                ...formData,
                title: { ...formData.title, ar: e.target.value }
              })}
          />
          <input
            type="text"
            placeholder="Add Title"
            style={{ direction: "ltr" }}
            onChange={e =>
              setFormData({
                ...formData,
                title: { ...formData.title, en: e.target.value }
              })}
          />
          <input
            type="text"
            placeholder="اضف العنوان الفرعي"
            onChange={e =>
              setFormData({
                ...formData,
                subTitle: { ...formData.subTitle, ar: e.target.value }
              })}
          />
          <input
            type="text"
            style={{ direction: "ltr" }}
            placeholder="Add Subtitle"
            onChange={e =>
              setFormData({
                ...formData,
                subTitle: { ...formData.subTitle, en: e.target.value }
              })}
          />
        </div>
        <div className="inputs-group">
          <textarea
            placeholder="اضف الوصف"
            name="hero-text"
            id="hero-text"
            rows="2"
            onChange={e =>
              setFormData({
                ...formData,
                description: { ...formData.description, ar: e.target.value }
              })}
          />
          <textarea
            placeholder="Add content"
            style={{ direction: "ltr" }}
            name="hero-text"
            id="hero-text"
            rows="2"
            onChange={e =>
              setFormData({
                ...formData,
                description: { ...formData.description, en: e.target.value }
              })}
          />
        </div>
        <button type="submit" className="btn">
          تعديل
        </button>
      </form>
    </div>
  );
};

export default Serv;
