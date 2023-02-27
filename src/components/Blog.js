import React, { useState } from 'react'
import dummy from "../assets/home1.jpg";

export const Blog = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div className="img">
            <div className="container">
                <div className="content">
                    <img src={dummy} alt="img" />
                    <p>
                        عنوان المقالة
                    </p>
                </div>
                <div className="control-btn">
                    <button
                        className="edit"
                        onClick={() => {
                            setEdit(true);
                        }}
                    >
                        تعديل
                    </button>
                    <button className="delete">حذف</button>
                </div>
            </div>
            <form action="" className={edit ? "active" : ""}>
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
                    placeholder="تعديل اسم المقالة"
                    name="hero-text"
                    id="hero-text"
                    rows="2"
                />
                <textarea
                    placeholder="تعديل محتوي المقالة"
                    name="hero-text"
                    id="hero-text"
                    rows="2"
                />
                <button
                    type="submit"
                    className="btn"
                    onClick={e => {
                        e.preventDefault();
                        setEdit(false);
                    }}
                >
                    تعديل
                </button>
            </form>
        </div>
    )
}

export default Blog;