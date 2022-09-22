import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import DeliverytSchema from "schemas/deliverySchema";

export const FormDeliveryData = () => {
  
  /**
   * Validation using yup. Schema for validation imported from schema folder
   */
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(DeliverytSchema),
  });

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
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
