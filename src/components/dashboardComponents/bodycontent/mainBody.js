import React from "react";
import Calculator from "./calculator/calculator";
import Explore from "./explore/explore";
import Footer from "./footer/footer";
import Launchpad from "./launchpad/launchpad";
import "./mainBody.css";
import "./mainBody.scss";

import News from "./news/news";
import Pools from "./pools/pools";
const Innercontent = () => {
  return (
    <div className="col-11 pc">
      <div className="right-content pr-0 my-4 my-lg-5">
        <div className="container-lg dashboardwrapper px-0">
          <div className="d-flex m-0 flex-column flex-xxl-row justify-content-between gap-4">
            <div className="d-flex flex-column gap-4 justify-content-between">
              <div className="d-flex flex-column flex-lg-row m-0 gap-3 justify-content-between">
                <Calculator />
                <Explore />
              </div>

              <Pools />
            </div>{" "}
            {/* <Launchpad /> */}
          </div>{" "}
          <br />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Innercontent;
