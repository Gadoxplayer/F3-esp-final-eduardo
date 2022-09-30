import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import { FC, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import UserSchema from "dh-marvel/features/checkout/schemas/userSchema";
import { FormDeliveryData } from "../formDeliveryData/formDeliveryData";
import { FormPaymentData } from "../formPaymentData/formPaymentData";
import { FormPersonalData } from "../formPersonalData/formPersonalData";
import BodySingle from "../layouts/body/single/body-single";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

type props = {
  title: string;
  image: string;
  price: number;
  id: number;
};

const steps = ["Personal Data", "Delivery Adress", "Payment Infomation"];

export const CheckoutView: FC<props> = ({ title, image, price, id }) => {
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

  return (
    <BodySingle title={`Checkout: ${title}`}>
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

        <React.Fragment>
          {activeStep === 0 && (
            <FormPersonalData activeStep={activeStep} handleNext={handleNext} />
          )}
          {activeStep === 1 && (
            <FormDeliveryData
              activeStep={activeStep}
              handleNext={handleNext}
              onPrevClick={handleBack}
            />
          )}
          {activeStep === 2 && (
            <FormPaymentData
              activeStep={activeStep}
              handleNext={handleNext}
              onPrevClick={handleBack}
            />
          )}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
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
              {activeStep === steps.length - 1 ? (
                <Link href={`/confirmation/${id}`}>"Finish"</Link>
              ) : (
                "Next"
              )}
            </Button>
          </Box> */}
        </React.Fragment>
      </Box>
      <Card sx={{ maxWidth: 345, alignSelf: "center" }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={title}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}$
          </Typography>
        </CardContent>
      </Card>
    </BodySingle>
  );
};
