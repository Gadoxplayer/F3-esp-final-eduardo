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

type props = {
  title: string;
  image: string;
  description: string;
  prices: number;
  characters: string;
};

export const CardTemplate: FC<props> = ({
  title,
  image,
  prices,
  description,
  characters,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {prices}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>

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
      </CardActions>
    </Card>
  );
};
