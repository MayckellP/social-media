import { Paper, Box } from "@mui/material";
import Post from "./Post";

export default function PostFeed() {
  return (
    <Paper
      elevation={3}
      variant="elevation"
      sx={{
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Paper>
  );
}
