import React from "react";

const MobileBar = () => {
  return (
    <div
      className="container-fluid mobile-sidebar justify-content-center align-items-center d-flex d-lg-none"
      id="mobileMenu"
    >
      <div className="row w-100">
        <a className="col" href="/earn">
          <div className="d-flex align-items-center sidebar-item false p-2 justify-content-center">
            <img
              src="https://app.dypius.com/static/media/earnIcon.1068fb71.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </a>
        <a className="col" href="/governance">
          <div className="d-flex align-items-center sidebar-item false p-2 justify-content-center">
            <img
              src="https://app.dypius.com/static/media/governanceIcon.ccda3f81.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </a>
        <a className="col" href="/bridge">
          <div className="d-flex align-items-center sidebar-item false p-2 justify-content-center">
            <img
              src="https://app.dypius.com/static/media/bridgeIcon.e4ebb3f6.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </a>
        <div className="col">
          <div className="d-flex align-items-center sidebar-item false p-2 justify-content-center">
            <img
              src="https://app.dypius.com/static/media/explorerIcon.cebe4ea1.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center sidebar-item false p-2 justify-content-center">
            <img
              src="https://app.dypius.com/static/media/moreIcon.53be86ec.svg"
              width={25}
              height={25}
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "5%", width: "100%" }}>
        <div>
          <div
            className="explorer-modal false d-flex flex-column gap-2  p-3"
            id="explorerModal"
          >
            <div className="d-flex w-100 justify-content-end py-3">
              <img
                src="https://app.dypius.com/static/media/xMark.97d8a88a.svg"
                alt=""
              />
            </div>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/pair-explorer"
            >
              <h3 className="sideitem-text">Pair Explorer</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/pool-explorer"
            >
              <h3 className="sideitem-text">Pool explorer</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/big-swap-explorer"
            >
              <h3 className="sideitem-text">Big swap</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/top-tokens"
            >
              <h3 className="sideitem-text">Top tokens</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/farms"
            >
              <h3 className="sideitem-text">Yields</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/submit-info"
            >
              <h3 className="sideitem-text">Submit form</h3>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "5%", width: "100%" }}>
        <div>
          <div
            className="explorer-modal false d-flex flex-column gap-2 p-3"
            id="moreModal"
          >
            <div className="d-flex w-100 justify-content-end">
              <img
                src="https://app.dypius.com/static/media/xMark.97d8a88a.svg"
                alt=""
              />
            </div>
            <div className="sidebar-item active-side-link w-100 p-3">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/projectsIconActive.ca91a723.svg"
                  alt=""
                />
                <h3 className="active-text">Projects</h3>
              </div>
            </div>
            <div className="mobile-modal-item d-flex flex-column justify-content-between align-items-center w-100 pb-3">
              <a
                className="d-flex justify-content-between align-items-center w-100 py-2"
                href="/launchpad"
              >
                <h3 className="sideitem-text">Launchpad</h3>
                <img
                  src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                  alt=""
                />
              </a>
              <a
                className="d-flex justify-content-between align-items-center w-100 py-2"
                href="/locker"
              >
                <h3 className="sideitem-text">DYP Locker</h3>
                <img
                  src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                  alt=""
                />
              </a>
            </div>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/swap"
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/swapIcon.a35aba21.svg"
                  alt=""
                />
                <h3 className="sideitem-text">Swap</h3>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
            <a
              className="mobile-modal-item d-flex justify-content-between align-items-center w-100 py-3"
              href="/news"
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/newsIcon.f78f16d2.svg"
                  alt=""
                />
                <h3 className="sideitem-text">News</h3>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
