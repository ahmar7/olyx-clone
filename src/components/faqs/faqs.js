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
            <h2 className="title faqs">Frequently Asked Question</h2>
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
                <h3 className="title h4-size card-faq">What is Olyx?</h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  Olyx is cryptocurrency trading platform that is built on the
                  Binance Smart Chain. It features an AI bot named Jarvis that
                  helps traders make informed investment decisions, and it also
                  has a crowdfunding trade component that allows investors to
                  contribute funds to cryptocurrency trading vaults managed by
                  individual traders.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq2}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  What is the cross-chain bridge on Olyx?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  The cross-chain bridge on Olyx is a system that allows users
                  to transfer their cryptocurrency assets between the Olyx
                  platform and other blockchain networks. This can be useful for
                  users who want to access a wider range of cryptocurrency
                  assets or take advantage of different features or protocols on
                  different blockchains.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq3}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  How does governance work on Olyx?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  On Olyx, governance is accomplished through the use of smart
                  contracts and a decentralized voting system. Users of the
                  platform can propose changes to the platform's protocol or
                  policies by creating a governance proposal and submitting it
                  for vote. Other users can then review the proposal and cast
                  their votes using their staked Jarvis NFTs. The more NFTs a
                  user has staked, the more influence their vote will have. Once
                  a proposal has received a sufficient number of votes, it will
                  be implemented or rejected based on the outcome of the vote.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq4}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  How will the crowdfunding-trade be executed?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  The trader creates a trading vault and sets its parameters.The
                  trader promotes the trading vault to potential
                  investors.Investors contribute funds to the trading vault.The
                  trader executes the trade using the funds in the vault.The
                  trader continues to manage the trading vault and report on its
                  performance.
                </p>
              </div>
            </div>
            <div className="card faq last" onClick={togglefaq5}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  What happens when an investor makes investment in a
                  crowdfunding vault?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  The investor contributes funds to the trading vault.The trader
                  uses the funds in the vault to execute trades, with the goal
                  of generating profits for the investors.The trader continues
                  to manage the vault, executing additional trades as needed and
                  reporting on its performance.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq6}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  What are the requirements for being a trading vault
                  publishers?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  To become a trading vault publisher on the Olyx platform, an
                  individual trader is required to hold a certain amount of
                  tokens and have a maximum vault capacity that decreases as
                  their reputation on the platform grows. This approach is
                  intended to align the interests of the trader and the
                  investors and encourage the trader to continue to perform
                  well.
                </p>
              </div>
            </div>
            <div className="card faq" onClick={togglefaq7}>
              <div className="card-faq-content-top">
                <h3 className="title h4-size card-faq">
                  Who is behind the Olyx project?
                </h3>
                <div className="card-faq-icon-gradient">
                  <div className="card-faq-icon-wrapper">
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
                <p className="paragraph card-faq">
                  The Olyx project is led experienced programmers, marketing
                  professionals, and researchers with at least four years of
                  experience in the cryptocurrency industry. This team brings a
                  range of skills and expertise to the project, positioning it
                  for success in the highly competitive cryptocurrency market.
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
