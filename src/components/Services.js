import React, { useState } from 'react';
import Serv from './Serv';

const Services = () => {
    const [edit, setEdit] = useState(false);
    return (
        <main>
            <div className="wrapper">
                <div className="exist">
                    <h2>الخدمات الحالية</h2>
                    <div className="imgs">
                        <Serv />
                    </div>
                </div>
                <div className="add-new">
                    <h2>اضافه خدمة جديدة</h2>
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
                            <input type="text" placeholder='اضف العنوان العربي' />
                            <input type="text" placeholder='اضف العنوان الانجليزي' />
                            <input type="text" placeholder='اضف العنوان الفرعي العربي' />
                            <input type="text" placeholder='اضف العنوان الفرعي الانجليزي' />
                        </div>
                        <div className="inputs-group">
                            <textarea
                                placeholder="اضف الوصف العربي"
                                name="hero-text"
                                id="hero-text"
                                rows="2"
                            />
                            <textarea
                                placeholder="اضف الوصف الانجليزي"
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
                            اضافة
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Services;