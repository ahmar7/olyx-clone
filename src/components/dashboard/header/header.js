import React from "react";
import "./header.css";
import "./header.scss"
const Header = () => {
  return (
    <header className="header-wrap" style={{ zIndex: 5 }}>
      <div className="container-fluid d-flex justify-content-center justify-content-lg-start">
        <div className="row w-100">
          <div className="col-1" />
          <div className="col-11">
            <div className="container-lg px-0 d-flex justify-content-between gap-3 align-items-center w-100">
              <div className="d-none d-lg-flex flex-column gap-2 text-start">
                <h4
                  className="text-white"
                  style={{ fontSize: "23px", fontWeight: 600 }}
                >
                  Good evening, Dypian
                </h4>
                <span className="text-white headerdesc">
                  Discover the latest trends, breaking news, and gain access to
                  powerful dApps.
                </span>
              </div>
              <a aria-current="page" className="active" href="/">
                <img
                  src="https://app.dypius.com/static/media/toolsLogo.c342b157.svg"
                  className="d-flex d-lg-none"
                  alt=""
                />
              </a>
              <div className="d-flex m-0 justify-content-between gap-3 align-items-center">
                <a className="buydyp-btn btn" href="/buydyp">
                  <img
                    src="https://app.dypius.com/static/media/coins.f8d7f839.svg"
                    alt=""
                  />
                  <span className="buy-dyp-text">Buy DYP</span>
                </a>
                <div className="d-flex justify-content-between gap-3 align-items-center">
                  <div className="d-flex align-items-center justify-content-center dropdown">
                    <button
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="dropdown-basic-button"
                      type="button"
                      className="dropdown-toggle btn btn-primary"
                    >
                      <span className="dropdown-title">
                        <img
                          src="https://app.dypius.com/static/media/eth.51b9e420.svg"
                          height={16}
                          width={16}
                          alt=""
                        />
                        <span className="change-chain-text d-none d-lg-flex">
                          Ethereum
                        </span>
                        <img
                          src="https://app.dypius.com/static/media/dropdown.481b12cf.svg"
                          alt=""
                        />
                      </span>
                    </button>
                  </div>
                  <div className="dropdown">
                    <button
                      aria-haspopup="true"
                      aria-expanded="false"
                      id="dropdown-basic-button2"
                      type="button"
                      className="dropdown-toggle btn btn-primary"
                    >
                      <div
                        className="d-flex align-items-center gap-2 position-relative"
                        style={{ bottom: "5px", fontSize: "12px" }}
                      >
                        <img
                          src="https://app.dypius.com/static/media/walletIcon.71c13b49.svg"
                          alt=""
                          className="position-relative"
                        />
                        <span className="connecttitle d-none d-lg-flex">
                          Connect Wallet
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
