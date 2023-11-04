import { NavLink } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-box">
          <div className="footer-logo">
            <NavLink to="/">
              <img src="images/logo-img-white.png" alt="Footer Logo" />
            </NavLink>
          </div>
          <div className="link-box">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/category">Category</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <div className="social-brand">
              <a href="#">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="#">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
