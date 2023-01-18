import React from "react";

const Explore = () => {
  return (
    <div className="d-flex flex-column gap-3 gap-lg-4 justify-content-between dashboard-cards-wrapper">
      <a className="explorercard-wrapper d-flex position-relative" href="#">
        <div
          className="purplediv"
          style={{ background: "rgb(136, 144, 196)" }}
        />
        <div className="col-12 col-lg-6 d-flex flex-column gap-3 justify-content-between">
          <div className=" d-flex justify-content-between gap-2 align-items-center">
            <h6 className="explorercard-title d-flex gap-2 align-items-center">
              <img
                src="https://app.dypius.com/static/media/zoom.b64c4f4b.svg"
                alt=""
              />{" "}
              Explorer
            </h6>
            <div className="d-flex flex-column gap-0" />
          </div>
          <div>
            <h6 className="explorercard-desc">
              Follow the latest trends, discover new tokens, and get data in
              real-time.
            </h6>
          </div>
          <div className="">
            <h6 className="explorercard-btntext d-flex gap-2 align-items-center">
              Explore more{" "}
              <img
                src="https://app.dypius.com/static/media/filledarrow.a441e778.svg"
                alt=""
              />
            </h6>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img
            src="https://app.dypius.com/static/media/explorerChart.9465bccd.webp"
            className="explorer-chart"
            alt=""
          />
        </div>
      </a>
      <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
        <a className="govcard-wrapper" href="#">
          <div
            className="purplediv"
            style={{ background: "rgb(136, 144, 196)" }}
          />
          <div className="d-flex flex-column gap-2 justify-content-between">
            <div className="">
              <h6 className="govcard-title d-flex justify-content-between gap-2 align-items-center">
                Governance{" "}
                <img
                  src="https://app.dypius.com/static/media/gov-logo.f9545d6d.svg"
                  alt=""
                />
              </h6>
            </div>
            <div>
              <div>
                <h6 className="governancecard-desc">
                  DYP token holders can participate in Dypius governance
                  proposals.
                </h6>
              </div>
              <div className="">
                <h6 className="govcard-btntext d-flex justify-content-end gap-2 align-items-center">
                  <img
                    src="https://app.dypius.com/static/media/filledarrow.a41baa76.svg"
                    alt=""
                  />
                </h6>
              </div>
            </div>
          </div>
        </a>
        <a className="bridgecard-wrapper" href="#">
          <div
            className="purplediv"
            style={{ background: "rgb(136, 144, 196)" }}
          />
          <div className="d-flex flex-column gap-2 justify-content-between">
            <div className="">
              <h6 className="bridgecard-title d-flex justify-content-between gap-2 align-items-center">
                Bridge{" "}
                <img
                  src="https://app.dypius.com/static/media/bridge-logo.cff1a699.svg"
                  alt=""
                />
              </h6>
            </div>
            <div>
              <div>
                <h6 className="bridgecard-desc">
                  Bridge tokens between supported chains instantly and securely.
                </h6>
              </div>
              <div className="">
                <h6 className="bridgecard-btntext d-flex justify-content-end gap-2 align-items-center">
                  <img
                    src="https://app.dypius.com/static/media/filledarrow.a41baa76.svg"
                    alt=""
                  />
                </h6>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Explore;
