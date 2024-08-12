"use client";

import * as React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThumbUp } from "@mui/icons-material";

const options = ["Option 1", "Option 2", "Option 3"];
const ITEM_HEIGHT = 48;

export default function Comments() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      {/* -------------------------------------ID USER */}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 28, md: 32, lg: 35 },
              height: { xs: 28, md: 32, lg: 35 },
            }}
          />
          <Typography fontWeight="bold" fontSize={13}>
            Remy Sharp
          </Typography>
        </Box>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
        >
          <MoreVertIcon fontSize="small" />
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

      {/* -------------------------------------TEXT */}
      <Typography variant="body2" color="black" fontSize={12} marginLeft={5.5}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>

      {/* -------------------------------------INTERACTIONS */}
      <Box
        display="flex"
        alignItems="center"
        sx={{
          paddingX: 1.5,
          /* bgcolor: "whitesmoke", */
          borderRadius: 2,
        }}
        marginLeft={4}
        gap={2}
        flexWrap="wrap"
      >
        <IconButton aria-label="likes" size="small">
          <ThumbUp sx={{ fontSize: 15 }} />
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box display="flex" alignItems="center">
          <Typography
            fontSize={11}
            fontFamily="revert"
            display="flex"
            alignItems="center"
            fontWeight="bold"
            color="gray"
          >
            123
          </Typography>
          <Typography
            fontSize={11}
            fontFamily="unset"
            fontWeight="bold"
            marginLeft={0.5}
            color="gray"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            Likes
          </Typography>
          <IconButton
            sx={{
              fontSize: 11,
              fontWeight: "bold",
              marginLeft: 3,
              color: "gray",
            }}
            color="inherit"
          >
            Reply
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
