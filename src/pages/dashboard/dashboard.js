import React from "react";
import Header from "../../components/dashboardComponents/header/header";
import "../../assets/css/main.css";
import "../../assets/css/theme.css";
import "../../assets/css/responsive.css";
import Sidebar from "../../components/dashboardComponents/sidebar/sidebar";
import Innercontent from "../../components/dashboardComponents/bodycontent/mainBody";
import Footer from "../../components/dashboardComponents/bodycontent/footer/footer";
import MobileBar from "../../components/dashboardComponents/mobileBar/mobileBar";
const Dashboard = () => {
  return (
    <div>
      <div class="page_wrapper">
        <Header />
        <div class="content-wrapper container-fluid d-flex justify-content-center justify-content-lg-start">
          <div class="row w-100">
            <Sidebar />
            <Innercontent />
            <div class="col-1"></div>
          </div>
        </div>
        <MobileBar />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
