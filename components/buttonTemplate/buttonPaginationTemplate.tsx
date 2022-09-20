import { Pagination, Stack } from "@mui/material";
import React from "react";
import { FC } from "react";

export const ButtonPaginationTemplate: FC<any> = ({ page: any }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={12}
        color="primary"
        // page={page}
        // onChange={handleChange}
      />
      <br></br>
    </Stack>
  );
};
