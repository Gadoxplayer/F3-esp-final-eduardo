import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

type props = {
  title: string;
  image: string;
  description: string;
  price: number;
  oldPrice: number;
  characters: string | string[];
  stock: number;
  available: number;
};

export const CardDetail: FC<props> = ({
  title,
  image,
  price,
  oldPrice,
  description,
  characters,
  stock,
  available,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Before: {oldPrice}$
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        {stock ? (
          <Link href="/checkout">
            <Button size="small">Comprar</Button>
          </Link>
        ) : (
          <Button size="small" disabled>
            Comprar
          </Button>
        )}

        {description ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        ) : (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>No description available</Typography>
            </AccordionDetails>
          </Accordion>
        )}

        {available ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Characters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{characters}</Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
      </CardActions>
    </Card>
  );
};
