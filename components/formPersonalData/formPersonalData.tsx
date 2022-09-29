import { Box, TextField, useFormControl } from "@mui/material";
import {
  useController,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSchema from "schemas/userSchema";
import { useEffect, useState } from "react";

export const FormPersonalData = () => {
  const [inputsName, setInputsName] = useState<any>();
  const [inputsLastName, setInputsLastName] = useState<any>();
  const [inputsEmail, setInputsEmail] = useState<any>();

  /**
   * Validation using yup. Schema for validation imported from schema folder
   */
  const {
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(UserSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
    },
  });

  const { register } = useFormContext();
  /**
   * handleInputsChange uses useEfect to capture an updated version of the content of the input
   */
  const handleInputsChange = () => {
    console.log("name:", inputsName);
    console.log("lastName:", inputsLastName);
    console.log("email:", inputsEmail);
  };
  useEffect(() => {
    handleInputsChange();
  }, [inputsName, inputsLastName, inputsEmail]);

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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputsName(event.target.value);
          }}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputsLastName(event.target.value);
          }}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputsEmail(event.target.value);
          }}
        />
      </Box>
    </Box>
  );
};
