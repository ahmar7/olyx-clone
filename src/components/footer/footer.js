import React from "react";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container-default w-container">
          <div
            data-w-id="eeb31b51-83df-fb96-9e65-fcd1067756fb"
            className="footer-content"
            style={{ opacity: 1 }}
          >
            <div className="footer-menu-main-content">
              <div className="footer-menu-wrapper">
                <div className="title footer-menu">OLYX</div>
                <div className="footer-menu-content">
                  <ul role="list" className="footer-nav w-list-unstyled">
                    <li className="footer-nav-item">
                      <a
                        href="#"
                        aria-current="page"
                        className="footer-nav-link w--current"
                      >
                        Home
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#" className="footer-nav-link">
                        Docs
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#" className="footer-nav-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-newsletter-content">
              <div className="title footer-menu">
                Subscribe to our newsletter
              </div>
              <p className="paragraph footer-newsletter">
                Olyx, Automated Hedge Fund platform with Advance AI bot trading.
              </p>
              <div className="footer-newsletter-form-block w-form">
                <form
                  id="wf-form-Footer-Newsletter-Form"
                  name="wf-form-Footer-Newsletter-Form"
                  data-name="Footer Newsletter Form"
                  method="get"
                  className="footer-newsletter-form"
                  aria-label="Footer Newsletter Form"
                >
                  <input
                    type="email"
                    className="input footer-newsletter w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder="Your email address"
                    id="email"
                    required
                  />
                  <div className="button-primary-gradient footer-newsletter">
                    <input
                      type="submit"
                      defaultValue="Subscribe"
                      data-wait="Please wait..."
                      className="button-primary footer-newsletter w-button"
                    />
                  </div>
                </form>
                <div
                  className="success-message w-form-done"
                  tabIndex={-1}
                  role="region"
                  aria-label="Footer Newsletter Form success"
                >
                  <div>Thanks for joining our newsletter.</div>
                </div>
                <div
                  className="error-message w-form-fail"
                  tabIndex={-1}
                  role="region"
                  aria-label="Footer Newsletter Form failure"
                >
                  <div>Oops! Something went wrong.</div>
                </div>
              </div>
              <div className="social-media-wrapper">
                <a href="#" target="_blank" className="social-media-link">
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social-media-link icon-size-13px"
                >
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social-media-link icon-size-15px"
                >
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social-media-link icon-size-13px"
                >
                  
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social-media-link icon-size-13px"
                >
                  
                </a>
                <a href="#" target="_blank" className="social-media-link">
                  
                </a>
              </div>
            </div>
          </div>
          <div
            data-w-id="7ddc8154-5985-c814-10de-e9f5faad4e13"
            className="footer-content-bottom"
            style={{ opacity: 1 }}
          >
            <a
              href="#"
              aria-current="page"
              className="footer-logo-container w-inline-block w--current"
            >
              <img
                src={Logo}
                alt=""
                sizes="(max-width: 767px) 125px, 150px"
                className="footer-logo"
              />
            </a>
            <div className="footer-small-print">Copyright © Olyx.AI Team</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
