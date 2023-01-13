import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./testimonial.css";
import Olyx from "../../assets/img/Olyx.png";
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="section testimonials wf-section">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-once="true"
          className="container-medium-603px testimonials"
        >
          <h2>Timeline &amp; Direction</h2>
          <p>
            Olyx vision is an ecosystem that encompasses the many opportunities
            of DeFi, but only by building the best versions of each.
          </p>
        </div>
        <div className="container-default testimonials w-container">
          <div
            data-delay={4000}
            data-animation="outin"
            className="testimonials-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-once="true"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="07d13f66-9fd3-7d59-75eb-cfc6bef4cd6e"
            data-autoplay-limit={0}
            data-nav-spacing={3}
            data-duration={500}
            data-infinite="true"
            role="region"
            aria-label="carousel"
          >
            <div
              className="card testimonial w-slider-mask"
              id="w-slider-mask-0"
            >
              <div
                className="testimonial-slide w-slide"
                aria-label="1 of 5"
                role="group"
                style={{ transform: "translateX(0px)", opacity: 1 }}
              >
                <div className="card-testimonial-wrapper">
                  <div className="card-plan-item-content">
                    <div className="card-plan-item-content-top">
                      <div className="card-plan-item-icon-content">
                        <div className="image-wrapper card-plan-item-icon">
                          <img
                            width={510}
                            loading="eager"
                            src={Olyx}
                            alt=""
                            className="image card-plan-item-icon"
                          />
                        </div>
                        <div className="card-plan-item-popular-tag-wrapper">
                          <div className="card-plan-item-popular-tag-blur" />
                          <div className="card-plan-item-popular-tag-text">
                            Live
                          </div>
                        </div>
                      </div>
                      <div className="card-plan-item-title-wrapper">
                        <h2 className="title h3-size card-plan-item">
                          Pre-Launch
                        </h2>
                        <p className="paragraph card-plan-item-summary">
                          Pre-launch events were an early sign of the protocol's
                          potential.
                        </p>
                      </div>
                    </div>
                    <div className="card-plan-item-content-bottom">
                      <div className="w-layout-grid card-plan-item-features-grid">
                        <div className="card-plan-item-feature-wrapper">
                          <div className="card-plan-item-feature-icon-wrapper">
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                            />
                          </div>
                          <div className="card-plan-item-feature-text">
                            Project Research
                          </div>
                        </div>
                        <div className="card-plan-item-feature-wrapper">
                          <div className="card-plan-item-feature-icon-wrapper">
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                            />
                          </div>
                          <div className="card-plan-item-feature-text">
                            Website Development
                          </div>
                        </div>
                        <div className="card-plan-item-feature-wrapper">
                          <div className="card-plan-item-feature-icon-wrapper">
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                            />
                          </div>
                          <div className="card-plan-item-feature-text">
                            Community Building
                          </div>
                        </div>
                        <div className="card-plan-item-feature-wrapper">
                          <div className="card-plan-item-feature-icon-wrapper">
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                            />
                          </div>
                          <div className="card-plan-item-feature-text">
                            Smart Contract Development
                          </div>
                        </div>
                        <div className="card-plan-item-feature-wrapper">
                          <div className="card-plan-item-feature-icon-wrapper">
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c7932098097_icon-1-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                            />
                          </div>
                          <div className="card-plan-item-feature-text">
                            AI-based trading
                          </div>
                        </div>
                      </div>
                      <div className="card-plan-item-button-wrapper">
                        <div className="button-primary-gradient full-width">
                          <a href="#" className="button-primary w-button">
                            See the Full OLYX Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-slide w-slide"
                aria-label="2 of 5"
                role="group"
                aria-hidden="true"
                style={{
                  transform: "translateX(0px)",
                  opacity: 1,
                  visibility: "hidden",
                }}
              >
                <div className="card-testimonial-wrapper" aria-hidden="true">
                  <div className="card-plan-item-content" aria-hidden="true">
                    <div
                      className="card-plan-item-content-top"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-icon-content"
                        aria-hidden="true"
                      >
                        <div
                          className="image-wrapper card-plan-item-icon"
                          aria-hidden="true"
                        >
                          <img
                            width={510}
                            loading="eager"
                            src={Olyx}
                            alt=""
                            className="image card-plan-item-icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="card-plan-item-popular-tag-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-popular-tag-blur"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          Launch
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          Break ground building the first elements of the Olyx
                          Ecosystem.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-plan-item-content-bottom"
                      aria-hidden="true"
                    >
                      <div
                        className="w-layout-grid card-plan-item-features-grid"
                        aria-hidden="true"
                      >
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            Active Buy Back &amp;&nbsp;Burn Feature
                          </div>
                        </div>
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            PancakeSwap Listing
                          </div>
                        </div>
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            Community Contest
                          </div>
                        </div>
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            Community Building
                          </div>
                        </div>
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c0ed6098096_icon-2-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            CoinMarketCap / CoinGecko Listing
                          </div>
                        </div>
                        <div
                          className="card-plan-item-feature-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-feature-icon-wrapper"
                            aria-hidden="true"
                          >
                            <img
                              src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a5add32cb21c7932098097_icon-1-check-dark-template.svg"
                              loading="eager"
                              alt="Check Icon - Dark X Webflow Template"
                              className="image card-plan-item-feature-icon"
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="card-plan-item-feature-text"
                            aria-hidden="true"
                          >
                            Launch Dapps
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-button-wrapper"
                        aria-hidden="true"
                      >
                        <div
                          className="button-primary-gradient full-width"
                          aria-hidden="true"
                        >
                          <a
                            href="#"
                            className="button-primary w-button"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            See the Full OLYX Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-slide w-slide"
                aria-label="3 of 5"
                role="group"
                aria-hidden="true"
                style={{
                  transform: "translateX(0px)",
                  opacity: 1,
                  visibility: "hidden",
                }}
              >
                <div className="card-testimonial-wrapper" aria-hidden="true">
                  <div className="card-plan-item-content" aria-hidden="true">
                    <div
                      className="card-plan-item-content-top"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-icon-content"
                        aria-hidden="true"
                      >
                        <div
                          className="image-wrapper card-plan-item-icon"
                          aria-hidden="true"
                        >
                          <img
                            width={510}
                            loading="eager"
                            src={Olyx}
                            alt=""
                            className="image card-plan-item-icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="card-plan-item-popular-tag-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-popular-tag-blur"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          Q2 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          CEX and Mainnet OLYX DEX
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          List Olyx on top centralized exchanges, launch the
                          mainnet version of the Olyx DEX, and integrate trading
                          vaults into the internal DEX, and Apply for a Certik
                          audit, and upgrade the DApp to version 2 with higher
                          leverage
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-plan-item-content-bottom"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-button-wrapper"
                        aria-hidden="true"
                      >
                        <div
                          className="button-primary-gradient full-width"
                          aria-hidden="true"
                        >
                          <a
                            href="#"
                            className="button-primary w-button"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            See the Full OLYX Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-slide w-slide"
                aria-label="4 of 5"
                role="group"
                aria-hidden="true"
                style={{
                  transform: "translateX(0px)",
                  opacity: 1,
                  visibility: "hidden",
                }}
              >
                <div className="card-testimonial-wrapper" aria-hidden="true">
                  <div className="card-plan-item-content" aria-hidden="true">
                    <div
                      className="card-plan-item-content-top"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-icon-content"
                        aria-hidden="true"
                      >
                        <div
                          className="image-wrapper card-plan-item-icon"
                          aria-hidden="true"
                        >
                          <img
                            width={510}
                            loading="eager"
                            src={Olyx}
                            alt=""
                            className="image card-plan-item-icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="card-plan-item-popular-tag-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-popular-tag-blur"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          Q1 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          Launch of the Strategy Trading and Copy Trading
                          platforms
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          Is your trading strategy successful but you don't have
                          the large capital to back it? No problem. Share your
                          strategy, provide a description, and let other traders
                          use it while you earn fees from their winning trades.
                          If you don't have the time to constantly monitor the
                          markets and conduct research, you can simply copy the
                          strategies of more experienced traders. All you need
                          to do is pay a small fee to the strategy creator when
                          your trade is closed with a profit.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-plan-item-content-bottom"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-button-wrapper"
                        aria-hidden="true"
                      >
                        <div
                          className="button-primary-gradient full-width"
                          aria-hidden="true"
                        >
                          <a
                            href="#"
                            className="button-primary w-button"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            See the Full OLYX Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="testimonial-slide w-slide"
                aria-label="5 of 5"
                role="group"
                aria-hidden="true"
                style={{
                  transform: "translateX(0px)",
                  opacity: 1,
                  visibility: "hidden",
                }}
              >
                <div className="card-testimonial-wrapper" aria-hidden="true">
                  <div className="card-plan-item-content" aria-hidden="true">
                    <div
                      className="card-plan-item-content-top"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-icon-content"
                        aria-hidden="true"
                      >
                        <div
                          className="image-wrapper card-plan-item-icon"
                          aria-hidden="true"
                        >
                          <img
                            width={510}
                            loading="eager"
                            src={Olyx}
                            alt=""
                            className="image card-plan-item-icon"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="card-plan-item-popular-tag-wrapper"
                          aria-hidden="true"
                        >
                          <div
                            className="card-plan-item-popular-tag-blur"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          Q4 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          The world's First Fully Automated Hedge Fund
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          The world's first fully automated hedge fund, governed
                          by a decentralized autonomous organization (DAO)
                          consisting entirely of artificial intelligence (AI)
                          members, is being launched.The Olyx team is working on
                          creating a virtual hedge fund that will be managed by
                          a decentralized autonomous organization (DAO) made up
                          of multiple artificial intelligence (AI) members with
                          different specialties and trading strategies. The DAO
                          will start with three AI members, and more will be
                          added when strong candidates are identified. This will
                          ensure the DAO is always expanding, more secure, and
                          more stable. Investors will be able to purchase shares
                          in the hedge fund and receive dividends when payouts
                          are made. All investments made by the DAO will be
                          subject to unanimous voting by its AI members.
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-plan-item-content-bottom"
                      aria-hidden="true"
                    >
                      <div
                        className="card-plan-item-button-wrapper"
                        aria-hidden="true"
                      >
                        <div
                          className="button-primary-gradient full-width"
                          aria-hidden="true"
                        >
                          <a
                            href="#"
                            className="button-primary w-button"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            See the Full OLYX Roadmap
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-live="off"
                aria-atomic="true"
                className="w-slider-aria-label"
                data-wf-ignore
              />
            </div>
            <div
              className="testimonials-left-arrow w-slider-arrow-left"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div></div>
            </div>
            <div
              className="testimonials-right-arrow w-slider-arrow-right"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
            >
              <div></div>
            </div>
            <div className="slide-nav w-slider-nav w-round">
              <div
                className="w-slider-dot w-active"
                data-wf-ignore
                aria-label="Show slide 1 of 5"
                aria-pressed="true"
                role="button"
                tabIndex={0}
                style={{ marginLeft: "3px", marginRight: "3px" }}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore
                aria-label="Show slide 2 of 5"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: "3px", marginRight: "3px" }}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore
                aria-label="Show slide 3 of 5"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: "3px", marginRight: "3px" }}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore
                aria-label="Show slide 4 of 5"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: "3px", marginRight: "3px" }}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore
                aria-label="Show slide 5 of 5"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: "3px", marginRight: "3px" }}
              />
            </div>
          </div>
          <div
            className="bg-gradient-blur-wrapper big"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)       rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-gradient-blur-circle-3 pink big" />
            <div className="bg-gradient-blur-circle-2 blue-2" />
            <div className="bg-gradient-blur-circle-1 purple-2 big" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
