import React, { useEffect, useState } from "react";
import "./faqs.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Faqs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);
  let togglefaq1 = () => {
    if (faq1 == false) {
      setFaq1(true);
    } else {
      setFaq1(false);
    }
  };
  let togglefaq2 = () => {
    if (faq2 == false) {
      setFaq2(true);
    } else {
      setFaq2(false);
    }
  };
  let togglefaq3 = () => {
    if (faq3 == false) {
      setFaq3(true);
    } else {
      setFaq3(false);
    }
  };
  let togglefaq4 = () => {
    if (faq4 == false) {
      setFaq4(true);
    } else {
      setFaq4(false);
    }
  };
  let togglefaq5 = () => {
    if (faq5 == false) {
      setFaq5(true);
    } else {
      setFaq5(false);
    }
  };
  let togglefaq6 = () => {
    if (faq6 == false) {
      setFaq6(true);
    } else {
      setFaq6(false);
    }
  };
  let togglefaq7 = () => {
    if (faq7 == false) {
      setFaq7(true);
    } else {
      setFaq7(false);
    }
  };
  let togglefaq8 = () => {
    if (faq8 == false) {
      setFaq8(true);
    } else {
      setFaq8(false);
    }
  };
  return (
    <div>
      <section className="section faqs wf-section">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          className="container-medium-800px faqs"
        >
          <div
            data-w-id="edfce28c-d1e4-9bdd-e4a7-d78f5ce1c212"
            style={{
              transform:
                "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="faqs-title-wrapper"
          >
            <h2 className="title faqs primary-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div
            data-w-id="edfce28c-d1e4-9bdd-e4a7-d78f5ce1c219"
            style={{
              transform:
                "translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="faqs-wrapper"
          >
            <div className="card faq " onClick={togglefaq1}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  What is YieldTrust.ai??
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq1 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq1
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  YieldTrust offers a platform that gives you access to
                  trailblazing investment strategies through our AI-powered
                  YieldBot, allowing you to earn up to 2.2% BUSD per day
                  passively. Users are entitled to claim rewards every 24 hours.{" "}
                  <span className="primary-text">
                    Welcome to the new era of crypto trading and wealth
                    accumulation.
                  </span>
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq2}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Who is the team behind YieldTrust?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq2 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq2
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  The human team behind YieldTrust aren't just traders – they
                  are a modest group of highly skilled quants – specialists in
                  combining market data analysis, mathematics, and coding – who
                  constantly progress the code of YieldBot and its deep learning
                  core. We are here to bridge our expertise in artificial
                  intelligence (AI), decentralised finance (DeFi), and
                  high-performance crypto trading to offer you this unique
                  opportunity. On top of that, we also brought on some
                  experienced marketers, designers, and our CEO, who will
                  position the project for success in a highly competitive
                  market.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq3}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">What is YieldBot?</h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq3 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq3
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  YieldBot's deep learning core is programmed to analyse the
                  crypto markets and – in milliseconds - make its own trading
                  decisions, autonomously choosing from hundreds of trading
                  methods and chaining them together to create unique strategies
                  - achieving an exhilarating performance. It can realise 70
                  times more transactions with 25 times more profitable results
                  than any human trader ever could, and – since it is constantly
                  reiterating and rewriting itself, learning from its own
                  success – it is getting better and better with every trade
                  made.
                </p>

                <br />
                <p>
                  The figures for the last four months of YieldBot speak for
                  themselves: an average daily yield of 2.6% and no losing
                  trading days. In fact, the max drawdown on a trade was at most
                  0.5%, which is probably one of the best “performance & risk
                  management” results ever! Although the bot had a rocky start,
                  having to adjust to the crypto markets, reaching this
                  milestone was a sign for us to take this innovation to the
                  public. It has been in the making for over two years!
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq4}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  How do I start earning passive income?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq4 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq4
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  Simply head over to our DApp, connect your wallet, and deposit
                  funds into the BUSD pool (staking tab) to start earning
                  passively. The process is summarised in our docs. The minimum
                  deposit is 100 BUSD.
                </p>
              </div>
            </div>
            <div className="card faq last" onClick={togglefaq5}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Do you make any guarantees?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq5 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq5
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  Our bot has been running very successfully for over four
                  months, averaging well above the 2.2% daily return we offer
                  you. No matter how promising this may seem for the future, the
                  returns are only predictable but not guaranteed. The daily ROI
                  will remain at 2.2% unless the bot consistently underperforms,
                  meaning the daily ROI is lower than the average for several
                  days, which statistically doesn't happen often.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq6}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Is there a min claim amount? When can I claim rewards?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq6 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq6
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  There is no minimum claim amount. Users are entitled to claim
                  rewards every 24 hours, allowing anyone to earn back their
                  deposit as quickly as they want.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq7}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Can I request a full refund on my deposit?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq7 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq7
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  We have a 15-day lockup before you're free to withdraw
                  (refund) your initial deposit. There's no fee in case of a
                  refund, and your refund is processed in up to three working
                  days. Please note that you should always claim your rewards
                  before doing so. The lockup is in place to ensure our bot has
                  enough time to produce sufficient returns covering the
                  withdrawals while supporting new deposits coming in. Once your
                  refund is completed, you can not use the same wallets to make
                  deposits and earn rewards, and you need to use a whole new
                  wallet.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq8}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Can I get my own YieldBot?
                </h3>
                <div className="card-faq-icon-gradient no-img">
                  <div className="card-faq-icon-wrapper card-faq-icon-bg">
                    <div className="card-faq-icon-1" />
                    <div className={faq8 ? "" : "card-faq-icon-2"} />
                  </div>
                </div>
              </div>
              <div
                className={
                  faq8
                    ? "card-faq-content-bottom show-toggle"
                    : "card-faq-content-bottom"
                }
                style={{
                  height: "0px",
                  opacity: 1,
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)   rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  display: "none",
                }}
              >
                <p className="paragraph cavt card-faq">
                  We intend to patent our product and market it to the broader
                  public after we convince the DeFi community of our invention.
                  In this case, we will prioritise our early investors. In due
                  course, everyone will witness YieldBot's consistent yield
                  output and simplistic use. The bot itself will be available
                  for individual use through NFTs. Users may play with the
                  options and specifications of the software and develop their
                  own strategies. Become an early investor in YieldTrust and
                  earn your whitelist spot in the NFT collection. Spots will be
                  limited and dependent on the size of your stake and the time
                  you're invested in our DApp.
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-blur-wrapper faqs"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-gradient-blur-circle-3" />
            <div className="bg-gradient-blur-circle-2 blue left" />
            <div className="bg-gradient-blur-circle-1 pink" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
