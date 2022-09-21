import { Box, Grid, TextField } from "@mui/material";

export const FormPaymentData = () => {
  return (
    <form>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="ccname"
          label="Name as it appears on your card"
          name="ccname"
          autoComplete="ccname"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="cardNumber"
          label="cardNumber"
          name="cardNumber"
          autoComplete="cardNumber"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <Grid container rowSpacing={1}>
          <Grid xs={4}>
            <TextField
              required
              fullWidth
              id="exDate"
              label="Exp MM/YY"
              name="exDate"
              autoComplete="exDate"
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              required
              fullWidth
              id="CVV"
              label="CVV"
              name="CVV"
              autoComplete="CVV"
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
