import { Paper, Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function ProfileCard({ type }: { type: "home" | "profile" }) {
  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Box className="h-20 relative">
          <Image
            src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
            fill
            className="object-cover rounded-md"
          />
          <Image
            src="https://images.pexels.com/photos/1314584/pexels-photo-1314584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
            className=" rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
            width={100}
            height={100}
          />
        </Box>
        <Typography textAlign="center" fontWeight="bold" marginTop={2.5}>
          Mayckell Perez P.
        </Typography>
        <Box display="flex" gap={1.5} justifyContent="center">
          <Typography fontSize={12} color="grey">
            Mi estado
          </Typography>
          <Typography fontSize={12} color="grey">
            500 followers
          </Typography>
        </Box>
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{
            width: "40%",
            fontSize: 13,
            textTransform: "none",
            margin: "auto",
          }}
          href="/profile/123"
        >
          My Profile
        </Button>
      </Box>
    </Paper>
  );
}
