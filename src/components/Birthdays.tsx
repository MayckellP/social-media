import {
  Box,
  Avatar,
  Typography,
  Divider,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function Birthdays() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        display: "flex,",
        flexDirection: "column",
      }}
    >
      {/* ----------------------------TOP SIDE */}
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Typography
          fontWeight="bold"
          color="GrayText"
          fontSize={12}
          fontFamily="sans-serif"
        >
          Birthdays
        </Typography>
      </Box>

      {/* ----------------------------BIRTHDAYS*/}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={0.5}
        marginY={0.5}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: { xs: 25, md: 35, lg: 37 },
              height: { xs: 25, md: 35, lg: 37 },
            }}
          />
          <Typography fontWeight="bold" fontSize={12}>
            Remy Sharp
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Button
            variant="text"
            size="small"
            color="success"
            sx={{ fontSize: "10px" }}
            endIcon={<CelebrationIcon />}
          >
            <Typography
              fontSize={12}
              fontWeight="bold"
              fontFamily="monospace"
              sx={{
                display: { sm: "none", md: "block", textTransform: "none" },
              }}
            >
              Celebrate
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* ----------------------------GIFTS */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        padding={1}
        sx={{
          bgcolor: "lightgreen",
          borderRadius: "10px",
          width: { sm: "100%", md: "90%", lg: "80%" },
          margin: "auto",
          marginTop: 1.5,
        }}
      >
        <CakeIcon fontSize="medium" />
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="bold" fontSize={12}>
            Upcoming Birthdays
          </Typography>
          <Typography color="grey" fontSize={10}>
            See other 10 have upcoming birthdays
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
