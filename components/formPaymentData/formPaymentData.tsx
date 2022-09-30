import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Stack, TextField } from "@mui/material";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import PaymentSchema from "dh-marvel/features/checkout/schemas/paymentSchema";
import { FC, useEffect, useState } from "react";
import useOrder from "dh-marvel/features/formContext/useOrder";
import { PaymentDataType } from "dh-marvel/features/checkout/paymentData.type";
import ControlledInput from "../controlledInput/controlledInput";
import StepperNavigation from "../stepperNavigator/stepperNavigator";
import { postForm } from "dh-marvel/features/checkout/postForm";

export type RegisterFormProps = {
  activeStep: number;
  handleNext: () => void;
  onPrevClick: () => void;
};
export const FormPaymentData: FC<RegisterFormProps> = ({
  activeStep,
  handleNext,
  onPrevClick
}: RegisterFormProps)   => {
  const { dispatch, state } = useOrder();

  const methods = useForm<PaymentDataType>({
    resolver: yupResolver(PaymentSchema),
    defaultValues: {
      number: "42424242 4242 4242",
      cvc: "123",
      expDate: "02/28",
      nameOnCard: "TEST USER",
    },
  });
  const { watch, setFocus, handleSubmit } = methods;
  const number = watch("number");
  const cvc = watch("cvc");
  const expDate = watch("expDate");
  const nameOnCard = watch("nameOnCard");

  const onSubmit = (data: PaymentDataType) => {
    dispatch({
      type: "SET_CARD",
      payload: data,
    });
    postForm({...state.order, card: data})
    handleNext();
  };

  useEffect(() => {
    setFocus("nameOnCard");
  }, []);

  const handleonPrevClick = () =>{
    onPrevClick();
  }

  return (
    <Box sx={{ m: 2 }}>
    <Stack spacing={2}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput name={"nameOnCard"} label={"Name On Card"} />
          <ControlledInput name={"number"} label={"Number"} />
          <Grid container rowSpacing={1}>
            <Grid xs={4}>
              <ControlledInput name={"expDate"} label={"Expedition Date"} />
            </Grid>
            <Grid xs={4}>
              <ControlledInput name={"cvc"} label={"CVC"} />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <StepperNavigation
          activeStep={activeStep}
          onPrevClick={handleSubmit(handleonPrevClick)}
          onNextClick={handleSubmit(onSubmit)}
        />
      <div>
        <h1>Validate your payment data</h1>
        Name: {nameOnCard}
        <br />
        Number: {number}
        <br />
        Expiration date: {expDate}
        <br />
        CVC: {cvc}
      </div>
    </Stack>
    </Box>
  );
};

{
  /* <TextField
{...register("ccname")}
required
fullWidth
id="ccname"
label="Name as it appears on your card"
name="ccname"
autoComplete="ccname"
helperText={errors?.ccname ? String(errors?.ccname?.message) : ""}
// onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//   setInputsccname(event.target.value);
// }}
/> */
}
