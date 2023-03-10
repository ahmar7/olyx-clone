import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./herosection.css";
import Buysell from "../../../assets/img/buysell.png";
import Rocket from "../../../assets/img/rocket.png";
import "./herosection.scss";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="section home-hero wf-section hero-banner"
      >
        <div className="container-medium-940px home-hero mtop-hero">
          <h1
            data-w-id="abc7287a-ad94-a3ec-8716-36750d55fc4e"
            style={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="display-1 hnm home-hero"
          >
            <strong>Join the New Era of Trading with </strong>
            <span className="text-color-accent">
              <strong className="text-color-accent">YieldBot!</strong>
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
            className="paragraph-large home-hero hero-caption-mb gray"
          >
            A cutting-edge investment platform offering modern wealth solutions
            through cryptocurrencies, artificial intelligence (AI) and
            decentralised finance (DeFi).
          </p>
          <p
            data-w-id="749e645b-3b65-110f-471d-f6af6dfbc601"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
            className="paragraph-large home-hero hero-benefits"
          >
            Earn more, worry less | UP TO 2.2% BUSD DAILY | SECURE & PASSIVELY
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
              className="button-primary-gradient _2-buttons no-img"
            >
              <a href="#" className="button-primary w-button learn-more">
                Learn more
              </a>
            </div>
            <div
              id="w-node-_11c7ff4f-b854-a2a7-75b3-008a8664fa7a-11098043"
              className="button-primary-gradient _2-buttons no-img"
            >
              <a href="#" className="button-primary w-button get-started">
                Watch Video
              </a>
            </div>
          </div>
        </div>
        <div className="container-default home-hero w-container">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1200"
            data-aos-easing="ease-in"
            data-aos-mirror="false"
            data-aos-once="true"
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
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="false"
            />
            <img
              src={Rocket}
              loading="eager"
              alt=""
              className="image home-hero-3"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="false"
            />
          </div>
          {/*<h1 className="heading-5">Our Partners</h1>
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
          </div>*/}
          <div
            data-w-id="a052a4bf-34f8-d790-1f5c-e2592094cb97"
            className="bg-gradient-blur-wrapper home-hero-1"
          >
            <div className="bg-gradient-blur-circle-3" />
            <div className="bg-gradient-blur-circle-2" />
            <div className="bg-gradient-blur-circle-1" />
          </div>
          <div className="bg-gradient-blur-wrapper home-hero-2">
            <div className="bg-gradient-blur-circle-3" />
            <div className="bg-gradient-blur-circle-2 blue" />
            <div className="bg-gradient-blur-circle-1 purple" />
          </div>
          <div className="w-layout-grid about-hero-achievements-grid">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in"
              data-aos-mirror="false"
              data-aos-once="true"
              className="card about-hero-achievement card-design"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement">
                  2.2%
                </div>
                <div className="card-about-hero-achievement-text">
                  Daily Return
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in"
              data-aos-mirror="false"
              data-aos-once="true"
              className="card about-hero-achievement card-design"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement align-center">
                  <span className="accent-secondary-1">$</span>0
                </div>
                <div className="card-about-hero-achievement-text">
                  Total Assets
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in"
              data-aos-mirror="false"
              data-aos-once="true"
              className="card about-hero-achievement card-design"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement align-center">
                  <span className="accent-secondary-1">$</span>0
                </div>
                <div className="card-about-hero-achievement-text">
                  Claimed Rewards
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in"
              data-aos-mirror="false"
              data-aos-once="true"
              className="card about-hero-achievement card-design"
            >
              <div className="card-about-hero-achievement-wrapper">
                <div className="number-big card-about-hero-achievement align-center">
                  0
                </div>
                <div className="card-about-hero-achievement-text">
                  Total Investors
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
