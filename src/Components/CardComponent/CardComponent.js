import React from "react";
import {
  Card,
  CardContent,
  Chip,
  CardMedia,
  Typography,
  CardActionArea
} from "@mui/material";
import "../CardComponent/CardComponent.css";
export default function CardComponent() {
  return (
    <>
      <Card sx={{ maxWidth: 150 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://imgs.search.brave.com/2tmU73vRdm948UX-j_n0TVIp_FHf0AFpVxkDeKoEOVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NzE1OTM2NS9waG90/by9wb3J0cmFpdC1v/Zi15b3VuZy1zbWls/aW5nLXdvbWFuLWZh/Y2UtcGFydGlhbGx5/LWNvdmVyZWQtd2l0/aC1mbHlpbmctaGFp/ci1pbi13aW5keS1k/YXktc3RhbmRpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUkxNmNfWnpRSEVl/R29QVVZyVlA5cFB1/c1N6c215bXZWS2RR/VmdQdVZkRG89"
            alt="green"
          />
          <CardContent>
            <div>
              <Chip
                className="chip"
                label="100M Follows"
                style={{ color: "White" }}
              />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <h4 className="Card-title">New Bollywood</h4>
    </>
  );
}
