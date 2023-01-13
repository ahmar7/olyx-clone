import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import V3 from "../../assets/img/V3.png";
import Oly from "../../assets/img/Oly.png";
const Steps = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="section home-steps wf-section">
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
              <div className="text-block-9">
                The future <span className="text-span">of</span>
                <br />
                Cryptocurrency <br />
                trading
                <span className="text-span-2">platform</span>
              </div>
            </div>
            <div className="text-block-10">
              Take advantage of time and sales, futures spread orders and depth
              trader — plus, trade directly from charts.
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
          <div
            data-w-id="93fe365e-3cb2-076b-daae-9c12a260d4a5"
            style={{ opacity: 1 }}
            className="rnd-container-2"
          >
            <div className="block-scheme">
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4a7-11098043"
                className="div-block-6"
              >
                <div className="text-block-7">Artificial Intelligence</div>
              </div>
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4aa-11098043"
                className="line"
              />
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4ab-11098043"
                className="div-block-6"
              >
                <div className="text-block-7">Storage Networks</div>
              </div>
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4ae-11098043"
                className="line"
              />
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4af-11098043"
                className="div-block-6"
              >
                <div className="text-block-7">P2P Networks</div>
              </div>
              <div
                id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4b2-11098043"
                className="line"
              />
            </div>
            <div className="block-scheme _2">
              <div className="line _2" />
              <div className="line _3" />
              <div className="block-scheme _3">
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4b7-11098043"
                  className="line _4"
                />
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4b8-11098043"
                  className="div-block-6"
                >
                  <div className="text-block-7 _1">Public Data</div>
                </div>
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4bb-11098043"
                  className="line _5"
                />
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4bc-11098043"
                  className="line _4"
                />
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4bd-11098043"
                  className="div-block-6 _1"
                >
                  <div className="text-block-7 _2">
                    Encrypted Private Data *
                  </div>
                </div>
                <div
                  id="w-node-_93fe365e-3cb2-076b-daae-9c12a260d4c0-11098043"
                  className="line _5"
                />
              </div>
            </div>
            <div className="block-scheme _4">
              <img src={Oly} loading="lazy" alt="" className="image-6" />
              <div className="text-block-8">
                Easy to use digital service and exclusive personal service for
                our active traders
              </div>
              <div
                data-w-id="93fe365e-3cb2-076b-daae-9c12a260d4c5"
                className="div-block-6 _4"
              >
                <div className="text-block-7 _4">Indexing</div>
              </div>
              <div className="div-block-6 _5">
                <div className="text-block-7">API</div>
              </div>
              <div className="img-arrows">
                <img
                  src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a6915073b0711501691a2e_arrow%20up.svg"
                  loading="lazy"
                  alt=""
                  className="image-7"
                />
                <img
                  src="https://uploads-ssl.webflow.com/63a5add22cb21cb50d097ff1/63a6915073b071535b691a2d_arrow%20down.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="text-block-11">Consumers</div>
            </div>
          </div>
          <div className="rnd-text">
            <div className="div-block-8">
              <h2 className="title home-perks">
                The future <span>of</span>
                <br />
                Cryptocurrency <br />
                trading
                <span className="text-color-accent">platform</span>
              </h2>
            </div>
            <div
              data-w-id="93fe365e-3cb2-076b-daae-9c12a260d4dc"
              style={{ opacity: 1 }}
              className="text-block-10"
            >
              Take advantage of time and sales, futures spread orders and depth
              trader — plus, trade directly from charts.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
