"use client";

import * as React from "react";
import { Box, Avatar, Typography, Divider, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddReaction from "@mui/icons-material/AddReaction";
import ForumIcon from "@mui/icons-material/Forum";
import ShareIcon from "@mui/icons-material/Share";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import Comments from "./Comments";

const options = ["Option 1", "Option 2", "Option 3"];
const ITEM_HEIGHT = 48;

export default function Post() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "10px",
      }}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {/* ------------------------------------------------------------------------POST */}
      <Box display="flex" flexDirection="column" gap={2}>
        {/* -------------------------------------ID USER */}
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                width: { xs: 30, md: 40, lg: 42 },
                height: { xs: 30, md: 40, lg: 42 },
              }}
            />
            <Typography fontWeight="bold" fontSize={15}>
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

        {/* -------------------------------------DESCRIPTION */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Box className="w-full min-h-96 relative">
            <Image
              src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image-description"
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
            />
          </Box>
        </Box>

        {/* -------------------------------------REACTIONS */}
        <Box display="flex" justifyContent="space-evenly" gap={1}>
          {/* ------------------------LIKES*/}
          <Box
            display="flex"
            alignItems="center"
            sx={{
              paddingX: 1.5,
              bgcolor: "whitesmoke",
              borderRadius: 2,
            }}
            gap={2}
          >
            <IconButton aria-label="likes">
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box display="flex" alignItems="center">
              <Typography
                fontSize={15}
                fontFamily="revert"
                display="flex"
                alignItems="center"
              >
                123
              </Typography>
              <Typography
                fontSize={12}
                fontFamily="unset"
                fontWeight="bold"
                marginLeft={0.5}
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                Likes
              </Typography>
            </Box>
          </Box>

          {/* ------------------------COMMENTS*/}
          <Box
            display="flex"
            alignItems="center"
            sx={{
              paddingX: 1.5,
              bgcolor: "whitesmoke",
              borderRadius: 2,
            }}
            gap={1}
          >
            <IconButton aria-label="comments">
              <ForumIcon fontSize="small" />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box display="flex" alignItems="center">
              <Typography
                fontSize={15}
                fontFamily="revert"
                display="flex"
                alignItems="center"
              >
                56
              </Typography>
              <Typography
                fontSize={12}
                fontFamily="unset"
                fontWeight="bold"
                marginLeft={0.5}
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                Comments
              </Typography>
            </Box>
          </Box>

          {/* ------------------------SHARES*/}
          <Box
            display="flex"
            alignItems="center"
            sx={{
              paddingX: 1.5,
              bgcolor: "whitesmoke",
              borderRadius: 2,
            }}
            gap={1}
          >
            <IconButton aria-label="shares">
              <ShareIcon fontSize="small" />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box display="flex" alignItems="center">
              <Typography
                fontSize={15}
                fontFamily="revert"
                display="flex"
                alignItems="center"
              >
                15
              </Typography>
              <Typography
                fontSize={12}
                fontFamily="unset"
                fontWeight="bold"
                marginLeft={0.5}
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                Shares
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ------------------------------------------------------------------------COMMENTS */}
      <Box display="flex" flexDirection="column" gap={2}>
        {/* -------------------------------------INPUT */}
        <Box display="flex" gap={1}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 25, md: 28, lg: 32 },
              height: { xs: 25, md: 28, lg: 32 },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            className="flex-1"
            gap={1}
          >
            <TextField
              id="standard"
              label="Whrite a comment..."
              variant="filled"
              fullWidth
              sx={{
                fontFamily: "sans-serif",
              }}
              className="flex-1"
              size="small"
              InputLabelProps={{
                sx: {
                  fontSize: 13,
                },
              }}
              InputProps={{
                sx: {
                  fontSize: 13,
                },
              }}
            />

            <IconButton
              size="medium"
              sx={{
                color: "black",
              }}
              aria-label="send"
            >
              <SendIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
        <Comments />
      </Box>
    </Box>
  );
}
