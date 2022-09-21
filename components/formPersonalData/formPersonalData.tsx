import { Box, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormPersonalData = () => {
  const { register } = useFormContext();

  return (
    <>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("name")}
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
          {...register("lastName")}
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lastName"
        />
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("email")}
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
