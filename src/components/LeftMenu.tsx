import { Paper, Box, Typography, Button } from "@mui/material";
import ProfileCard from "./ProfileCard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RowingIcon from "@mui/icons-material/Rowing";
import StoreIcon from "@mui/icons-material/Store";
import EventNoteIcon from "@mui/icons-material/EventNote";
import VideoStableIcon from "@mui/icons-material/VideoStable";
import CollectionsIcon from "@mui/icons-material/Collections";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ClassIcon from "@mui/icons-material/Class";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import Ads from "./Ads";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <Box display="flex" flexDirection="column" gap={2.5}>
      {type === "home" && <ProfileCard type={type} />}
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Box display="flex" flexDirection="column" gap={1.7}>
          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<PostAddIcon sx={{ color: "orange" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "orange",
                },
              }}
            >
              My Post
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<RowingIcon color="primary" />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                },
              }}
              color="primary"
            >
              Activity
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<StoreIcon sx={{ color: "gray" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "gray",
                },
              }}
            >
              Marketplace
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<EventNoteIcon sx={{ color: "magenta" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "magenta",
                },
              }}
            >
              Events
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<VideoStableIcon sx={{ color: "lightgreen" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "lightgreen",
                },
              }}
            >
              Albums
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<CollectionsIcon sx={{ color: "violet" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "violet",
                },
              }}
            >
              Videos
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<NewspaperIcon sx={{ color: "grey" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "grey",
                },
              }}
            >
              News
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<ClassIcon color="primary" />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                },
              }}
              color="primary"
            >
              Courses
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<SummarizeIcon sx={{ color: "blueviolet" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "blueviolet",
                },
              }}
            >
              Lists
            </Typography>
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{
              fontSize: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 0.5,
              color: "black",
            }}
            startIcon={<SettingsIcon sx={{ color: "black" }} />}
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              fontFamily="unset"
              sx={{
                display: {
                  sm: "none",
                  md: "block",
                  textTransform: "none",
                  color: "black",
                },
              }}
            >
              Settings
            </Typography>
          </Button>
        </Box>
      </Paper>
      <Ads size="sm" />
    </Box>
  );
}
