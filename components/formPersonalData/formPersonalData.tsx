import { Box, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSchema from "schemas/userSchema";

export const FormPersonalData = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(UserSchema),
  });
  return (
    <Box>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("name")}
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="Name"
          helperText={errors?.name ? String(errors?.name?.message) : ""}
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
          helperText={errors?.name ? String(errors?.lastName?.message) : ""}
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
          helperText={errors?.name ? String(errors?.email?.message) : ""}
        />
      </Box>
    </Box>
  );
};
