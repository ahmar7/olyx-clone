import React from "react";

const Launchpad = () => {
  return (
    <div className="right-side-wrapper d-flex flex-column flex-lg-row flex-xxl-column gap-4">
      <div className="launchpad-section-wrapper d-flex flex-column gap-3 gap-xxl-1">
        <h6 className="header">Launchpad</h6>
        <a className="launchpad-wrapper" href="#">
          <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
            <img
              src="https://app.dypius.com/static/media/launchpadbg.84b19822.webp"
              alt=""
              className="launchpadbg"
            />
            <div
              className="d-flex gap-2 align-items-center justify-content-between w-100"
              style={{ padding: "0px 10px 4px" }}
            >
              <h6
                style={{
                  color: "rgb(179, 185, 221)",
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: 16,
                }}
              >
                Launch your project with Dypius now!
              </h6>
              <img
                src="https://app.dypius.com/static/media/filledArrow.babdca22.svg"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
      <div className="chainlink-wrapper">
        <div className="d-flex flex-column gap-2 justify-content-between">
          <div>
            <h6 className="chainlinktitle">
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="https://app.dypius.com/static/media/chainlinkLogo.eb442d78.svg"
                  className="pe-1"
                  alt=""
                  style={{ width: 20, height: 20 }}
                />
                Data Feed by Chainlink
              </a>
            </h6>
          </div>
          <div className="chbottomwrapper">
            <div>
              <h6 className="d-flex align-items-center gap-2 totalpaidtxt text-white">
                <img
                  src="https://app.dypius.com/static/media/ethereumIcon.1578d011.svg"
                  alt=""
                />
                9,194 ETH
              </h6>
            </div>
            <div>
              <h6 className="d-flex align-items-center gap-2 totalpaidtxt text-white">
                <img
                  src="https://app.dypius.com/static/media/bnbIcon.f0de87d3.svg"
                  alt=""
                />
                10,233 BNB
              </h6>
            </div>
            <div>
              <h6 className="d-flex align-items-center gap-2 totalpaidtxt text-white">
                <img
                  src="https://app.dypius.com/static/media/avaxIcon.de7af07f.svg"
                  alt=""
                />
                27,337 AVAX
              </h6>
            </div>
          </div>
          <div>
            <span
              style={{
                fontWeight: 400,
                fontSize: "10",
                color: "rgb(192, 201, 255)",
              }}
            >
              Total rewards paid to users
            </span>
            <h6
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "rgb(247, 247, 252)",
                letterSpacing: "0.05em",
              }}
            >
              <span
                className="count-up"
                style={{
                  fontWeight: 300,
                  fontSize: "18px",
                  color: "rgb(247, 247, 252)",
                  letterSpacing: "0.05em",
                }}
              >
                $17,480,844.41
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="faq-items-wrapper d-flex flex-column" style={{ gap: 11 }}>
        <h6 className="header">FAQs</h6>
        <div className="faq-grid">
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">What is Dypius Stake?</h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">What is the Reinvest function?</h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">What is APR?</h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">What is Dypius Vault?</h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">What is Dypius Bridge?</h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
          <a className="faq-wrapper" href="#">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src="https://app.dypius.com/static/media/faqlogo.5e649c03.svg"
                  alt=""
                />
                <h6 className="faqtitle">
                  Will my lock period reset if I deposit ad...
                </h6>
              </div>
              <img
                src="https://app.dypius.com/static/media/rightlogo.2e605b51.svg"
                alt=""
                style={{ position: "relative", right: 5 }}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
