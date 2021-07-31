import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeAssessment from "./MainComponent";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

const AssessmentComponent = ({ progress }) => {
  return (
    <>
      <PracticeHeader
        title='Assessment'
        description="Check what you've learnt in the unit."
        progress={progress}
      />
      <PracticeAssessment />
    </>
  );
};

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(AssessmentComponent);