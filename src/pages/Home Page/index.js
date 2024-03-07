import React from "react";
import { useLocation } from "react-router-dom";
import Asia from "./asia";
import Banner from "./banner";
import Description from "./description";
import Europe from "./europe";
import Footer from "./footer";
import Blog from "./blog";
import FAQ from "./Tap.faqs";

function Landing() {
  const location = useLocation();
  console.log("some path", location.pathname);
  return (
    <>
      <Banner color={location.pathname} />
      <Description />
      <Europe />
      <Asia />
      <Blog/>
      <FAQ/>
      <Footer />
    </>
  );
}

export default Landing;
