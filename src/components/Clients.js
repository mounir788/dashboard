import React from 'react'
import Client from './Client';

 const Clients = () => {
  return (
    <main>
    <div className="wrapper">
      <div className="exist">
        <h2>حذف او تعديل العملاء الحاليين</h2>
        <div className="imgs">
          <Client />
        </div>
      </div>
      <div className="add-new">
        <h2>اضافه عميل جديد</h2>
        <form action="" className="input-box hero-img">
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
            placeholder="اضف اسم العميل"
            name="hero-text"
            id="hero-text"
            rows="2"
          />
          <button type="submit" className="btn">
            اضافه
          </button>
        </form>
      </div>
    </div>
  </main>
  )
}

export default Clients;