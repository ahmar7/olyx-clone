import React from "react";
import Features from "../../components/features/features";
import Navbar from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import Perks from "../../components/perks/perks";
import Tokens from "../../components/tokens/tokens";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Tokens />
      <Features />
      <Perks />
    </div>
  );
};

export default Dashboard;
