import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Login({ user, loginUser }) {
  const email = useRef();
  const password = useRef();
  const [err, setErr] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    const oldUser = user.find((val) => {
      return (
        val.email === email.current.value &&
        val.password === password.current.value
      );
    });
    if (oldUser) {
      loginUser(oldUser);
      navigate("/");
      setErr(false);
      password.current.value = "";
      email.current.value = "";
    } else {
      setErr(true);
    }
  };

  return (
    <div className="log-reg">
      <div className="btns">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="box">
        <div className="title">Login</div>
        {err && <div className="alert">User Not Found</div>}
        <form onSubmit={loginSubmit}>
          <label htmlFor="">
            Email
            <input ref={email} required type="email" placeholder="Your Email" />
          </label>
          <label htmlFor="">
            Password
            <input
              ref={password}
              required
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-hide"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </label>
          <button className="submit-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
