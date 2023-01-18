import React, { useState } from "react";
import "./pools.css";
const Pools = () => {
  const [depostit1, setDepostit1] = useState(false);
  const [depostit2, setDepostit2] = useState(false);
  const [tooltip1, settooltip1] = useState(false);
  const [tooltip2, settooltip2] = useState(false);
  const [tooltip3, settooltip3] = useState(false);
  const [tooltip4, settooltip4] = useState(false);
  const [tooltip5, settooltip5] = useState(false);
  const [Deposit1, setDeposit1] = useState("Deposit");
  const [Deposit2, setDeposit2] = useState("Deposit");
  const [modalswitch, setModalswitch] = useState(false);
  const [statm, setstatm] = useState(false);
  let statToggle = () => {
    if (statm === false) {
      setstatm(true);
    } else {
      setstatm(false);
    }
  };
  let switchModal = () => {
    if (modalswitch === false) {
      setModalswitch(true);
    } else {
      setModalswitch(false);
    }
  };
  let toggleDeposit1 = () => {
    if (depostit1 === false) {
      setDepostit1(true);
      setDeposit1("Close");
    } else {
      setDepostit1(false);
      setDeposit1("Deposit");
    }
    setDeposit2("Deposit");

    setDepostit2(false);
  };
  let toggleDeposit2 = () => {
    if (depostit2 === false) {
      setDepostit2(true);
      setDeposit2("Close");
    } else {
      setDepostit2(false);
      setDeposit2("Deposit");
    }
    setDepostit1(false);
    setDeposit1("Deposit");
  };
  let switchtool1 = () => {
    if (tooltip1 == false) {
      settooltip1(true);
    } else {
      settooltip1(false);
    }
  };
  let switchtool2 = () => {
    if (tooltip2 == false) {
      settooltip2(true);
    } else {
      settooltip2(false);
    }
  };
  let switchtool3 = () => {
    if (tooltip3 == false) {
      settooltip3(true);
    } else {
      settooltip3(false);
    }
  };
  let switchtool4 = () => {
    if (tooltip4 == false) {
      settooltip4(true);
    } else {
      settooltip4(false);
    }
  };
  let switchtool5 = () => {
    if (tooltip5 == false) {
      settooltip5(true);
    } else {
      settooltip5(false);
    }
  };
  return (
    <>
      <div>
        <div
          onClick={switchtool1}
          className={tooltip1 ? "overlay-tip" : "hide-it"}
        ></div>
        <div
          onClick={switchtool2}
          className={tooltip2 ? "overlay-tip" : "hide-it"}
        ></div>
        <div
          onClick={switchtool3}
          className={tooltip3 ? "overlay-tip" : "hide-it"}
        ></div>
        <div
          onClick={switchtool4}
          className={tooltip4 ? "overlay-tip" : "hide-it"}
        ></div>
        <div
          onClick={switchtool5}
          className={tooltip5 ? "overlay-tip" : "hide-it"}
        ></div>
        <div className="row m-0 align-items-center justify-content-between gap-2 w-100 pb-2">
          <h6 className="top-pools-title">Top Pools</h6>
          <a
            className="view-more-title d-flex justify-content-center align-items-center gap-1"
            href="#"
          >
            View all{" "}
            <img
              src="https://app.dypius.com/static/media/right-arrow.648db252.svg"
              alt=""
            />{" "}
          </a>
        </div>
        <div>
          <div className="row m-0 gap-4 toppool-allwrapper">
            <div className="poolscardwrapper cursor-pointer position-relative false  ">
              <div
                className="purplediv"
                style={{ background: "rgb(136, 144, 196)", top: 12 }}
              />
              <div className="d-flex flex-column gap-0">
                <div className="d-flex m-0 justify-content between gap-2 align-items-center justify-content-between title-apr-wrapper">
                  <div className="d-flex align-items-center">
                    <h6 className="token-name d-flex align-items-center gap-2">
                      <img
                        src="https://app.dypius.com/static/media/cawslogo.bbd3ae04.svg"
                        alt=""
                        className="tokenlogo"
                        width={32}
                        height={32}
                      />{" "}
                      CAWS
                    </h6>
                  </div>
                  <div className="d-flex align-items-baseline gap-1">
                    <h6 className="apr-amount">50%</h6>
                    <h6 className="apr-title">APR</h6>
                  </div>
                </div>
                <div className="d-flex m-0 justify-content between gap-2 align-items-center justify-content-between bottomwrapper  ">
                  <div className="d-flex flex-column">
                    <h6 className="tvl-text">Total Value Locked</h6>
                    <h6 className="tvl-amount">$197,129.28</h6>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <h6 className="tvl-text">Lock Time</h6>
                    <h6 className="locktime-amount">30 days</h6>
                  </div>
                </div>
                <div className="details-wrapper" onClick={toggleDeposit1}>
                  <h6
                    className={
                      depostit1
                        ? "details-text gap-1 d-flex align-items-center"
                        : "details-text gap-1 clr d-flex align-items-center"
                    }
                  >
                    {Deposit1}
                    <img
                      className={depostit1 ? "rotate-it" : ""}
                      src="https://app.dypius.com/static/media/greenarrow.2715b29d.svg"
                      alt=""
                    />
                  </h6>
                </div>
              </div>
            </div>
            <div className="poolscardwrapper cursor-pointer position-relative false  ">
              <img
                src="data:image/png;base64,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"
                className="new-pool"
                alt="new pool"
              />
              <div
                className="purplediv"
                style={{ background: "rgb(136, 144, 196)", top: 12 }}
              />
              <div className="d-flex flex-column gap-0">
                <div className="d-flex m-0 justify-content between gap-2 align-items-center justify-content-between title-apr-wrapper">
                  <div className="d-flex align-items-center">
                    <h6 className="token-name d-flex align-items-center gap-2">
                      <img
                        src="https://app.dypius.com/static/media/dyplogo.cdf5c560.svg"
                        alt=""
                        className="tokenlogo"
                        width={32}
                        height={32}
                      />{" "}
                      DYP
                    </h6>
                  </div>
                  <div className="d-flex align-items-baseline gap-1">
                    <h6 className="apr-amount">7.35%</h6>
                    <h6 className="apr-title">APR</h6>
                  </div>
                </div>
                <div className="d-flex m-0 justify-content between gap-2 align-items-center justify-content-between bottomwrapper } ">
                  <div className="d-flex flex-column">
                    <h6 className="tvl-text">Total Value Locked</h6>
                    <h6 className="tvl-amount">$225,515.28</h6>
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <h6 className="tvl-text">Lock Time</h6>
                    <h6 className="locktime-amount">90 days</h6>
                  </div>
                </div>
                <div className="details-wrapper" onClick={toggleDeposit2}>
                  <h6
                    className={
                      depostit2
                        ? "details-text gap-1 d-flex align-items-center"
                        : "details-text gap-1 clr d-flex align-items-center"
                    }
                  >
                    {Deposit2}
                    <img
                      className={depostit2 ? "rotate-it" : ""}
                      src="https://app.dypius.com/static/media/greenarrow.2715b29d.svg"
                      alt=""
                    />
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className={depostit1 ? "container-lg p-0" : "hide-it"}>
            <div className="allwrappercaws my-4">
              <div className="leftside2 w-100">
                <div className="activewrapper position-relative flex-row-reverse flex-lg-row align-items-end align-items-lg-center">
                  <div className="d-flex flex-column flex-lg-row align-items-end align-items-lg-center justify-content-between gap-3 gap-lg-5">
                    <h6 className="activetxt caws-active-txt">
                      <img
                        src="https://app.dypius.com/static/media/ellipse.01dab43d.svg"
                        alt=""
                        className="position-relative"
                        style={{ top: "-1px" }}
                      />
                      Active Pool
                    </h6>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h6 className="earnrewards-text">APR:</h6>
                      <h6 className="earnrewards-token d-flex align-items-center gap-1">
                        50%
                        <img
                          onClick={switchtool1}
                          src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                          alt=""
                          className
                        />
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h6 className="earnrewards-text">Lock time:</h6>
                      <h6 className="earnrewards-token d-flex align-items-center gap-1">
                        30 days
                        <img
                          onClick={switchtool2}
                          src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                          alt=""
                          className
                        />
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h6 className="earnrewards-text">Total NFTs staked</h6>
                      <h6 className="earnrewards-token d-flex align-items-center gap-1">
                        1601/10000
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <a
                      href="https://opensea.io/collection/catsandwatchessocietycaws"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h6 className="bottomitems">
                        <img
                          src="https://app.dypius.com/static/media/arrow-up.987a80d4.svg"
                          alt=""
                        />
                        Get CAWS
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pools-details-wrapper d-flex m-0 container-lg border-0 ">
                <div className="row w-100 justify-content-between gap-4 gap-lg-0">
                  <div className="firstblockwrapper col-12 col-md-6 col-lg-2">
                    <div
                      className="d-flex flex-row flex-lg-column align-items-center align-items-lg-start justify-content-between  gap-4"
                      style={{ height: "100%" }}
                    >
                      <h6 className="start-title">Start Staking</h6>
                      <button className="connectbtn btn" onClick={switchModal}>
                        <img
                          src="https://app.dypius.com/static/media/wallet.6f6c438f.svg"
                          alt=""
                        />{" "}
                        Connect wallet
                      </button>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-6 col-lg-3 false">
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <div className="d-flex align-items-center gap-3">
                        <h6 className="deposit-txt">Stake</h6>
                        <h6 className="mybalance-text">
                          Avaliable NFTs: <b>0 CAWS</b>
                        </h6>
                      </div>
                      <img
                        onClick={switchtool3}
                        src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                        alt=""
                        className
                      />
                    </div>
                    <div className="d-flex flex-column gap-2 justify-content-between">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="position-relative">
                          <h6 className="amount-txt">Amount 1/0</h6>
                          <input
                            type="number"
                            disabled
                            className="styledinput"
                            placeholder={0.0}
                            defaultValue
                            style={{ width: "100%" }}
                          />
                        </div>
                        <button
                          className="btn disabled-btn d-flex justify-content-center align-items-center gap-2"
                          disabled
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-6 col-lg-5  false">
                    <div className="d-flex justify-content-between gap-2 flex-column flex-lg-row">
                      <h6 className="withdraw-txt d-flex gap-2 align-items-center">
                        REWARDS
                      </h6>
                      <h6
                        className="mybalance-text"
                        style={{ textTransform: "capitalize" }}
                      >
                        NFTs Staked:<b>0 CAWS</b>
                      </h6>
                      <h6 className="withdraw-littletxt d-flex align-items-center gap-2">
                        Rewards are displayed in real-time
                        <img
                          onClick={switchtool4}
                          src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                          alt=""
                          className
                        />
                      </h6>
                    </div>
                    <div className="d-flex flex-column gap-2 justify-content-between">
                      <div className="d-flex align-items-center justify-content-between gap-2" />
                      <div className="form-row d-flex gap-2 align-items-end justify-content-between">
                        <h6 className="rewardstxtCaws d-flex align-items-center gap-2">
                          <img
                            src="https://app.dypius.com/static/media/weth.14de6a79.svg"
                            alt=""
                          />{" "}
                          0 ETH ($0.00000000)
                        </h6>
                        <button
                          className="btn disabled-btn d-flex justify-content-center align-items-center"
                          disabled
                          style={{ height: "fit-content" }}
                        >
                          Claim
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-6 col-lg-2 false">
                    <h6 className="deposit-txt d-flex align-items-center gap-2 justify-content-between">
                      Unstake
                      <img
                        onClick={switchtool5}
                        src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                        alt=""
                        className
                      />
                    </h6>
                    <button className="btn outline-btn">Withdraw</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={depostit2 ? "container-lg p-0" : "hide-it"}>
            <div className="allwrapper my-4">
              <div className="leftside2 w-100">
                <div className="activewrapper">
                  <div className="d-flex flex-column flex-lg-row w-100 align-items-start align-items-lg-center justify-content-between gap-3 gap-lg-5">
                    <h6 className="activetxt">
                      <img
                        src="https://app.dypius.com/static/media/ellipse.01dab43d.svg"
                        alt=""
                        className="position-relative"
                        style={{ top: "-1px" }}
                      />
                      Active status
                    </h6>
                    <div className="d-flex flex-row-reverse flex-lg-row align-items-center justify-content-between earnrewards-container">
                      <div className="d-flex flex-column flex-lg-row align-items-end align-items-lg-center gap-3 gap-lg-5">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <h6 className="earnrewards-text">Performance fee:</h6>
                          <h6 className="earnrewards-token d-flex align-items-center gap-1">
                            0%
                            <img
                              onClick={switchtool1}
                              src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                              alt=""
                              className
                            />
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <h6 className="earnrewards-text">APR:</h6>
                          <h6 className="earnrewards-token d-flex align-items-center gap-1">
                            7.35%
                            <img
                              onClick={switchtool2}
                              src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                              alt=""
                              className
                            />
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <h6 className="earnrewards-text">Lock time:</h6>
                          <h6 className="earnrewards-token d-flex align-items-center gap-1">
                            90 Days
                            <img
                              onClick={switchtool2}
                              src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                              alt=""
                              className
                            />
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
                        <h6 className="bottomitems">
                          <img
                            src="https://app.dypius.com/static/media/poolsCalculatorIcon.d6b95806.svg"
                            alt=""
                          />
                          Calculator
                        </h6>
                        <a
                          href="https://app.uniswap.org/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h6 className="bottomitems">
                            <img
                              src="https://app.dypius.com/static/media/arrow-up.987a80d4.svg"
                              alt=""
                            />
                            Get DYP
                          </h6>
                        </a>
                        <div onClick={statToggle}>
                          <h6 className="bottomitems">
                            <img
                              src="https://app.dypius.com/static/media/purpleStat.87015297.svg"
                              alt=""
                            />
                            Stats
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pools-details-wrapper d-flex m-0 container-lg border-0">
                <div className="row gap-4 gap-lg-0 w-100 justify-content-between">
                  <div className="firstblockwrapper col-12 col-md-6 col-lg-2">
                    <div
                      className="d-flex flex-row flex-lg-column align-items-center align-items-lg-start justify-content-between gap-4"
                      style={{ height: "100%" }}
                    >
                      <h6 className="start-title">Start Staking</h6>
                      <button className="connectbtn btn">
                        <img
                          src="https://app.dypius.com/static/media/wallet.6f6c438f.svg"
                          alt=""
                        />{" "}
                        Connect wallet
                      </button>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-12 col-lg-4  ">
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <div className="d-flex justify-content-center align-items-center gap-3">
                        <h6 className="deposit-txt">Deposit</h6>
                        <h6 className="mybalance-text">
                          Balance:<b>0.000000 DYP</b>
                        </h6>
                      </div>
                      <img
                        onClick={switchtool3}
                        src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                        alt=""
                        className
                      />
                    </div>
                    <div className="d-flex flex-column gap-2 justify-content-between">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <div className="input-container px-0">
                          <input
                            type="number"
                            autoComplete="off"
                            placeholder=" "
                            className="text-input"
                            name="amount_deposit"
                            id="amount_deposit"
                            defaultValue
                            style={{ width: "100%" }}
                          />
                          <label className="label">Amount</label>
                        </div>
                        <button className="btn maxbtn">Max</button>
                        <button
                          disabled
                          className="btn filledbtn disabled-btn null d-flex justify-content-center align-items-center gap-2"
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-12 col-lg-4 false">
                    <div className="d-flex justify-content-between gap-2">
                      <h6 className="withdraw-txt">Rewards</h6>
                      <h6 className="withdraw-littletxt d-flex align-items-center gap-2">
                        Rewards are displayed in real-time
                        <img
                          onClick={switchtool4}
                          src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                          alt=""
                          className
                        />
                      </h6>
                    </div>
                    <div className="form-row flex-column flex-lg-row d-flex gap-2 align-item-start align-items-lg-center justify-content-between">
                      <div className="d-flex flex-column">
                        <span
                          style={{
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "rgb(192, 201, 255)",
                          }}
                        >
                          DYP
                        </span>
                        <span />
                      </div>
                      <div className="claim-reinvest-container d-flex justify-content-between align-items-center gap-3">
                        <button
                          disabled
                          className="btn filledbtn disabled-btn d-flex justify-content-center align-items-center gap-2"
                          style={{ height: "fit-content" }}
                        >
                          Claim
                        </button>
                        <button
                          disabled
                          className="btn outline-btn disabled-btn d-flex justify-content-center align-items-center gap-2"
                          style={{ height: "fit-content" }}
                        >
                          Reinvest
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="otherside-border col-12 col-md-12 col-lg-2 false">
                    <h6 className="deposit-txt d-flex align-items-center gap-2 justify-content-between">
                      WITHDRAW
                      <img
                        onClick={switchtool5}
                        src="https://app.dypius.com/static/media/more-info.95629bb7.svg"
                        alt=""
                        className
                      />
                    </h6>
                    <button className="btn outline-btn" disabled>
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tooltip"
          className={tooltip1 ? "MuiTooltip-popper" : "hide-it"}
          id="mui-17721"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(160px, 745px, 0px)",
          }}
          x-placement="top"
        >
          <div
            className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div className="tooltip-text">
              APR reflects the interest rate of earnings on an account over the
              course of one year.{" "}
            </div>
          </div>
        </div>
        <div
          role="tooltip"
          className={tooltip2 ? "MuiTooltip-popper" : "hide-it"}
          id="mui-99430"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(342px, 745px, 0px)",
          }}
          x-placement="top"
        >
          <div
            className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div className="tooltip-text">
              The amount of time your deposited assets will be locked.
            </div>
          </div>
        </div>
        <div
          role="tooltip"
          className={tooltip3 ? "MuiTooltip-popper" : "hide-it"}
          id="mui-29727"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(360px, 800px, 0px)",
          }}
          x-placement="top"
        >
          <div
            className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div className="tooltip-text">
              Deposit your CAWS NFTs to the staking smart contract.
            </div>
          </div>
        </div>
        <div
          role="tooltip"
          className={tooltip4 ? "MuiTooltip-popper" : "hide-it"}
          id="mui-90846"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(852px, 800px, 0px)",
          }}
          x-placement="top"
        >
          <div
            className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div className="tooltip-text">
              Rewards earned by your CAWS NFTs deposit to the staking smart
              contract are displayed in real-time.
            </div>
          </div>
        </div>
        <div
          role="tooltip"
          className={tooltip5 ? "MuiTooltip-popper" : "hide-it"}
          id="mui-83577"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(980px, 800px, 0px)",
          }}
          x-placement="top"
        >
          <div
            className="MuiTooltip-tooltip MuiTooltip-tooltipPlacementTop"
            style={{
              opacity: 1,
              transform: "none",
              transition:
                "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div className="tooltip-text">
              Withdraw your deposited NFTs from the staking smart contract.
            </div>
          </div>
        </div>
      </div>
      <div
        className={modalswitch ? "modal fade blocks  show" : "hide-it"}
        tabIndex={-1}
        aria-labelledby="modalLabelundefined"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "820px" }}>
          <div className="modal-content">
            <span
              onClick={switchModal}
              aria-hidden="true"
              data-dismiss="modal"
              aria-label="Close"
              className="close-btn"
            >
              <img
                src="https://app.dypius.com/static/media/close.97d8a88a.svg"
                alt=""
                className="close-icon"
              />
            </span>
            <div>
              <div className="walletmodal-wrapper">
                <div className="sc-jwKygS bFQpTL">
                  <h3 style={{ fontSize: "20px" }}>Connect to a wallet</h3>
                </div>
                <div>
                  <div className="row flex-column" style={{ gap: "20px" }}>
                    <button id="connect-METAMASK" className="walletbutton">
                      <div
                        color="#E8831D"
                        className="justify-content-between d-flex w-100 align-items-center"
                      >
                        <span>MetaMask</span>
                        <img
                          src="https://app.dypius.com/images/wallets/metamask.svg"
                          width={50}
                          height={50}
                          alt="Icon"
                        />
                      </div>
                    </button>
                    <button id="connect-METAMASK" className="walletbutton">
                      <div
                        color="#E8831D"
                        className="justify-content-between d-flex w-100 align-items-center"
                      >
                        <span>Coinbase</span>
                        <img
                          src="https://app.dypius.com/images/wallets/coinbase.svg"
                          width={50}
                          height={50}
                          alt="Icon"
                        />
                      </div>
                    </button>
                    <button id="connect-COIN98" className="walletbutton">
                      <div
                        color="#E8831D"
                        className="justify-content-between d-flex w-100 align-items-center"
                      >
                        <span>Coin98</span>
                        <img
                          src="https://app.dypius.com/images/wallets/coin98.svg"
                          width={50}
                          height={50}
                          alt="Icon"
                        />
                      </div>
                    </button>
                    <button id="connect-COIN98" className="walletbutton">
                      <div
                        color="#E8831D"
                        className="justify-content-between d-flex w-100 align-items-center"
                      >
                        <span>Trust Wallet</span>
                        <img
                          src="https://app.dypius.com/images/wallets/trustwallet.svg"
                          width={50}
                          height={50}
                          alt="Icon"
                        />
                      </div>
                    </button>
                    <button id="connect-COIN98" className="walletbutton">
                      <div
                        color="#E8831D"
                        className="justify-content-between d-flex w-100 align-items-center"
                      >
                        <span>SafePal</span>
                        <img
                          src="https://app.dypius.com/images/wallets/safepal.svg"
                          width={50}
                          height={50}
                          alt="Icon"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={statm ? "modal fade show" : "hide-it"}
        style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog tymodal">
          <div className="modal-content" style={{ width: "fit-content" }}>
            <div className="modal-header justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <h6
                  style={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "28px",
                    color: "rgb(247, 247, 252)",
                  }}
                >
                  My Stats
                </h6>
              </div>
              <img
                onClick={statToggle}
                src="https://app.dypius.com/static/media/xMark.97d8a88a.svg"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="modal-body">
              <div className="earn-hero-content p4token-wrapper">
                <div className="l-box pl-3 pr-3">
                  <div className="  px-0">
                    <div className="stats-container my-4">
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">My DYP Deposit</span>
                        <h6 className="stats-card-content">0.00 DYP</h6>
                      </div>
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">My DYP Balance</span>
                        <h6 className="stats-card-content">... DYP</h6>
                      </div>
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">
                          Referral Fee Earned
                        </span>
                        <h6 className="stats-card-content"> DYP</h6>
                      </div>
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">
                          Total DYP Locked
                        </span>
                        <h6 className="stats-card-content">0.00 DYP</h6>
                      </div>
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">TVL USD</span>
                        <h6 className="stats-card-content">0.00 USD</h6>
                      </div>
                      <div className="stats-card p-4 d-flex flex-column mx-auto w-100">
                        <span className="stats-card-title">
                          Contract Expiration
                        </span>
                        <h6 className="stats-card-content">11 January 2024</h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="referralwrapper col-8">
                        <div className="d-flex gap-2 align-items-start justify-content-between">
                          <img
                            src="https://app.dypius.com/static/media/referral.5fd49c5b.svg"
                            alt=""
                          />
                          <div
                            className="d-flex gap-2 flex-column"
                            style={{ width: "60%" }}
                          >
                            <div>
                              <span style={{ fontSize: "0.8rem" }}>
                                <h6
                                  className="referraltitle"
                                  style={{ cursor: "pointer" }}
                                />
                                <h6
                                  title
                                  className="referraltitle"
                                  data-event="click"
                                  data-for="0.h9bak3v6own"
                                  data-tip="Copied To Clipboard!"
                                  currentitem="false"
                                >
                                  Referral Link:
                                  <span
                                    title="Copy link to clipboard"
                                    style={{ cursor: "pointer" }}
                                  />
                                </h6>
                                <div
                                  className="__react_component_tooltip t765fb026-a221-4cad-ad3e-4cfc632e4c0a place-top type-dark"
                                  id="0.h9bak3v6own"
                                  data-id="tooltip"
                                >
                                  <style
                                    aria-hidden="true"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        '\n  \t.t765fb026-a221-4cad-ad3e-4cfc632e4c0a {\n\t    color: #fff;\n\t    background: #222;\n\t    border: 1px solid transparent;\n\t    border-radius: undefinedpx;\n\t    padding: 8px 21px;\n  \t}\n\n  \t.t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-top {\n        margin-top: -10px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-top::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: 2;\n        width: 20px;\n        height: 12px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-top::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(135deg);\n    }\n\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-bottom {\n        margin-top: 10px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-bottom::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 18px;\n        height: 10px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-bottom::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        top: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(45deg);\n    }\n\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-left {\n        margin-left: -10px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-left::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-left::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        right: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(45deg);\n    }\n\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-right {\n        margin-left: 10px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-right::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .t765fb026-a221-4cad-ad3e-4cfc632e4c0a.place-right::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        left: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(-135deg);\n    }\n  ',
                                    }}
                                  />
                                </div>
                                <br />
                              </span>
                            </div>
                            <h6 className="referraldesc">
                              Refferal link gives you 5% for each invite friend
                              you bring to buy DYP example
                            </h6>
                          </div>
                          <div
                            title
                            className
                            data-event="click"
                            data-for="0.h9bak3v6own"
                            data-tip="Copied To Clipboard!"
                            currentitem="false"
                          >
                            <button className="copybtn btn">
                              <img
                                src="https://app.dypius.com/static/media/copy.131f6edd.svg"
                                alt=""
                              />{" "}
                              Copy{" "}
                            </button>{" "}
                          </div>
                          <div
                            className="__react_component_tooltip tb4ca7fed-bd24-4e57-8f68-60cbf0a33632 place-top type-dark"
                            id="0.h9bak3v6own"
                            data-id="tooltip"
                          >
                            <style
                              aria-hidden="true"
                              dangerouslySetInnerHTML={{
                                __html:
                                  '\n  \t.tb4ca7fed-bd24-4e57-8f68-60cbf0a33632 {\n\t    color: #fff;\n\t    background: #222;\n\t    border: 1px solid transparent;\n\t    border-radius: undefinedpx;\n\t    padding: 8px 21px;\n  \t}\n\n  \t.tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-top {\n        margin-top: -10px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-top::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: 2;\n        width: 20px;\n        height: 12px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-top::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(135deg);\n    }\n\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-bottom {\n        margin-top: 10px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-bottom::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 18px;\n        height: 10px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-bottom::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        top: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(45deg);\n    }\n\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-left {\n        margin-left: -10px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-left::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-left::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        right: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(45deg);\n    }\n\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-right {\n        margin-left: 10px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-right::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .tb4ca7fed-bd24-4e57-8f68-60cbf0a33632.place-right::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: undefinedpx;\n        border: 1px solid transparent;\n        background-color: #222;\n        z-index: -2;\n        left: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(-135deg);\n    }\n  ',
                              }}
                            />
                          </div>
                          &nbsp;{" "}
                        </div>
                      </div>
                      <div className="col-3 d-flex flex-column gap-1">
                        <span
                          style={{
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "rgb(192, 201, 255)",
                          }}
                        >
                          My address
                        </span>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://etherscan.io/address/null"
                          className="stats-link"
                        >
                          {" "}
                          <img
                            src="https://app.dypius.com/static/media/statsLinkIcon.9ae75ab2.svg"
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/dypfinance/staking-governance-security-audits"
                          className="stats-link"
                        >
                          Audit{" "}
                          <img
                            src="https://app.dypius.com/static/media/statsLinkIcon.9ae75ab2.svg"
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://etherscan.io/token/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17?a=null"
                          className="stats-link"
                        >
                          View transaction{" "}
                          <img
                            src="https://app.dypius.com/static/media/statsLinkIcon.9ae75ab2.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pools;
