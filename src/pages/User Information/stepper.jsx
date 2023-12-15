import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  {
    label: "PERSONAL INFORMATION",
  },
  {
    label: "PASSPORT / TRAVELER",
  },
  {
    label: "MEDICAL INSURANCE",
  },
  {
    label: "TERMS AND CONDITIONS",
  },
  {
    label: "REVIEW APPLICATION",
  },
  {
    label: "PAYMENT",
  },
];

function Steppers() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <div>
        <div className=" md:w-1/2 w-full mx-auto md:ml-auto pt-36">
          <h6 className="font-displace text-[30px] text-gray-600 pb-5  text-center md:text-start">
            Steps
          </h6>
        </div>
        <hr />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0",
          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step) => (
              <Step>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </>
  );
}

export default Steppers;
