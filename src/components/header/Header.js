import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";
import "./header.scss";

function Header({ person }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-img">
            <NavLink to="/">
              <img src="images/logo-img.png" alt="Logo Image" />
            </NavLink>
          </div>
          <Menu person={person} />
          <i
            onClick={() => {
              setOpenMenu(true);
            }}
            className={
              openMenu ? "dNone" : "dBlock phone-burger fa-solid fa-bars"
            }
          ></i>
        </nav>
      </div>
      <div className={openMenu ? "right-menu dBlock" : "right-menu dNone"}>
        <i
          onClick={() => setOpenMenu(false)}
          class="fa-solid fa-xmark close-icon"
        ></i>
        <Menu person={person} />
      </div>
      <div
        onClick={() => setOpenMenu(false)}
        className={openMenu ? "left-block dBlock" : "left-block dNone"}
      ></div>
    </header>
  );
}

export default Header;
