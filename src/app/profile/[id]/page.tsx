import { Box, Typography, Button } from "@mui/material";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";
import AddPost from "@/components/AddPost";
import PostFeed from "@/components/PostFeed";
import Image from "next/image";

const Page = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={2}
      paddingX={3}
      justifyContent="center"
    >
      {/* ----------------------------------------------------LEFT SIDE */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: { lg: "18%" },
        }}
      >
        <LeftMenu type="profile" />
      </Box>

      {/* ----------------------------------------------------CENTER SIDE */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "68%", md: "70%", lg: "45%" },
        }}
        gap={2.5}
      >
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Box className="h-60 relative">
            <Image
              src="https://images.pexels.com/photos/5425686/pexels-photo-5425686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Paella dish"
              className="object-cover rounded-sm"
              fill
            />
            <Image
              src="https://images.pexels.com/photos/1314584/pexels-photo-1314584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Paella dish"
              className=" rounded-full w-40 h-40 object-cover absolute left-0 right-0 m-auto -bottom-20 ring-2 ring-white z-10"
              width={1000}
              height={1000}
            />
          </Box>
          <Typography
            textAlign="center"
            fontWeight="bold"
            fontSize={18}
            marginTop={10}
          >
            Mayckell Perez P.
          </Typography>
          <Box display="flex" gap={6} justifyContent="center" marginTop={1}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontSize={14} fontWeight="bold" color="black">
                144
              </Typography>
              <Typography fontSize={12} fontWeight="bold" color="black">
                Posts
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontSize={14} fontWeight="bold" color="black">
                1.2K
              </Typography>
              <Typography fontSize={12} fontWeight="bold" color="black">
                Followers
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontSize={14} fontWeight="bold" color="black">
                1.6K
              </Typography>
              <Typography fontSize={12} fontWeight="bold" color="black">
                Following
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* -----------------------------------STORIES*/}
        <Stories></Stories>
        {/* -----------------------------------ADD POST*/}
        <AddPost></AddPost>
        {/* -----------------------------------POSTS*/}
        <PostFeed></PostFeed>
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
};

export default Page;
