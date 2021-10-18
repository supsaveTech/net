import "./style.css";
import Header from "../header";
import Footer from "../footer";

const Index = ({ children, difference, loadWeb3, account }) => {
  return (
    <div>
      <Header difference={difference} loadWeb3={loadWeb3} account={account} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
