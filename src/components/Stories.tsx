import { Box, Paper, Typography, Avatar } from "@mui/material";
import Image from "next/image";
import Stack from "@mui/material/Stack";

export default function Stories() {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "white",
        padding: "10px",
        overflowX: "scroll",
      }}
      className="scrollbar-hide"
    >
      <Stack
        spacing={3}
        direction="row"
        justifyContent="space-around"
        flexWrap="wrap"
        className="w-max"
      >
        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>

        {/* --------------------------------STORIE */}
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { xs: 56, md: 70, lg: 76 },
              height: { xs: 56, md: 70, lg: 76 },
            }}
            className="ring-2"
          />
          <Typography
            align="center"
            fontWeight="bold"
            fontSize={12}
            fontFamily="sans-serif"
          >
            Elisa
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

{
  /* <Box display="flex" gap={4} className="w-max">
  
  <Box display="flex" flexDirection="column" gap={0.5}>
    <Image
      src="https://images.pexels.com/photos/6353765/pexels-photo-6353765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width={80}
      height={80}
      alt="story"
      className="rounded-full ring-2 w-20 h-20"
    />
    <Typography
      align="center"
      fontWeight="bold"
      fontSize={12}
      fontFamily="sans-serif"
    >
      Elisa
    </Typography>
  </Box>
</Box>;
 */
}
