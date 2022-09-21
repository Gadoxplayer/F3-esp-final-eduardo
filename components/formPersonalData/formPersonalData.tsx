import { Box, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const FormPersonalData = () => {
  const register = useFormContext();

  return (
    <>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register}
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
          {...register}
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
          {...register}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Box>
    </>
  );
};
