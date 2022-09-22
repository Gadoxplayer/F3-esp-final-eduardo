import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import UserSchema from "schemas/userSchema";
import { FormDeliveryData } from "../formDeliveryData/formDeliveryData";
import { FormPaymentData } from "../formPaymentData/formPaymentData";
import { FormPersonalData } from "../formPersonalData/formPersonalData";
import BodySingle from "../layouts/body/single/body-single";

type props = {
  title: string;
};

const steps = ["Personal Data", "Delivery Adress", "Payment Infomation"];

export const CheckoutView: FC<props> = ({ title }) => {
  const [activeStep, setActiveStep] = useState(0);

  // methods to configurate the forms
  const methods = useForm();
  // methods to configurate the stepper

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
    <BodySingle title={"Checkout: title"}>
      <FormProvider {...methods}>
        <form>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {activeStep === 0 && <FormPersonalData />}
                  {activeStep === 1 && <FormDeliveryData />}
                  {activeStep === 2 && <FormPaymentData />}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} type="submit">
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </form>
      </FormProvider>
    </BodySingle>
  );
};
