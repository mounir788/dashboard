import React, { useState } from 'react'

 const AboutCard = () => {
    const [editText, setEditText] = useState(false);
    return (
        <div className="img">
            <div className="container">
                <div className="content-text">
                    <h3 className="title">رؤيتنا</h3>
                    <p>
                        مكتب إقليمي رائد فـي الاستشــارات الإداريــة والتطوير يرشد قرارات المستفيدين بآراء الخبراء والوصول إلــى المفهوم الشــامــل لخدمــات الاستشـارات والحـلول الإداريــة والاستشـاريــة المبنية علـى الخبرة وتقديم أفضل الممارسات العالمية.
                    </p>
                </div>
                <div className="control-btn">
                    <button
                        className="edit"
                        onClick={() => {
                            setEditText(true);
                        }}
                    >
                        تعديل
                    </button>
                </div>
            </div>
            <form action="" className={editText ? "active" : ""}>
                <textarea
                    placeholder="تعديل النص"
                    name="hero-text"
                    id="hero-text"
                    rows="2"
                />
                <button
                    type="submit"
                    className="btn"
                    onClick={e => {
                        e.preventDefault();
                        setEditText(false);
                    }}
                >
                    تعديل
                </button>
            </form>
        </div>
    )
}

export default AboutCard;