import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import DeliverytSchema from "schemas/deliverySchema";
import { useEffect, useState } from "react";

export const FormDeliveryData = () => {
  const [inputsaddressNumber, setInputsaddressNumber] = useState<any>();
  const [inputstypeOfHouse, setInputstypeOfHouse] = useState<any>();
  const [inputscity, setInputscity] = useState<any>();
  const [inputsprovince, setInputsprovince] = useState<any>();
  const [inputspostalCode, setInputspostalCode] = useState<any>();

  /**
   * Validation using yup. Schema for validation imported from schema folder
   */
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(DeliverytSchema),
    defaultValues: {
      addressNumber: "",
      typeOfHouse: "",
      city: "",
      province: "",
      postalCode: "",
    },
  });
  /**
   * handleInputsChange uses useEfect to capture an updated version of the content of the input
   */
  const handleInputsChange = () => {
    console.log("addressNumber:", inputsaddressNumber);
    console.log("typeOfHouse:", inputstypeOfHouse);
    console.log("city:", inputscity);
    console.log("province:", inputsprovince);
    console.log("postalCode:", inputspostalCode);
  };
  useEffect(() => {
    handleInputsChange();
  }, [
    inputsaddressNumber,
    inputstypeOfHouse,
    inputscity,
    inputsprovince,
    inputspostalCode,
  ]);

  return (
    <>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("addressNumber")}
          required
          fullWidth
          id="addressNumber"
          label="Address Number"
          name="addressNumber"
          autoComplete="addressNumber"
          helperText={
            errors?.addressNumber ? String(errors?.addressNumber?.message) : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputsaddressNumber(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("typeOfHouse")}
          fullWidth
          id="typeOfHouse"
          label="Apartment number, floor, etc."
          name="typeOfHouse"
          autoComplete="typeOfHouse"
          helperText={
            errors?.typeOfHouse ? String(errors?.typeOfHouse?.message) : ""
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputstypeOfHouse(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("city")}
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
          helperText={errors?.city ? String(errors?.city?.message) : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputscity(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1}>
          <Grid xs={8}>
            <TextField
              {...register("province")}
              required
              fullWidth
              id="province"
              label="Province"
              name="province"
              autoComplete="province"
              helperText={
                errors?.province ? String(errors?.province?.message) : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputsprovince(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              {...register("postalCode")}
              required
              fullWidth
              id="postalCode"
              label="Postal Code"
              name="postalCode"
              autoComplete="postalCode"
              helperText={
                errors?.postalCode ? String(errors?.postalCode?.message) : ""
              }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputspostalCode(event.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
