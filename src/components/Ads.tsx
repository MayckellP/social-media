"use client";

import { Box, Typography, Paper, Menu, Button } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const options = ["Option 1", "Option 2", "Option 3"];
const ITEM_HEIGHT = 48;

export default function Ads({ size }: { size: "sm" | "md" | "lg" }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} sx={{ paddingX: 1.5 }}>
      <Card sx={{ maxWidth: 345, border: "none", boxShadow: "none" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            fontWeight="bold"
            color="GrayText"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Sponsored Ads
          </Typography>

          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box className="w-full min-h-40 relative">
          <Image
            src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-md"
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            fontWeight="bold"
            fontSize={13}
            component="div"
          >
            BigChef Lounge
          </Typography>
          <Typography variant="body2" fontSize={12} color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            variant="text"
            sx={{
              width: "100%",
              fontWeight: "bold",
              fontSize: 13,
              textTransform: "none",
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
