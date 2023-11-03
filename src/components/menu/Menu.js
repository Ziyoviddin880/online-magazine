import { NavLink } from "react-router-dom";
import "./menu.scss";

function Menu({ person, setOpenMenu }) {
  return (
    <ul>
      <li>
        <NavLink onClick={() => setOpenMenu(false)} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setOpenMenu(false)} to="/category">
          Category
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setOpenMenu(false)} to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setOpenMenu(false)} to="/contact">
          Contact
        </NavLink>
      </li>
      {!person ? (
        <li>
          <NavLink onClick={() => setOpenMenu(false)} to="/register">
            Log In / Register
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Menu;
