import { Box, Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const FormDeliveryData = () => {
  const {register} = useFormContext();

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
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
