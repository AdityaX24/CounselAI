import "./nav.css";
import { useLocation } from "react-router-dom";

const withouSidebarRoutes = ["/login"];
export default function Menu() {
  const {pathname} = useLocation();
  return (
    <>
      <nav className="menum navbar navbar-light navbar-expand-md justify-content-center fixed-top">
        <div className="container">
          <div
            className="navbar-collapse collapse justify-content-between align-items-center w-100"
            id="collapsingNavbar2"
          >
            <ul className="topBotomBordersOut navbar-nav mx-auto text-center">
              <li className="nav-item active">
                <a className="nav-link" href="resources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="contact">
                  Contact
                </a>
              </li>
              
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="tc">
                  T & C
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
