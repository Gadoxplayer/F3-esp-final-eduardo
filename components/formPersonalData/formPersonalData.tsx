import { Box, TextField } from "@mui/material";

export const FormPersonalData = () => {
  return (
    <form>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          name="Name"
          autoComplete="Name"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="LastName"
          autoComplete="lastName"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Box>
    </form>
  );
};
