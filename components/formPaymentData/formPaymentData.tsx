import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import PaymentSchema from "dh-marvel/features/checkout/schemas/paymentSchema";
import { useEffect, useState } from "react";

export const FormPaymentData = () => {
  const [inputsccname, setInputsccname] = useState<any>();
  const [inputscardNumber, setInputscardNumber] = useState<any>();
  const [inputexDate, setInputexDate] = useState<any>();
  const [inputcvv, setInputcvv] = useState<any>();

  /**
   * Validation using yup. Schema for validation imported from schema folder
   */
  const {
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(PaymentSchema),
    defaultValues: {
      ccname: "",
      cardNumber: "",
      exDate: "",
      cvv: "",
    },
  });
  const { register } = useFormContext();
  /**
   * handleInputsChange uses useEfect to capture an updated version of the content of the input
   */
  // const handleInputsChange = () => {
  //   console.log("ccname:", inputsccname);
  //   console.log("cardNumber:", inputscardNumber);
  //   console.log("exDate:", inputexDate);
  //   console.log("cvv:", inputcvv);
  // };
  // useEffect(() => {
  //   handleInputsChange();
  // }, [inputsccname, inputscardNumber, inputexDate, inputcvv]);

  return (
    <Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
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
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("cardNumber")}
          required
          fullWidth
          id="cardNumber"
          label="cardNumber"
          name="cardNumber"
          autoComplete="cardNumber"
          helperText={
            errors?.cardNumber ? String(errors?.cardNumber?.message) : ""
          }
          // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          //   setInputscardNumber(event.target.value);
          // }}
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1}>
          <Grid xs={4}>
            <TextField
              {...register("exDate")}
              required
              fullWidth
              id="exDate"
              label="Exp MM/YY"
              name="exDate"
              autoComplete="exDate"
              helperText={errors?.exDate ? String(errors?.exDate?.message) : ""}
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //   setInputexDate(event.target.value);
              // }}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              {...register("cvv")}
              required
              fullWidth
              id="cvv"
              label="CVV"
              name="cvv"
              autoComplete="cvv"
              helperText={errors?.cvv ? String(errors?.cvv?.message) : ""}
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //   setInputcvv(event.target.value);
              // }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
