import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Home = ({ reqs, apply }) => {
  const handleDelete = async id => {
    axios
      .delete(`https://test.dummydealer.com/api/v1/admin/request/${id}`)
      .then(() => {
        toast.success("تم الحذف بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  const handleDelete2 = async id => {
    axios
      .delete(`https://test.dummydealer.com/api/v1/admin/apply/${id}`)
      .then(() => {
        toast.success("تم الحذف بنجاح");
      })
      .catch(() => {
        toast.error("عذرا حدث خطا حاول مره اخرى");
      });
  };
  return (
    <main>
      <div className="wrapper">
        <h2>قائمه الطلبات</h2>
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد الالكتروني</th>
              <th>رقم الهاتف</th>
              <th>نوع الخدمه</th>
              <th>الرساله</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {reqs.map(req => {
              return (
                <tr key={req._id}>
                  <td style={{ textAlign: "inherit" }}>
                    {req.name}
                  </td>
                  <td>
                    {req.email}
                  </td>
                  <td>
                    {req.phone}
                  </td>
                  <td>
                    {req.serviceType}
                  </td>
                  <td>
                    {req.message}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(req._id);
                      }}
                      className="del"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h2>قائمه المتقدمين للوظائف</h2>
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد الالكتروني</th>
              <th>رقم الهاتف</th>
              <th>السيره الذاتيه</th>
              <th>الرساله</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {apply.map(app => {
              return (
                <tr key={app._id}>
                  <td style={{ textAlign: "inherit" }}>
                    {app.fullName}
                  </td>
                  <td>
                    {app.email}
                  </td>
                  <td>
                    {app.phone}
                  </td>
                  <td>
                    <a
                      href={`https://test.dummydealer.com/images/${app.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {app.resume}
                    </a>
                  </td>
                  <td>
                    {app.message}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete2(app._id);
                      }}
                      className="del"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Home;
