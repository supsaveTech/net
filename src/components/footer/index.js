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
            href="https://twitter.com/goosepunks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          <a
            href="https://discord.gg/TjndR7Ycwk"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="discord" />
          </a>
        </div>
        <div className="footer-text">
          <span className="d-inline-block mr-4">Privacy Policy</span>
          <span className="d-inline-block mr-4">Term & conditions</span>
          <span className="d-inline-block mr-4">Press</span>
          <span>Investor</span>
          <br />
          <br />
          <span>&nbsp; &nbsp; &nbsp; 
          <a
            href="mailto:zane@goosepunks.com "
            target="_blank"
            rel="noreferrer"
          >
           Contact Us (24/7)
          </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Index;

