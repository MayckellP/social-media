import { Box, Paper, Typography, Avatar, TextField } from "@mui/material";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import {
  AddPhotoAlternate,
  AddReaction,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  EmojiEmotionsSharp,
  EmojiEmotionsTwoTone,
  Event,
  ImageAspectRatio,
  PlayCircleFilled,
  Poll,
  VideoCall,
} from "@mui/icons-material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AddPost() {
  return (
    <Paper
      elevation={3}
      variant="elevation"
      sx={{
        backgroundColor: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {/* ------------------------------------AVATAR */}
      <Box marginRight={1}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            width: { xs: 46, md: 54, lg: 56 },
            height: { xs: 46, md: 54, lg: 56 },
          }}
        />
      </Box>
      {/* ------------------------------------POST */}
      <Box className="flex-1">
        {/* ----------------------------------TEXT INPUT */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          className="flex-1"
          gap={1}
        >
          <TextField
            id="standard-multiline-flexible"
            label="What's on your mind?"
            multiline
            maxRows={4}
            variant="filled"
            fullWidth
            sx={{
              fontFamily: "sans-serif",
            }}
            className="flex-1"
            InputLabelProps={{
              sx: {
                fontSize: 15,
              },
            }}
            InputProps={{
              sx: {
                fontSize: 12,
              },
            }}
          />

          <Fab size="small" color="error" aria-label="add emoji">
            <AddReaction fontSize="medium" />
          </Fab>
        </Box>

        {/* ----------------------------------POST OPTIONS */}
        <Stack
          spacing={1}
          direction="row"
          marginTop={1}
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {/* ---------------------ADD FOTO*/}
          <Button
            variant="text"
            size="small"
            startIcon={<AddPhotoAlternate />}
            sx={{
              fontWeight: "bold",
              color: "darkcyan",
              textTransform: "none",
            }}
          >
            Photo
          </Button>

          {/* ---------------------ADD FOTO*/}
          <Button
            variant="text"
            size="small"
            startIcon={<PlayCircleFilled />}
            sx={{
              fontWeight: "bold",
              color: "darkmagenta",
              textTransform: "none",
            }}
          >
            Video
          </Button>

          {/* ---------------------ADD FOTO*/}
          <Button
            variant="text"
            size="small"
            startIcon={<Poll />}
            sx={{
              fontWeight: "bold",
              color: "darkslategray",
              textTransform: "none",
            }}
          >
            Poll
          </Button>

          {/* ---------------------ADD FOTO*/}
          <Button
            variant="text"
            size="small"
            startIcon={<Event />}
            sx={{
              fontWeight: "bold",
              color: "darkorange",
              textTransform: "none",
            }}
          >
            Event
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
