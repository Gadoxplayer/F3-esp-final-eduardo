import { Box, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSchema from "schemas/userSchema";

export const FormPersonalData = () => {
  const { register } = useFormContext();

  //   const methods = useForm({
  //     mode: "onBlur",
  //     resolver: yupResolver(UserSchema),
  //   });
  //   console.log(errors);

  const formOptions: any = {
    mode: "onBlur",
    resolver: yupResolver(UserSchema),
  };

  const { formState }: any = useForm(formOptions);
  const { errors }: any = formState;

  const handleBlur = (errors: any) => {
    console.log(errors.name, "hola");
  };

  return (
    <form onBlur={handleBlur}>
      <Box sx={{ width: "100%", p: 2 }}>
        <TextField
          {...register("name")}
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="Name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.name?.message}</div>
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
    </form>
  );
};
