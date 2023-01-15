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
          <h2 className="primary-text">Road to YieldTrust Success</h2>
          <p>
            As Rome wasn't built in a day, neither YieldTrust will be. Take a look at our current developments and stay tuned for what's to come.
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
                          <div className="card-plan-item-popular-tag-blur no-img" />
                          <div className="card-plan-item-popular-tag-text roadmap-status">
                            Finished
                          </div>
                        </div>
                      </div>
                      <div className="card-plan-item-title-wrapper">
                        <h2 className="title h3-size card-plan-item roadmap-header">
                          Pre-Launch (Q3 2022 - Q4 2022)
                        </h2>
                        
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
                            Product Conceptualisation
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
                            Financial Assessment
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
                            Team Formation
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
                            Development Begins
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
                            Development Milestones
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
                            Testnet Demo
                          </div>
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
                            className="card-plan-item-popular-tag-blur no-img"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text roadmap-status" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item roadmap-header"
                          aria-hidden="true"
                        >
                          Launch (Q1 2023)
                        </h2>
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
                            Official Launch DApp
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
                            Mainnet Deployment
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
                            Influencer Marketing
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
                            Multichain Staking
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
                            Partnership Announcements
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
                            Unique Referral Mechanism
                          </div>
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
                            className="card-plan-item-popular-tag-blur no-img"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text roadmap-status" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item roadmap-header"
                          aria-hidden="true"
                        >
                          Q2 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          YieldBot NFTs and YieldSwap (AMM)
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          We will market YieldBot for proprietary use through NFTs. First, we will convince the DeFi community of our invention. In due course, everyone will witness YieldBot's consistent yield output and simplistic use. Users may play with the options and specifications of the software and develop their own strategies. Become an early investor in YieldTrust and earn your whitelist spot in the NFT collection. Spots will be limited and dependent on the size of your stake and the time you're invested in our DApp. Take control of your funds and adapt the trading style to your liking to see the power of AI yourself!
                        </p>
                        <br />
                        <p>
                          YieldSwap is a multichain AMM offering every token available in our DApp. By the time it operates, we will have expanded our staking pools and accumulated enough funds in the treasury to support the swap. YieldSwap uses the cutting-edge technology to automatically acquire the best pricing for cryptocurrency swaps on BSC and other networks.
                        </p>
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
                            className="card-plan-item-popular-tag-blur no-img"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text roadmap-status" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item roadmap-header"
                          aria-hidden="true"
                        >
                          Q3 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          YieldTrust TGE and Derivatives Trading DEX
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          We will introduce a utility and governance token in one for YieldTrust. Name, ticker, and other tokenomics will be revealed in a dedicated announcement. The token is necessary as it's supposed to play a crucial role in our upcoming AI-powered hedge fund, where decision-making is driven by a decentralised autonomous organisation (DAO). Besides governance, further benefits of our token include ecosystem discounts, dividend distribution, other types of airdrops, private deals, and bonus daily ROI in our DApp. Users will need to stake our token to gain these privileges, and there will be specific tiers to mark the differences.
                        </p>
                        <br />
                        <p>
                          Furthermore, you will be able to trade with leverage up to 50 times on our platform using YieldTrust Derivatives. For transparency reasons, the initial money to sustain our trading DEX and aspire bigger ambitions outside of our main utility is made possible by our TGE and series funding. The leverage pairs will based on every available token in our DApp.
                        </p>
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
                            className="card-plan-item-popular-tag-blur no-img"
                            aria-hidden="true"
                          />
                          <div className="inprogress-text roadmap-status" aria-hidden="true">
                            In-Progress
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-plan-item-title-wrapper"
                        aria-hidden="true"
                      >
                        <h2
                          className="title h3-size card-plan-item roadmap-header"
                          aria-hidden="true"
                        >
                          Q4 2023
                        </h2>
                        <h2
                          className="title h3-size card-plan-item"
                          aria-hidden="true"
                        >
                          AI-Powered Decentralised Hedge Fund
                        </h2>
                        <p
                          className="paragraph card-plan-item-summary"
                          aria-hidden="true"
                        >
                          Last but certainly not least, we are setting up an AI-powered hedge fund governed by a decentralised autonomous organisation (DAO) consisting of YieldTrust users with a minimum staked contribution in our native token. Your stake will determine your influence in the DAO, amongst other advantages, whereas the AI members of the fund do the trading strategy selection and profit generation. Investors will be able to purchase shares in the hedge fund and receive dividends when payouts are made.
                        </p>
                        <br />
                        <p>
                          As a staker and a DAO member, you are also entitled to receive a portion of these  dividends (corresponding to your importance in the network). The AI members can be seen as "servants" of the fund, and needless to say, it's our most exciting invention of the year. We will ensure the DAO is constantly expanding, more secure, and more stable.
                        </p>  
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
              className="testimonials-left-arrow w-slider-arrow-left roadmap-slider"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div></div>
            </div>
            <div
              className="testimonials-right-arrow w-slider-arrow-right roadmap-slider"
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
