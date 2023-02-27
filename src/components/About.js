import React, { useState } from 'react'
import  AboutCard  from './AboutCard';

const About = () => {
  const [edit, setEdit] = useState(false);
  return (
    <main>
      <div className="wrapper">
        <div className="exist">
          <h2>من نحن</h2>
          <div className="imgs">
            <div className="img">
              <div className="container">
                <div className="content">
                  <p>
                    الحــاصــل علــى التــرخيــص المـهنــي رقــم 15384، نقدم الاستشارات الإداريـة والاقتصاديـة والتسويقية والمالية للمنظمات الحكـومية والخاصة والأفراد.
                    خدماتنـا للاستشـارات الإداريـة هي الأداة المسـاعدة للشركات والمؤسسات في مراحل التأسـيس والنـمو، والتطـوير إلـى النجــاح، ووضع خطط لتحسين وتطوير الإداء في مجال الإدارة، والعلاقات العامة، والموارد البشرية، والتسويق.
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
                    setEdit(false);
                  }}
                >
                  تعديل
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="exist">
          <h2>نبذة عنا</h2>
          <div className="imgs">
            <AboutCard />
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
