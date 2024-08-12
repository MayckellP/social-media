import { Box, Paper, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function UserMediaCard({ userId }: { userId?: String }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        paddingTop: 0.5,
        display: "flex,",
        flexDirection: "column",
      }}
    >
      {/* ----------------------------TOP SIDE */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight="bold"
          color="GrayText"
          fontSize={12}
          fontFamily="sans-serif"
        >
          User Media
        </Typography>
        <Button sx={{ fontSize: 11, color: "darkblue", textTransform: "none" }}>
          See all
        </Button>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={0.5}
        justifyContent="center"
        alignItems="center"
      >
        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>

        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/3932277/pexels-photo-3932277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>

        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/25526698/pexels-photo-25526698/free-photo-of-five-storied-pagoda-in-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>

        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/1314584/pexels-photo-1314584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>

        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>

        <Box className="relative" minWidth={90} minHeight={110}>
          <Image
            src="https://images.pexels.com/photos/7651066/pexels-photo-7651066.jpeg"
            alt="Image-description"
            fill
            className="object-cover rounded-md"
          />
        </Box>
      </Box>
    </Paper>
  );
}
