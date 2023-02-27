import React, { useState } from 'react'

const Contact = () => {
    const [edit, setEdit] = useState(false);
    const [editTel, setEditTel] = useState(false);
    const [editTel2, setEditTel2] = useState(false);
    const [address, setAddress] = useState(false);
    return (
        <main>
            <div className="wrapper">
                <div className="exist">
                    <h2>معلومات الاتصال</h2>
                    <div className="imgs">
                        <div className="img">
                            <div className="container">
                                <div className="content-text">
                                    <h3>البريد الاكتروني</h3>
                                    <p>
                                        example@gmail.com
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
                                </div>
                            </div>
                            <form action="" className={edit ? "active" : ""}>
                                <input
                                    placeholder="تعديل البريد الاكتروني"
                                    name="email"
                                    id="email"
                                    type="email"
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
                        <div className="img">
                            <div className="container">
                                <div className="content-text">
                                    <h3>رقم الهاتف</h3>
                                    <p>
                                        +01028329874
                                    </p>
                                </div>
                                <div className="control-btn">
                                    <button
                                        className="edit"
                                        onClick={() => {
                                            setEditTel(true);
                                        }}
                                    >
                                        تعديل
                                    </button>
                                </div>
                            </div>
                            <form action="" className={editTel ? "active" : ""}>
                                <input
                                    placeholder="تعديل رقم الهاتف"
                                    name="subtel"
                                    id="subtel"
                                    type="tel"
                                />
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={e => {
                                        e.preventDefault();
                                        setEditTel(false);
                                    }}
                                >
                                    تعديل
                                </button>
                            </form>
                        </div>
                        <div className="img">
                            <div className="container">
                                <div className="content-text">
                                    <h3>رقم الهاتف الثاني</h3>
                                    <p>
                                        +01028329874
                                    </p>
                                </div>
                                <div className="control-btn">
                                    <button
                                        className="edit"
                                        onClick={() => {
                                            setEditTel2(true);
                                        }}
                                    >
                                        تعديل
                                    </button>
                                </div>
                            </div>
                            <form action="" className={editTel2 ? "active" : ""}>
                                <input
                                    placeholder="تعديل رقم الهاتف"
                                    name="tel"
                                    id="tel"
                                    type="tel"
                                />
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={e => {
                                        e.preventDefault();
                                        setEditTel2(false);
                                    }}
                                >
                                    تعديل
                                </button>
                            </form>
                        </div>
                        <div className="img">
                            <div className="container">
                                <div className="content-text">
                                    <h3>العنوان</h3>
                                    <p>
                                        ش القاهرة
                                    </p>
                                </div>
                                <div className="control-btn">
                                    <button
                                        className="edit"
                                        onClick={() => {
                                            setAddress(true);
                                        }}
                                    >
                                        تعديل
                                    </button>
                                </div>
                            </div>
                            <form action="" className={address ? "active" : ""}>
                                <textarea
                                    placeholder="تعديل العنوان"
                                    name="adress"
                                    id="address"
                                    rows="2"
                                />
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={e => {
                                        e.preventDefault();
                                        setAddress(false);
                                    }}
                                >
                                    تعديل
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;