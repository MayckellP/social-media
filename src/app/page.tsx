import { Box } from "@mui/material";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";
import AddPost from "@/components/AddPost";
import PostFeed from "@/components/PostFeed";

//-----------AUTH
import { ClerkLoaded } from "@clerk/nextjs";
import { SignedOut, SignedIn } from "@clerk/clerk-react";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1.5}
      sx={{
        paddingX: { xs: 0, sm: 5, md: 8 },
      }}
      justifyContent="center"
    >
      {/* ----------------------------------------------------LEFT SIDE */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: { lg: "18%" },
        }}
      >
        <LeftMenu type="home" />
      </Box>

      {/* ----------------------------------------------------CENTER SIDE */}
      <Box
        sx={{
          /* display: { xs: "block", lg: "block", xl: "block" }, */
          width: { xs: "100%", sm: "68%", md: "70%", lg: "45%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          gap={1.5}
        >
          {/* -----------------------------------STORIES*/}
          <Stories></Stories>

          {/* -----------------------------------ADD POST*/}
          <AddPost></AddPost>

          {/* -----------------------------------POSTS*/}
          <PostFeed></PostFeed>
        </Box>
      </Box>

      {/* ----------------------------------------------------RIGHT SIDE */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: { sm: "38%", md: "28%", lg: "22%" },
        }}
      >
        <RightMenu userId={"123"} />
      </Box>
    </Box>
  );
}
