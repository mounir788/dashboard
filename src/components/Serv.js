import React, { useState } from 'react';
import dummy from "../assets/home1.jpg"

const Serv = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div className="img">
            <div className="container">
                <div className="content">
                    <img src={dummy} alt="img" />
                    <ul className='servUl'>
                        <li>
                            <span>العنوان:</span>
                            <span>دراسة جدوى للجهات التمويلية</span>
                        </li>
                        <li>
                            <span>العنوان الفرعي:</span>
                            <span>دراسة جدوى للجهات التمويلية</span>
                        </li>
                    </ul>
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
                <div className="inputs-group">
                    <input type="text" placeholder='تعديل العنوان العربي' />
                    <input type="text" placeholder='تعديل العنوان الانجليزي' />
                    <input type="text" placeholder='تعديل العنوان الفرعي العربي' />
                    <input type="text" placeholder='تعديل العنوان الفرعي الانجليزي' />
                </div>
                <div className="inputs-group">
                    <textarea
                        placeholder="تعديل الوصف العربي"
                        name="hero-text"
                        id="hero-text"
                        rows="2"
                    />
                    <textarea
                        placeholder="تعديل الوصف الانجليزي"
                        name="hero-text"
                        id="hero-text"
                        rows="2"
                    />
                </div>
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


export default Serv;