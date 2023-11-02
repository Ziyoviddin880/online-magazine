import { NavLink } from "react-router-dom";

function Header({ person }) {
  return (
    <header>
      <div className="container">
        <nav>
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
            {console.log(person)}
            {!person ? (
              <li>
                <NavLink to="/register">Log In / Register</NavLink>
              </li>
            ) : (
              <li>{person.fullName}</li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
