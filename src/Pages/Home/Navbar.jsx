import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <img src="./img/Portfolio.hu_full_logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/home" onClick={closeMenu} className="navbar--content">
              Home
            </Link>
          </li>
          <li>
            <Link to="/project_1" onClick={closeMenu} className="navbar--content">
              Project one
            </Link>
          </li>
          <li>
            <Link to="/project_2" onClick={closeMenu} className="navbar--content">
              Project two
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="navbar--content">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={closeMenu} className="navbar--content">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={closeMenu} className="navbar--content">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="btn btn-outline-danger logout-button">
              Logout
            </button>
    </nav>
  );
}

export default Navbar;
