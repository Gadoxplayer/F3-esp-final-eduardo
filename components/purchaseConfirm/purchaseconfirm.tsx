import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
} from "@mui/material";
import { FC } from "react";

type props = {
  title: string;
  name: string;
  email: string;
  address: string;
  city: string;
  image: string;
  price: number;
};

export const PurchaseConfirm: FC<props> = ({
  title,
  name,
  email,
  address,
  city,
  image,
  price,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid spacing={2}>
        <Card sx={{ maxWidth: 345, alignSelf: "center", p: 2 }}>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt={title}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {price}$
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, p: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Personal data
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Name:
            </Typography>
            <Typography variant="body2">{name}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Email:
            </Typography>
            <Typography variant="body2">{email}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, p: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Delivery address
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Address Number:
            </Typography>
            <Typography variant="body2">{address}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              City:
            </Typography>
            <Typography variant="body2">{city}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
