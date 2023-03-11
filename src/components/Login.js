import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form action="">
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
