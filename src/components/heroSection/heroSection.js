import React from "react";
import Buysell from "../../assets/img/buysell.png";
import Rocket from "../../assets/img/rocket.png";
import Cg from "../../assets/img/Cg.png";
import Cmc from "../../assets/img/Cmc.png";
import Bsc from "../../assets/img/Bsc.png";
import Pinksale from "../../assets/img/Pinksale.png";
import Binance from "../../assets/img/Binance.png";
import Pcs from "../../assets/img/Pcs.png";
const HeroSection = () => {
  return (
    <div>
      <section className="section home-hero wf-section">
        <div className="container-medium-940px home-hero">
          <div
            data-w-id="448f5ead-3667-0bad-b1a4-a6038870800b"
            style={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="home-hero-featured-message-wrapper"
          >
            <div className="home-hero-featured-message-content">
              <a
                data-w-id="5747d66c-b4ac-690f-6026-662ab3648be2"
                href="/utility-pages/extra-components/features"
                className="home-hero-featured-message-link w-inline-block"
              >
                <div className="home-hero-featured-message-tag">New</div>
                <div className="home-hero-featured-message-text">
                  Partnership with Pinksale
                </div>
                <div className="home-hero-featured-message-icon"></div>
              </a>
              <div className="home-hero-featured-message-blur" />
            </div>
          </div>
          <h1
            data-w-id="abc7287a-ad94-a3ec-8716-36750d55fc4e"
            style={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="display-1 home-hero"
          >
            <strong>Unlock the Power of DeFi with </strong>
            <span className="text-color-accent">
              <strong className="text-color-accent">OLYX</strong>
            </span>
          </h1>
          <p
            data-w-id="749e645b-3b65-110f-471d-f6af6dfbc601"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="paragraph-large home-hero"
          >
            Olyx, Automated Hedge Fund platform with Advance AI bot trading.
          </p>
          <div
            data-w-id="b1ff49e2-6272-bd33-f83d-82e4206a6d65"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="_2-buttons-wrapper"
          >
            <div
              id="w-node-_11c7ff4f-b854-a2a7-75b3-008a8664fa7a-11098043"
              className="button-primary-gradient _2-buttons"
            >
              <a href="/roadmap" className="button-primary w-button">
                Get started
              </a>
            </div>
            <a
              href="/utility-pages/extra-components/features"
              className="button-secondary _2-buttons w-button"
            >
              View Charts
            </a>
          </div>
        </div>
        <div className="container-default home-hero w-container">
          <div
            data-w-id="1535d204-b8f5-78ad-1998-57322399a3bd"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="home-hero-images-wrapper"
          >
            <img
              src={Buysell}
              loading="eager"
              width={900}
              sizes="(max-width: 767px) 82vw, (max-width: 1919px) 84vw, 900px"
              alt=""
              className="image home-hero-1"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, 9.4872px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <img
              src={Rocket}
              loading="eager"
              alt=""
              className="image home-hero-2"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, -28.4616px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <img
              src={Rocket}
              loading="eager"
              alt=""
              className="image home-hero-3"
              style={{
                willChange: "transform",
                transform:
                  "translate3d(0px, -18.9744px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
          <h1 className="heading-5">Our Partners</h1>
          <div className="home-hero-companies-wrapper">
            <div className="home-hero-companies">
              <img
                src={Cg}
                loading="eager"
                alt=""
                className="image home-hero-company"
              />
              <img
                src={Cmc}
                loading="eager"
                alt=""
                className="image home-hero-company youtube"
              />
              <img
                src={Bsc}
                loading="eager"
                alt=""
                className="image home-hero-company youtube"
              />
              <img
                src={Pinksale}
                loading="eager"
                sizes="(max-width: 479px) 26vw, (max-width: 767px) 110px, 137px"
                alt=""
                className="image home-hero-company"
              />
              <img
                src={Binance}
                loading="eager"
                alt=""
                className="image home-hero-company"
              />
              <img
                src={Pcs}
                loading="eager"
                alt=""
                className="image home-hero-company"
              />
            </div>
          </div>
          <div
            data-w-id="a052a4bf-34f8-d790-1f5c-e2592094cb97"
            className="bg-gradient-blur-wrapper home-hero-1"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(129.366deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <div className="bg-gradient-blur-circle-3" />
            <div className="bg-gradient-blur-circle-2" />
            <div className="bg-gradient-blur-circle-1" />
          </div>
          <div
            className="bg-gradient-blur-wrapper home-hero-2"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-gradient-blur-circle-3" />
            <div className="bg-gradient-blur-circle-2 blue" />
            <div className="bg-gradient-blur-circle-1 purple" />
          </div>
          <div className="w-layout-grid about-hero-achievements-grid">
            <div
              data-w-id="0d3db03b-f4dd-345c-fc41-4b909d428ff7"
              style={{
                transform:
                  "translate3d(0px, 40px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 0,
              }}
              className="card about-hero-achievement"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement">
                  0K<span className="accent-primary-2">+</span>
                </div>
                <div className="card-about-hero-achievement-text">
                  Traded monthly
                </div>
              </div>
            </div>
            <div
              data-w-id="0d3db03b-f4dd-345c-fc41-4b909d428fff"
              style={{
                transform:
                  "translate3d(0px, 40px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 0,
              }}
              className="card about-hero-achievement"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement">
                  0K<span className="accent-secondary-1">+</span>
                </div>
                <div className="card-about-hero-achievement-text">
                  Active users
                </div>
              </div>
            </div>
            <div
              data-w-id="0d3db03b-f4dd-345c-fc41-4b909d429007"
              style={{
                transform:
                  "translate3d(0px, 40px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 0,
              }}
              className="card about-hero-achievement"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement">
                  0K<span className="accent-secondary-2">+</span>
                </div>
                <div className="card-about-hero-achievement-text">
                  Saved in commissions
                </div>
              </div>
            </div>
            <div
              data-w-id="0d3db03b-f4dd-345c-fc41-4b909d42900f"
              style={{
                transform:
                  "translate3d(0px, 40px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 0,
              }}
              className="card about-hero-achievement"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement">
                  0K<span className="accent-secondary-3">+</span>
                </div>
                <div className="card-about-hero-achievement-text">
                  Capital in funding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;