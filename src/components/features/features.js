import React from "react";
import Template from "../../assets/img/template.jpg";
const Features = () => {
  return (
    <div>
      <section className="section features wf-section">
        <div className="container-default features w-container">
          <div
            data-w-id="f01fdbe9-47bc-c062-bb6a-5e74c9a5e3b8"
            style={{
              opacity: 1,
            }}
            className="w-layout-grid features-grid"
          >
            <div
              id="w-node-f01fdbe9-47bc-c062-bb6a-5e74c9a5e3b9-11098043"
              className="card feature-featured"
            >
              <div className="card-feature-featured-content">
                <h2 className="title card-feature-featured">
                  Crowdfunding Trade
                </h2>
                <p className="paragraph card-feature-featured">
                  Users can publish their trading plans or participate in other
                  trading plan. Olyx aims to help traders focus on what they are
                  best at, while also generating profits for others from their
                  idle money.
                </p>
                <p className="paragraph card-feature-featured">
                  There will be strict conditions to apply to be Olyx Trading
                  Publisher.
                </p>
              </div>
              <div className="image-wrapper card-feature-featured">
                <img
                  src={Template}
                  loading="eager"
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, (max-width: 991px) 716px, (max-width: 1919px) 42vw, 521px"
                  alt="Real Time Trading - Dark X Webflow Template"
                  className="image card-feature-featured"
                />
              </div>
            </div>
          </div>
          <div className="w-layout-grid grid-3">
            <div
              id="w-node-e982e2c1-1eb6-cbc0-695e-52c111b8dc92-11098043"
              className="card feature"
            >
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a699cb472ffc4777d5b589_download%201.svg"
                loading="eager"
                alt=""
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Create Fundraising</h3>
              </div>
            </div>
            <div className="card feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a699cb472ffc4777d5b589_download%201.svg"
                loading="eager"
                alt=""
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Waiting for Deployment</h3>
              </div>
            </div>
            <div className="card feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a699cb472ffc4777d5b589_download%201.svg"
                loading="eager"
                alt=""
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Building Position</h3>
              </div>
            </div>
            <div className="card feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a699cb472ffc4777d5b589_download%201.svg"
                loading="eager"
                alt=""
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Deployed</h3>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-blur-wrapper features-1"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-gradient-blur-circle-3 pink" />
            <div className="bg-gradient-blur-circle-2 blue" />
            <div className="bg-gradient-blur-circle-1 purple" />
          </div>
          <div
            className="bg-gradient-blur-wrapper features-2"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-gradient-blur-circle-3 pink" />
            <div className="bg-gradient-blur-circle-2 blue-2" />
            <div className="bg-gradient-blur-circle-1 purple" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
