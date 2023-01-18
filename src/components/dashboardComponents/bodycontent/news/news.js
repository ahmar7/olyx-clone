import React from "react";

const News = () => {
  return (
    <div className="row m-0 align-items-center justify-content-between gap-2 w-100">
      <h6 className="top-pools-title">News</h6>
      <a
        className="view-more-title d-flex justify-content-center align-items-center gap-1"
        href="#"
      >
        View all{" "}
        <img
          src="https://app.dypius.com/static/media/right-arrow.648db252.svg"
          alt=""
        />
      </a>
      <div className="d-flex flex-column flex-lg-row gap-3 justify-content-between px-0">
        {" "}
        <a
          href="#"
          className="newscard-wrapper d-flex"
          style={{ width: "49%" }}
        >
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 position-relative">
            <img
              alt=""
              className="newsimg2"
              src="https://newsbucketgino.s3.eu-central-1.amazonaws.com/photo_1673811433_Tron-Founder-Justin-Sun-Ready-To-Invest-1-Billion-On-DCGs-Assets.webp"
            />
            <div className="d-flex flex-column gap-4 justify-content-between">
              <h6 className="nc-hot-trend">
                {" "}
                <img
                  src="https://app.dypius.com/static/media/sparkle.1db7745a.svg"
                  alt=""
                />{" "}
                Hot Trending
              </h6>
              <h6 className="nc-title">
                Tron Founder Justin Sun Ready To Invest $1 Billion On DCG Assets
              </h6>
              <div className="d-flex m-0 justify-content-between align-items-center gap-2">
                <h6 className="nc-date">
                  {" "}
                  <img
                    src="https://app.dypius.com/static/media/calendar.c9c86fbc.svg"
                    alt=""
                  />
                  Jan 16, 2023
                </h6>
                <img
                  src="https://app.dypius.com/static/media/filledArrow.a41baa76.svg"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="newscard-wrapper d-flex p-0">
          <div className="d-flex flex-column gap-3 position-relative w-100">
            <div className="position-relative">
              <img
                src="https://app.dypius.com/static/media/newsShadow2.7b8dd5f1.png"
                className="news-shadow d-none d-xxl-flex"
                alt=""
              />
              <div className="d-flex align-items-center gap-2 news-date">
                <img
                  src="https://app.dypius.com/static/media/calendar.c9c86fbc.svg"
                  alt=""
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 15,
                    color: "rgb(219, 217, 255)",
                  }}
                >
                  Jan 16, 2023
                </span>
              </div>
              <img
                alt=""
                className="newsimg"
                src="https://newsbucketgino.s3.eu-central-1.amazonaws.com/photo_1673811317_7e7fc96f-eeec-4a4c-ab00-e85e033c8cd0.avif"
              />
            </div>
            <div className="d-flex justify-content-between align-items-end pb-2 pb-lg-0 px-2 mt-2">
              <h6 className="nc-title">
                One of the largest US colleges has begun...
              </h6>
              <img
                src="https://app.dypius.com/static/media/filledArrow.a41baa76.svg"
                alt=""
              />
            </div>
          </div>
        </a>
        <a href="#" className="newscard-wrapper d-flex p-0">
          <div className="d-flex flex-column gap-3 position-relative w-100">
            <div className="position-relative">
              <img
                src="https://app.dypius.com/static/media/newsShadow2.7b8dd5f1.png"
                className="news-shadow d-none d-xxl-flex"
                alt=""
              />
              <div className="d-flex align-items-center gap-2 news-date">
                <img
                  src="https://app.dypius.com/static/media/calendar.c9c86fbc.svg"
                  alt=""
                />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: 15,
                    color: "rgb(219, 217, 255)",
                  }}
                >
                  Jan 14, 2023
                </span>
              </div>
              <img
                alt=""
                className="newsimg"
                src="https://newsbucketgino.s3.eu-central-1.amazonaws.com/photo_1673716428_metmaskethers.webp"
              />
            </div>
            <div className="d-flex justify-content-between align-items-end pb-2 pb-lg-0 px-2 mt-2">
              <h6 className="nc-title">
                Metamask Launches Ethereum Staking Servi...
              </h6>
              <img
                src="https://app.dypius.com/static/media/filledArrow.a41baa76.svg"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default News;
