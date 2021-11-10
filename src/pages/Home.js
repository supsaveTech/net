/* eslint-disable jsx-a11y/anchor-has-content */
import { useState, useEffect } from "react";
import { Layout } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HeroSection,
  AboutSection,
  RoadmapSection,
  LoreSection,
  GallarySection,
  FaqSection,
  TeamSection,
} from "../sections";
import moment from "moment";
toast.configure();
const Home = ({
  account,
  displayPrice,
  totalSupply,
  loadWeb3,
  mint,
  maxSupply,
}) => {
  const [show, setShow] = useState(false);
  let difference = +new moment("2021-11-11 08:00").utc() - +new Date();
  const d = new Date();
  difference = difference - d.getTimezoneOffset() * 60000;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div id="top">
      <a href="#top" className={`sticky-btn ${show ? "show" : null}`}></a>
      <Layout difference={difference} loadWeb3={loadWeb3} account={account}>
        <div className="main-bg">
          <HeroSection
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            difference={difference}
            account={account}
            mint={mint}
            totalSupply={totalSupply}
            displayPrice={displayPrice}
            maxSupply={maxSupply}
          />
          <AboutSection />
        </div>
        <RoadmapSection />
        <GallarySection />
        <LoreSection/>
        <FaqSection />
        <TeamSection />
      </Layout>
    </div>
  );
};

export default Home;
