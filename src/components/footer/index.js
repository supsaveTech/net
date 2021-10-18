import "./style.css";
import logoImage from "../../assets/images/logo.png";
import Twitter from "../../assets/images/twitter.png";
import Discord from "../../assets/images/discord.png";
const Index = () => {
  return (
    <footer className="section-space">
      <div className="container text-center">
        <div className="footer-logo">
          <img src={logoImage} alt="" />
        </div>
        <div className="social-icons">
          <a
            href="https://twitter.com/secretbearnft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          <a
            href="https://discord.gg/3UTF6hq4cm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="twitter" />
          </a>
        </div>
        <div className="footer-text">
          <span className="d-inline-block mr-4">Privay Policy</span>
          <span>Term & conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Index;
