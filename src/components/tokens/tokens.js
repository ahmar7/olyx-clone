import React from "react";
import Perks from "../../assets/img/perk.svg";
import "./tokens.css";
const Tokens = () => {
  return (
    <div>
      <section className="section home-features wf-section">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="false"
          data-aos-once="true"
          className="container-medium-756px home-features"
        >
          <h2>
            <strong>Ecosystem Tokens</strong>
          </h2>
          <p className="paragraph home-features">
            Unlock the Potential of Ecosystem Now!
          </p>
        </div>
        <div className="container-default home-features w-container">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-layout-grid home-features-grid"
          >
            <div
              id="w-node-c15b2d10-61d0-ff7a-ac62-37f94830c9fb-11098043"
              className="card home-feature"
            >
              <img
                src={Perks}
                loading="eager"
                alt="Career Growth - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">Crowdfunding Trade</h3>
                <p className="paragraph card-home-feature">
                  Each crowdfunding venture is created and managed by an
                  individual who implements their trading plan. It functions
                  according to a smart contract to execute trade.
                </p>
              </div>
            </div>
            <div className="card home-feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c8e5909802c_icon-2-features-dark-template.svg"
                loading="eager"
                alt="Advanced Charts - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">AI SE-Analytic</h3>
                <p className="paragraph card-home-feature">
                  Dive deep into asset function and highlight all possible uses
                  of a token while considering consumer protection-related data
                  points.
                </p>
              </div>
            </div>
            <div className="card home-feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c66aa09802b_icon-1-features-dark-template.svg"
                loading="eager"
                alt="Real Time Trading - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">AI Dex Aggregator</h3>
                <p className="paragraph card-home-feature">
                  Every trade from the top performers, market makers, and funds
                  is at your fingertips! Get Lowest fee from our Aggregator !
                </p>
              </div>
            </div>
            <div className="card home-feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c419f098032_icon-4-features-dark-template.svg"
                loading="eager"
                alt="Stocks - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">AI Trading Bot</h3>
                <p className="paragraph card-home-feature">
                  Unlock the potential of DeFi with Olyx AI Trading Bot. With
                  our advanced AI Trading Bot, you can now maximize your profits
                  in DeFi without any manual effort.
                </p>
              </div>
            </div>
            <div className="card home-feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c4d56098033_icon-5-features-dark-template.svg"
                loading="eager"
                alt="Currencies - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">
                  <strong>Staking &amp; Governance</strong>
                </h3>
                <p className="paragraph card-home-feature">
                  Holders of the $OLYX token can participate in the ecosystem by
                  voting on future plans and earning a share of platform
                  revenue.
                </p>
              </div>
            </div>
            <div className="card home-feature">
              <img
                src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c2866098030_icon-6-features-dark-template.svg"
                loading="eager"
                alt="Cryptocurrencies - Dark X Webflow Template"
                className="image card-home-feature"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">
                  <strong>Cross-Chain Bridge</strong>
                </h3>
                <p className="paragraph card-home-feature">
                  Securely and conveniently move funds between multiple
                  blockchain networks without the hassle or cost of traditional
                  methods.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-vc home-features">
            <div className="_2-buttons-wrapper">
              <div className="button-primary-gradient _2-buttons">
                <a href="#" className="button-primary w-button">
                  Get started
                </a>
              </div>
              <a
                href="/utility-pages/extra-components/features"
                className="button-secondary _2-buttons w-button"
              >
                More Detail
              </a>
            </div>
          </div>
          <div className="bg-gradient-blur-wrapper big">
            <div className="bg-gradient-blur-circle-3 pink big" />
            <div className="bg-gradient-blur-circle-2 blue-2" />
            <div className="bg-gradient-blur-circle-1 purple-2 big" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokens;
