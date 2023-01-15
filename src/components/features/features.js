import React from "react";
// import "./features.css";
import Template from "../../assets/img/template.jpg";
const Features = () => {
  return (
    <div>
      <section className="section features wf-section">
        <div className="container-default features w-container">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-mirror="true"
            className="w-layout-grid features-grid"
          >
            <div
              id="w-node-f01fdbe9-47bc-c062-bb6a-5e74c9a5e3b9-11098043"
              className="card feature-featured card-design"
            >
              <div className="card-feature-featured-content">
                <h2 className="title card-feature-featured">
                  Your financial freedom starts <span className="primary-text">today.</span>
                </h2>
                <p className="paragraph card-feature-featured">
                    Gain access to trailblazing investment strategies through our AI-powered bot. Earn up to 2.2% BUSD per day while entitled to claim rewards daily. <span className="primary-text">Welcome to the new era of trading and wealth accumulation.</span> Sit back and start earning passive income today in one click. YieldTrust aims to create awareness about AI and crypto by showcasing their enormous potential through our innovations.
                </p>

                <br />
                <div
              id="w-node-_11c7ff4f-b854-a2a7-75b3-008a8664fa7a-11098043"
              className="button-primary-gradient _2-buttons no-img"
            >
              <a href="#" className="button-primary w-button learn-more">
                Get Started
              </a>
            </div>
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
              className="card feature card-design"
            >
              <div className="card-feature-content">
                <h3 className="title card-feature">1. Enter the DApp</h3>
              </div>
            </div>
            <div className="card feature card-design">
              <div className="card-feature-content">
                <h3 className="title card-feature">2. Connect Your Wallet</h3>
              </div>
            </div>
            <div className="card feature card-design">
              <div className="card-feature-content">
                <h3 className="title card-feature">3. Stake Your Funds</h3>
              </div>
            </div>
            <div className="card feature card-design">
              <div className="card-feature-content">
                <h3 className="title card-feature">4. Enjoy Rewards Daily</h3>
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
