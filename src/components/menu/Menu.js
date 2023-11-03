import { NavLink } from "react-router-dom";
import "./menu.scss";

function Menu({ person }) {
  return (
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
      {!person ? (
        <li>
          <NavLink to="/register">Log In / Register</NavLink>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Menu;
