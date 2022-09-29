import { Box, Stack, TextField, useFormControl } from "@mui/material";
import {
  FormProvider,
  useController,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSchema from "dh-marvel/features/checkout/schemas/userSchema";
import { useEffect, useState } from "react";
import ControlledInput from "../controlledInput/controlledInput";
import useOrder from "dh-marvel/features/formContext/useOrder";
import { PersonalDataType } from "dh-marvel/features/checkout/personalData.type";

export const FormPersonalData = () => {
  const { dispatch } = useOrder();

  const methods = useForm<PersonalDataType>({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      name: "Test",
      lastname: "User",
      email: "test@user.com",
    },
  });
  const { watch, setFocus, handleSubmit } = methods;
  const email = watch("email");
  const name = watch("name");
  const lastname = watch("lastname");

  const onSubmit = (data: PersonalDataType) => {
    dispatch({
      type: "SET_CUSTOMER",
      payload: data,
    });
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <Box>
      <Stack spacing={2}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput name={"name"} label={"Name"} />
            <ControlledInput name={"lastname"} label={"Last Name"} />
            <ControlledInput name={"email"} label={"Email"} />
          </form>
        </FormProvider>
        <div>
          <h1>Validate your personal data</h1>
          Name: {name}
          Last Name: {lastname}
          Email: {email}
        </div>
      </Stack>
    </Box>
  );
};
