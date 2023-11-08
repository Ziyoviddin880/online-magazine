import "./noteFound.scss";
import { NavLink } from "react-router-dom";

function NoteFound() {
  return (
    <>
      <div className="notFound">
        <img src="images/noteFound.jpg" alt="Page Not Found" />
      </div>
      <div className="notFound-button">
        <NavLink to="">Home</NavLink>
      </div>
    </>
  );
}

export default NoteFound;
