import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./header.css";
const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false);
  let toggleNav = () => {
    if (navtoggle == false) {
      setNavtoggle(true);
    } else {
      setNavtoggle(false);
    }
  };
  return (
    <div>
      <div onClick={toggleNav} className={navtoggle ? "overlay" : ""}></div>
      <div
        data-collapse="medium"
        data-animation="over-left"
        data-duration={400}
        data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="header w-nav"
        style={{ opacity: 1 }}
      >
        <div className="container-default w-container">
          <div className="header-wrapper">
            <div className="split-content header-right">
              <a
                href="#"
                aria-current="page"
                className="brand w-nav-brand w--current"
                aria-label="home"
              >
                <img
                  src={Logo}
                  alt=""
                  sizes="(max-width: 479px) 54vw, 160px"
                  className="header-logo"
                />
              </a>
            </div>

            <div className="split-content header-left">
              <a href="#" className="nav-link sign-in menu-item">
                FAQs
              </a>
              <div>
                <Link to="/dashboard" className="dark-button">
                  <p font-weight="700" className="dark-button-text">
                    LAUNCH APP
                  </p>
                </Link>
              </div>
              <div
                className="menu-button w-nav-button"
                style={{ WebkitUserSelect: "text" }}
                aria-label="menu"
                role="button"
                tabIndex={0}
                aria-controls="w-nav-overlay-0"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                <div className="header-menu-button-icon-wrapper">
                  <div className="icon-wrapper">
                    <div className="header-menu-button-icon-top" />
                    <div className="header-menu-button-icon-medium" />
                    <div className="header-menu-button-icon-bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore id="w-nav-overlay-0" />
      </div>
    </div>
  );
};

export default Navbar;
