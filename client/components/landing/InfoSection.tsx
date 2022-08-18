import React, { Fragment } from "react";
import HowItWorks from "./HowItWorks";
import ImprovingLives from "./ImprovingLives";
import AddEmergencyContact from "./AddEmergencyContact";
// import CommunityFeedback from "./CommunityFeedback";
import FAQs from "./FAQ";
import GetStarted from "./GetStarted";

const InfoSection = () => {
  return (
    <Fragment>
      <HowItWorks />
      <ImprovingLives />
      <AddEmergencyContact />
      {/* <CommunityFeedback /> */}
      <FAQs />
      <GetStarted />
    </Fragment>
  );
};

export default InfoSection;
