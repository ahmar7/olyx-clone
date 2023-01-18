import React from "react";
import Explorelast from "../../components/homeComponents/explorelast/explorelast";
import Faqs from "../../components/homeComponents/faqs/faqs";
import Features from "../../components/homeComponents/features/features";
import Footer from "../../components/homeComponents/footer/footer";
import Navbar from "../../components/homeComponents/header/header";
import HeroSection from "../../components/homeComponents/heroSection/heroSection";
import Perks from "../../components/homeComponents/perks/perks";
import Steps from "../../components/homeComponents/steps/steps";
import Testimonial from "../../components/homeComponents/testimonial/testimonial";
import Tokens from "../../components/homeComponents/tokens/tokens";
import "./home.scss";
import "./home.css";
const Home = () => {
  return (
    <div className="main-bg">
      <Navbar />
      <HeroSection />
      <Features />
      <Perks />
      <Tokens />
      <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
