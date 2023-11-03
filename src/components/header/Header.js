import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";
import USerInfo from "../user-Info/USerInfo";
import "./header.scss";

function Header({ person }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-img">
            <NavLink to="/">
              <img src="images/logo-img.png" alt="Logo" />
            </NavLink>
          </div>
          <Menu person={person} setOpenMenu={setOpenMenu} />
          <div className={person ? "burger-user dBlock" : "burger-user"}>
            <div className="icons">
              {person && (
                <div className="person" onClick={() => setOpenUser(!openUser)}>
                  {person.fullName.split(" ").length < 2
                    ? person.fullName.split(" ")[0].slice(0, 1).toUpperCase()
                    : person.fullName.split(" ")[0].slice(0, 1).toUpperCase() +
                      person.fullName.split(" ")[1].slice(0, 1).toUpperCase()}
                </div>
              )}

              <i
                onClick={() => {
                  setOpenMenu(true);
                }}
                className={
                  openMenu ? "dNone" : "dBlock phone-burger fa-solid fa-bars"
                }
              ></i>
              <USerInfo
                person={person}
                openUser={openUser}
                setOpenUser={setOpenUser}
              />
            </div>
          </div>
        </nav>
      </div>
      <div className={openMenu ? "right-menu dBlock" : "right-menu dNone"}>
        <i
          onClick={() => setOpenMenu(false)}
          className="fa-solid fa-xmark close-icon"
        ></i>
        <Menu person={person} setOpenMenu={setOpenMenu} />
      </div>
      <div
        onClick={() => setOpenMenu(false)}
        className={openMenu ? "left-block dBlock" : "left-block dNone"}
      ></div>
    </header>
  );
}

export default Header;
