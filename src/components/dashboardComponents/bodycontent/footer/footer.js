import React from "react";
import "./footer.scss";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer container-fluid d-flex justify-content-center justify-content-lg-start">
      <div className="row w-100">
        <div className="col-1" />
        <div className="col-11">
          <div className="py-4 flex-column flex-lg-row px-0 container-lg d-flex justify-content-between gap-3 align-items-start align-items-lg-center">
            <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-center align-items-center align-items-lg-start col-12 col-lg-6 gap-2">
              <a target="_blank" href="#">
                <img
                  src="https://app.dypius.com/assets/img/dypiusFooter.svg"
                  alt="Dypius"
                />
              </a>
              <a target="_blank" href="#" style={{ position: "relative" }}>
                <img
                  src="https://app.dypius.com/assets/img/metaverse.svg"
                  alt="METAVERSE"
                  style={{ height: "30px" }}
                />
              </a>
            </div>
            <hr
              className="form-divider my-2 d-flex d-lg-none"
              style={{ height: "2px" }}
            />
            <div className="social-and-links d-flex align-items-end flex-column-reverse flex-lg-column justify-content-center gap-4">
              <div className="social-profile">
                <span className="mobile-footer-title d-flex d-lg-none mb-3">
                  Community
                </span>
                <ul>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/twitter.svg"
                        alt="Twitter"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/telegram.svg"
                        alt="Telegram"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/discord.svg"
                        alt="Discord"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/instagram.svg"
                        alt="Instagram"
                        height={24}
                        width={24}
                        style={{ height: "23px", width: "23px" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/medium.svg"
                        alt="Medium"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/youtube.svg"
                        alt="Youtube"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/linkedin.svg"
                        alt="Linkedin"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/github.svg"
                        alt="Github"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/Social/email.svg"
                        alt="Mail"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/coingecko-logo.svg"
                        alt="Coingecko"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <img
                        src="https://app.dypius.com/assets/img/coinmarketcap.svg"
                        alt="Coinmarketcap"
                        height={24}
                        width={24}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <hr
                className="form-divider my-2 d-flex d-lg-none w-100"
                style={{ height: "2px" }}
              />
              <div className="footer-menu">
                <span className="mobile-footer-title d-flex d-lg-none mb-3">
                  Links
                </span>
                <ul className="external-links">
                  <li>
                    <a target="_blank" href="#">
                      Token Contract
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
};

export default Footer;
