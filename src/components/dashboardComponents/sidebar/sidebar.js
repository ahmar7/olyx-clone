import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [switchhover, setSwitchhover] = useState(false);
  let toggleIt = () => {
    if (switchhover == false) {
      setSwitchhover(true);
    } else {
      setSwitchhover(false);
    }
  };
  return (
    <>
      <div className="col-1">
        <div
          id="sidaebar"
          onMouseOver={toggleIt}
          className="testbar null d-none d-lg-flex flex-column justify-content-between align-items-start"
          style={{ padding: "2.5rem 0px" }}
        >
          <img
            src="https://app.dypius.com/static/media/navRadius.1b42ac66.svg"
            className="nav-radius false"
            alt=""
          />
          <div className="w-100">
            <div className="d-flex w-100 justify-content-center align-items-center pb-5">
              <Link aria-current="page" className="active" to="/">
                <img
                  src="https://app.dypius.com/static/media/toolsLogo.c342b157.svg"
                  alt=""
                  style={{ height: 40 }}
                />
              </Link>
            </div>
            <div
              className="sidebar-container w-100 justify-content-center align-items-center d-flex flex-column gap-4"
              style={{ gap: 35 }}
            >
              <div
                className="sidebar-container w-100 accordion justify-content-center align-items-center d-flex flex-column gap-4"
                id="accordionExample2"
              >
                <a href="/earn">
                  <div
                    id="Earn"
                    className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                  >
                    <img
                      src="https://app.dypius.com/static/media/earnIcon.1068fb71.svg"
                      alt=""
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                </a>
                <a href="/governance">
                  <div
                    id="Governance"
                    className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                  >
                    <img
                      src="https://app.dypius.com/static/media/governanceIcon.ccda3f81.svg"
                      alt=""
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                </a>
                <a href="/bridge">
                  <div
                    id="Bridge"
                    className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                  >
                    <img
                      src="https://app.dypius.com/static/media/bridgeIcon.e4ebb3f6.svg"
                      alt=""
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                </a>
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExplorer"
                  aria-expanded="true"
                  aria-controls="collapseExplorer"
                  id="headingExplorer"
                  className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                >
                  <img
                    src="https://app.dypius.com/static/media/explorerIcon.cebe4ea1.svg"
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                </div>
                <div
                  id="collapseExplorer"
                  className="accordion-collapse collapse open"
                  aria-labelledby="headingExplorer"
                  data-bs-parent="#accordionExample2"
                />
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseProjects"
                  aria-expanded="true"
                  aria-controls="collapseProjects"
                  id="headingProjects"
                  className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                >
                  <img
                    src="https://app.dypius.com/static/media/projectsIcon.14546df4.svg"
                    alt=""
                    style={{ width: 32, height: 32 }}
                  />
                </div>
                <div
                  id="collapseProjects"
                  className="accordion-collapse collapse open"
                  aria-labelledby="headingProjects"
                  data-bs-parent="#accordionExample2"
                />
                <a href="/swap">
                  <div
                    id="Swap"
                    className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                  >
                    <img
                      src="https://app.dypius.com/static/media/swapIcon.a35aba21.svg"
                      alt=""
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                </a>
                <a href="/news">
                  <div
                    id="News"
                    className="sidebar-item gap-3 p-2 d-flex justify-content-center align-items-center null"
                  >
                    <img
                      src="https://app.dypius.com/static/media/newsIcon.f78f16d2.svg"
                      alt=""
                      style={{ width: 32, height: 32 }}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            switchhover
              ? "content-wrapper container-fluid d-flex justify-content-center justify-content-lg-start"
              : "hide-it"
          }
        >
          <div className="row w-100">
            <div className="col-1">
              <div
                id="sidebar"
                onMouseLeave={toggleIt}
                className="testbar testbar-open d-none d-lg-flex flex-column justify-content-between align-items-start"
                style={{ padding: "2.5rem 0px" }}
              >
                <img
                  src="https://app.dypius.com/static/media/navRadius.1b42ac66.svg"
                  className="nav-radius nav-radius-open"
                  alt=""
                />
                <div className="w-100">
                  <div className="d-flex w-100 justify-content-center align-items-center pb-5">
                    <Link aria-current="page" className="active" to="/">
                      <img
                        src="https://app.dypius.com/static/media/toolsLogoActive.2940d42d.svg"
                        alt=""
                        style={{ height: 40 }}
                      />
                    </Link>
                  </div>
                  <div
                    className="sidebar-container w-100 justify-content-center align-items-start d-flex flex-column gap-4"
                    style={{ gap: 35 }}
                  >
                    <div
                      className="sidebar-container w-100 accordion justify-content-center align-items-start d-flex flex-column gap-4"
                      id="accordionExample2"
                    >
                      <a href="/earn">
                        <div
                          id="Earn"
                          className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                        >
                          <img
                            src="https://app.dypius.com/static/media/earnIcon.1068fb71.svg"
                            alt=""
                            style={{ width: 32, height: 32 }}
                          />
                          <h3 className="sideitem-text">Earn</h3>
                        </div>
                      </a>
                      <a href="/governance">
                        <div
                          id="Governance"
                          className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                        >
                          <img
                            src="https://app.dypius.com/static/media/governanceIcon.ccda3f81.svg"
                            alt=""
                            style={{ width: 32, height: 32 }}
                          />
                          <h3 className="sideitem-text">Governance</h3>
                        </div>
                      </a>
                      <a href="/bridge">
                        <div
                          id="Bridge"
                          className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                        >
                          <img
                            src="https://app.dypius.com/static/media/bridgeIcon.e4ebb3f6.svg"
                            alt=""
                            style={{ width: 32, height: 32 }}
                          />
                          <h3 className="sideitem-text">Bridge</h3>
                        </div>
                      </a>
                      <div
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExplorer"
                        aria-expanded="false"
                        aria-controls="collapseExplorer"
                        id="headingExplorer"
                        className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center active-side-link"
                      >
                        <img
                          src="https://app.dypius.com/static/media/explorerIconActive.6f790a46.svg"
                          alt=""
                          style={{ width: 32, height: 32 }}
                        />
                        <div className="d-flex w-100 flex-row align-items-center justify-content-between">
                          <h3 className="active-text">Explorer</h3>
                          <img
                            src="https://app.dypius.com/static/media/accordionIndicator.1a72d8c0.svg"
                            alt="indicator"
                            id="indicator"
                          />
                        </div>
                      </div>
                      <div
                        id="collapseExplorer"
                        className="accordion-collapse open collapse"
                        aria-labelledby="headingExplorer"
                        data-bs-parent="#accordionExample2"
                        style={{}}
                      >
                        <div className="accordion-container d-flex flex-column gap-2 ms-5">
                          <a className="accordion-child" href="/pair-explorer">
                            Pair explorer
                          </a>
                          <a className="accordion-child" href="/pool-explorer">
                            Pool explorer
                          </a>
                          <a
                            className="accordion-child"
                            href="/big-swap-explorer"
                          >
                            Big Swap
                          </a>
                          <a className="accordion-child" href="/top-tokens">
                            Top Tokens
                          </a>
                          <a className="accordion-child" href="/farms">
                            Yields
                          </a>
                          <a className="accordion-child" href="/submit-info">
                            Submit Form
                          </a>
                        </div>
                      </div>
                      <div
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseProjects"
                        aria-expanded="true"
                        aria-controls="collapseProjects"
                        id="headingProjects"
                        className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                      >
                        <img
                          src="https://app.dypius.com/static/media/projectsIcon.14546df4.svg"
                          alt=""
                          style={{ width: 32, height: 32 }}
                        />
                        <div className="d-flex w-100 flex-row align-items-center justify-content-between">
                          <h3 className="sideitem-text">Projects</h3>
                          <img
                            src="https://app.dypius.com/static/media/accordionIndicator.1a72d8c0.svg"
                            alt="indicator"
                            id="indicator"
                          />
                        </div>
                      </div>
                      <div
                        id="collapseProjects"
                        className="accordion-collapse collapse open"
                        aria-labelledby="headingProjects"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-container d-flex flex-column gap-2 ms-5">
                          <a className="accordion-child" href="/launchpad">
                            Launchpad
                          </a>
                          <a className="accordion-child" href="/locker">
                            DYP Locker
                          </a>
                        </div>
                      </div>
                      <a href="/swap">
                        <div
                          id="Swap"
                          className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                        >
                          <img
                            src="https://app.dypius.com/static/media/swapIcon.a35aba21.svg"
                            alt=""
                            style={{ width: 32, height: 32 }}
                          />
                          <h3 className="sideitem-text">Swap</h3>
                        </div>
                      </a>
                      <a href="/news">
                        <div
                          id="News"
                          className="sidebar-item gap-3 p-2 d-flex active-width justify-content-start ms-4 align-items-center null"
                        >
                          <img
                            src="https://app.dypius.com/static/media/newsIcon.f78f16d2.svg"
                            alt=""
                            style={{ width: 32, height: 32 }}
                          />
                          <h3 className="sideitem-text">News</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
