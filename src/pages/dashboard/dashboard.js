import React from "react";
import Explorelast from "../../components/explorelast/explorelast";
import Faqs from "../../components/faqs/faqs";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import Perks from "../../components/perks/perks";
import Steps from "../../components/steps/steps";
import Testimonial from "../../components/testimonial/testimonial";
import Tokens from "../../components/tokens/tokens";

const Dashboard = () => {
  return (
    <div>
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

export default Dashboard;