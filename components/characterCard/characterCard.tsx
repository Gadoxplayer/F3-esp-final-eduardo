import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Box } from "@mui/system";

type props = {
  name: string;
  image: string;
  description: string;
  charId: number;
};

export const CharacterCard: FC<props> = ({ name, image, description, charId }) => {
  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={name}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>
          {charId}
        </CardContent>
      </Card>
    </Box>
  );
};
