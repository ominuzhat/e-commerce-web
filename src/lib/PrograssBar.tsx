"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarComponent = () => {
  return (
    <ProgressBar
      height="5px"
      color="#93FFC8"
      options={{ showSpinner: true }}
      shallowRouting
    />
  );
};

export default ProgressBarComponent;
