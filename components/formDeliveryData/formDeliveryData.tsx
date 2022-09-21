import { Box, Grid, TextField } from "@mui/material";

export const FormDeliveryData = () => {
  return (
    <form>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="adressNumber"
          label="Adress Number"
          name="adressNumber"
          autoComplete="adressNumber"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          fullWidth
          id="typeOfHouse"
          label="Apartment number, floor, etc."
          name="typeOfHouse"
          autoComplete="typeOfHouse"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          autoComplete="city"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1}  >
          <Grid xs={8}>
            <TextField
              required
              fullWidth
              id="province"
              label="Province"
              name="province"
              autoComplete="province"
            />
          </Grid>
          <Grid xs={4} >
            <TextField
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
    </form>
  );
};
