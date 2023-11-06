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
              <a href="https:///t.me/ziyoviddin_1">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="https://www.instagram.com/ziyoviddin__1/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="https://www.facebook.com/ziyoviddin.abdurashidov">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="https://www.youtube.com/channel/UC0KYpDFWGRU2i_6rYQW1KOQ">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="social-brand">
              <a href="https://twitter.com/Ziyoviddin__1">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
