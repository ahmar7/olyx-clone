import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./steps.css";
import V3 from "../../assets/img/V3.png";
import Oly from "../../assets/img/Oly.png";
const Steps = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="section home-steps wf-section home-pd">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-once="true"
          className="container rnd w-container"
        >
          <div
            data-w-id="93fe365e-3cb2-076b-daae-9c12a260d494"
            className="rnd-text tablet"
          >
            <div className="div-block-8">
              <div className="text-block-9 perk-center">
                The Future of Trading is <span className="primary-text">AI</span>
              </div>
            </div>
            <div className="text-block-10 text-center">
              Gain access to trailblazing investment strategies through our AI-powered bot. Earn up to 2.2% BUSD per day passively, while entitled to claim rewards daily. Welcome to the new era of crypto trading and wealth accumulation. Sit back and start earning passive income today in one click.
            </div>
          </div>
          <img
            src={V3}
            loading="lazy"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            data-w-id="93fe365e-3cb2-076b-daae-9c12a260d4a4"
            sizes="(max-width: 479px) 90vw, (max-width: 767px) 93vw, 100vw"
            alt=""
            className="scheme-adapt"
          />
          <div className="rnd-text">
            <div className="div-block-8">
              <h2 className="title home-perks perk-center">
                The Future of Trading is <span className="primary-text">&nbsp;AI</span>
              </h2>
            </div>
            <div
              data-w-id="93fe365e-3cb2-076b-daae-9c12a260d4dc"
              style={{ opacity: 1 }}
              className="text-block-10 text-center"
            >
              Gain access to trailblazing investment strategies through our AI-powered bot. Earn up to 2.2% BUSD per day passively, while entitled to claim rewards daily. <span className="primary-text">Welcome to the new era of crypto trading and wealth accumulation.</span> Sit back and start earning passive income today in one click.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
