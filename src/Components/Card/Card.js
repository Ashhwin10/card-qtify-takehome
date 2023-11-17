import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from "@mui/material";

export default function CardComponent() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent></CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
