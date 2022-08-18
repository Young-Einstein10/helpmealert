import { Fragment } from "react";
import type { NextPage } from "next";
import HomeSection from "components/landing/HomeSection";
import InfoSection from "components/landing/InfoSection";

const Home: NextPage = () => {
  return (
    <Fragment>
      <HomeSection />
      <InfoSection />
    </Fragment>
  );
};

export default Home;
