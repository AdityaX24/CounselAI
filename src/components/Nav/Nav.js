import "./nav.css";
import { useEffect, useState } from "react"; 
import { auth } from "../../config/firebase"; 


export default function Menu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => {
      // Cleanup the listener when component unmounts
      unsubscribe();
    };
  }, []);

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
                <a className="nav-link" href="contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tc">
                  T & C
                </a>
              </li>
              <li className="nav-item">
                {user ? (
                  // Display Logout when the user is logged in
                  <a
                    className="nav-link"
                    href="/login"
                    onClick={() => {
                      // Sign out the user when clicking Logout
                      auth.signOut();
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  // Display Login when the user is logged out
                  <a className="nav-link" href="login">
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

