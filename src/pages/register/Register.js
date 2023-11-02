import "./register.scss";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register({ registerUser }) {
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    registerUser(newUser);
    navigate("/");
  };
  return (
    <div className="log-reg">
      <div className="btns">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="box">
        <div className="title">Register</div>
        <form onSubmit={registerSubmit}>
          <label htmlFor="fullName">FullName</label>
          <input
            ref={fullName}
            required
            type="text"
            id="fullName"
            placeholder="Your FullName"
          />
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            required
            type="email"
            id="email"
            placeholder="Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            ref={password}
            required
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Your Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-hide"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <button className="submit-btn" type="submit">
            Regiter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
