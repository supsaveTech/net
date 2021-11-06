/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";

const Index = ({ difference, account, loadWeb3 }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${active ? "active" : null}`}>
      <div className="container">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="navbar-bran ">
            <img src={Logo} width="60%" alt="Logo" />
          </div>
          <div className="menu d-none d-md-block ">
            <ul className="d-flex align-items-center">
              <li className="list-item active">
                <a href="#">Mint</a>
              </li>

              <li className="list-item">
                <a href="#about">About</a>
              </li>

              <li className="list-item">
                <a href="#roadmap">Roadmap</a>
              </li>

              <li className="list-item">
                <a href="#lore">Lore</a>
              </li>  

              <li className="list-item">
                <a href="#faq">FAQ</a>
              </li>
              <li className="list-item">
                <a href="#team">Team</a>
              </li>

              <li>
                <button className="mint-now" onClick={() => loadWeb3()}>
                  {account
                    ? account.slice(0, 8) +
                      "..." +
                      account.slice(account.length - 5)
                    : "CONNECT"}
                </button>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center d-md-none">
            <button
              className="mint-now d-md-none mr-3"
              onClick={() => loadWeb3()}
            >
              {account
                ? account.slice(0, 4) +
                  "..." +
                  account.slice(account.length - 5)
                : "CONNECT"}
            </button>
            <div className="toggle-bar d-md-none" onClick={openHandler}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <MobileBar
        openHandler={openHandler}
        open={open}
        difference={difference}
        loadWeb3={loadWeb3}
        account={account}
      />
    </nav>
  );
};

export default Index;

const MobileBar = ({ openHandler, open, difference, loadWeb3, account }) => (
  <div className={`mobile-menu ${open ? "active" : null}`}>
    <div className="close-btn closebtn" onClick={openHandler}>
      <span style={{ fontSize: "35px", fontWeight: "bold" }}>&times;</span>
    </div>
    <div>
      <ul className="mobile-nav">
        <li>
          <a href="#" onClick={openHandler}>
            Mint
          </a>
        </li>
        <li>
          <a href="#about" onClick={openHandler}>
            About{" "}
          </a>
        </li>
        <li>
          <a href="#roadmap" onClick={openHandler}>
            Roadmap{" "}
          </a>
        </li>
        <li>
          <a href="#lore" onClick={openHandler}>
            Lore{" "}
          </a>
        </li>
        <li>
          <a href="#faq" onClick={openHandler}>
            FAQ{" "}
          </a>
        </li>
        <li>
          <a href="#team" onClick={openHandler}>
            Team{" "} 
            </a>
        </li>

        {/* <button className="mint-now" onClick={() => loadWeb3()}>
            {" "}
            {account
              ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
              : "CONNECT"}
          </button> */}
      </ul>
    </div>
  </div>
);
