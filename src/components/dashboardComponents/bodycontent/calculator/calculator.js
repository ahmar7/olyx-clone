import React from "react";

const Calculator = () => {
  return (
    <div
      id="calculator"
      className="calculator-wrapper position-relative undefined"
    >
      <div className="purplediv" style={{ background: "rgb(142, 151, 205)" }} />
      <form>
        <div className="flex flex-column gap-2 justify-content-between">
          <div className="d-flex justify-content-between gap-2 align-items-center pb-4">
            <h6 className="d-flex gap-2 align-items-center calc-title">
              <img
                src="https://app.dypius.com/static/media/calculator.4f8a9142.svg"
                alt=""
              />{" "}
              Calculator
            </h6>
            <img
              src="https://app.dypius.com/static/media/calculatorChart.64e79d2d.png"
              className="calculator-chart d-flex d-lg-none"
              alt=""
            />
          </div>
          <div className="pills-container gap-3 d-flex justify-content-start row m-0 w-100 position-relative">
            <img
              src="https://app.dypius.com/static/media/calculatorChart.64e79d2d.png"
              className="calculator-chart d-none d-lg-flex"
              alt=""
            />
            <p
              className="col col-lg-3 pill-item d-flex align-items-center gap-2 active-color"
              style={{
                background: "rgb(30, 28, 64)",
                color: "rgb(247, 247, 252)",
                border: "1px solid rgb(86, 88, 145)",
              }}
            >
              <img
                src="https://app.dypius.com/static/media/stakingIcon.ea7cdcdf.svg"
                alt=""
              />
              <span className="pill-item-text">Staking</span>
            </p>
            <p
              className="col col-lg-3 pill-item d-flex align-items-center gap-2 "
              style={{
                background: "rgb(49, 47, 105)",
                color: "rgb(142, 151, 205)",
                border: "1px solid rgb(49, 47, 105)",
              }}
            >
              <img
                src="https://app.dypius.com/static/media/vaultIcon.7727af54.svg"
                alt=""
              />
              <span className="pill-item-text">Vault</span>
            </p>
          </div>
          <div className="separator" />
          <div
            className="row align-items-center gap-2 m-0 position-relative"
            style={{ top: 15 }}
          >
            <div className="input-container usd-input px-0">
              <input
                type="number"
                min={1}
                max={999999}
                maxLength={6}
                autoComplete="off"
                id="usd_to_deposit"
                name="usd_to_deposit"
                placeholder=" "
                className="text-input"
                defaultValue={1000}
                style={{ width: "100%" }}
              />
              <label htmlFor="usd" className="label">
                USD to deposit
              </label>
            </div>
            <div className="input-container days-input px-0">
              <input
                type="number"
                min={1}
                max={365}
                id="days"
                name="days"
                placeholder=" "
                className="text-input"
                defaultValue={365}
                style={{ width: "100%" }}
              />
              <label htmlFor="usd" className="label">
                Days
              </label>
            </div>
            <span className="calculator-purpose px-0 mt-3 mt-lg-0">
              This calculator is for informational purposes only
            </span>
          </div>
          <div className="row w-100 gap-3 gap-lg-2 gap-xl-0 mx-0 align-items-center justify-content-between mt-4 mt-lg-5 position-relative calculator-chains-wrapper">
            <a className="ethereum-chain-wrapper" href="#">
              <div className="chain-content gap-4 p-2">
                <div className="values-wrapper align-items-start d-flex flex-column gap-1">
                  <div className="usd-value">$300</div>
                  <div className="approx-value">Approx. (0.1945 WETH)</div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2 gap-lg-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="https://app.dypius.com/static/media/ethStakeActive.73704a84.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h6 className="chain-name">Ethereum</h6>
                  </div>
                  <img
                    src="https://app.dypius.com/static/media/filledarrow.a41baa76.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a className="bnb-chain-wrapper" href="#">
              <div className="chain-content gap-4 p-2">
                <div className="values-wrapper d-flex flex-column gap-1">
                  <div className="usd-value">$300</div>
                  <div className="approx-value">Approx. (1.0125 WBNB)</div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2 gap-lg-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="https://app.dypius.com/static/media/bnbStakeActive.0abf7d44.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h6 className="chain-name">BNB Chain</h6>
                  </div>
                  <img
                    src="https://app.dypius.com/static/media/filledarrow.a41baa76.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
            <a className="avax-chain-wrapper" href="#">
              <div className="chain-content  gap-4 p-2">
                <div className="d-flex values-wrapper flex-column gap-1">
                  <div className="usd-value">$300</div>
                  <div className="approx-value">Approx. (18.181 WAVAX)</div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2 gap-lg-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="https://app.dypius.com/static/media/avaxStakeActive.069127b8.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h6 className="chain-name">Avalanche</h6>
                  </div>
                  <img
                    src="https://app.dypius.com/static/media/filledarrow.a41baa76.svg"
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
