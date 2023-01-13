import React from "react";
import Logo from "../../assets/img/logo.png";
import "./header.css";
const Navbar = () => {
  return (
    <div>
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
            <div className="split-content header-center">
              <nav role="navigation" className="nav-menu w-nav-menu" style={{}}>
                <ul role="list" className="header-navigation w-list-unstyled">
                  <li className="nav-item-wrapper">
                    <a
                      href="#"
                      aria-current="page"
                      className="nav-link w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item-wrapper">
                    <a href="#" className="nav-link">
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item-wrapper">
                    <div
                      data-hover="true"
                      data-delay={0}
                      data-w-id="f05a5eb5-5b4f-2c04-369b-54bf4593dba1"
                      className="nav-link-dropdown w-dropdown"
                      style={{ maxWidth: "1440px" }}
                    >
                      <div
                        className="nav-link dropdown w-dropdown-toggle"
                        id="w-dropdown-toggle-0"
                        aria-controls="w-dropdown-list-0"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabIndex={0}
                      >
                        <div>
                          Community&nbsp;&nbsp;
                          <span className="dropdown-arrow"></span>
                        </div>
                      </div>
                      <nav
                        className="dropdown-list w-dropdown-list"
                        style={{
                          display: "none",
                          transform:
                            "translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: 0,
                          height: "0px",
                        }}
                        id="w-dropdown-list-0"
                        aria-labelledby="w-dropdown-toggle-0"
                      >
                        <div className="dropdown-nav-main-wrapper">
                          <div className="dropdown-nav-pages-wrapper">
                            <div className="title dropdown">Social Media</div>
                            <div className="dropdown-nav-content">
                              <ul role="list" className="dropdown-nav">
                                <li className="dropdown-nav-item">
                                  <a
                                    href="#"
                                    className="dropdown-nav-link"
                                    tabIndex={0}
                                  >
                                    Twitter
                                  </a>
                                </li>
                                <li className="dropdown-nav-item">
                                  <a
                                    href="#"
                                    className="dropdown-nav-link tag w-inline-block"
                                    tabIndex={0}
                                  >
                                    <div className="footer-nav-link-tag-text">
                                      Telegram
                                    </div>
                                  </a>
                                </li>
                              </ul>
                              <ul role="list" className="dropdown-nav last">
                                <li className="dropdown-nav-item">
                                  <a
                                    href="#"
                                    className="dropdown-nav-link tag w-inline-block"
                                    tabIndex={0}
                                  >
                                    <div className="footer-nav-link-tag-text">
                                      Discord
                                    </div>
                                    <div className="nav-link-tag-wrapper">
                                      <div className="nav-link-tag">soon</div>
                                      <div className="nav-link-tag-blur" />
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-item-wrapper mobile">
                    <a href="#" className="nav-link sign-in mobile">
                      Sign in
                    </a>
                  </li>
                  <li className="nav-item-wrapper mobile-button">
                    <div className="button-primary-gradient header-button mobile-button">
                      <a
                        href="#"
                        className="button-primary small-v2 mobile-button w-button"
                      >
                        Get started
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="split-content header-left">
              <a href="#" className="nav-link sign-in">
                Docs
              </a>
              <div className="button-primary-gradient header-button">
                <a href="#" className="button-primary small-v2 w-button">
                  Dashboard
                </a>
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
