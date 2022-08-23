import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
 import Testimonials from "../components/Testimonial/Testimonials";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <ChooseUs />
      <Courses />
      <Features />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};
export default Home;
