import { useState } from "react";
import { Navbarlinks } from "./pages/Navbarlinks";
import "./styles/NavbarStyles.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState({ clicked: !state.clicked });
  }
  return (
    <>
      <div className="NavbarItems">
        <h1 className="navbar-log">Portfolio</h1>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>
        <u1 className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {Navbarlinks.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon} style={{ color: "#0ef" }}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </u1>
      </div>
    </>
  );
}
