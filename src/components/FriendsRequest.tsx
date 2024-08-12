import {
  Box,
  Avatar,
  Typography,
  Divider,
  TextField,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function FriendsRequest() {
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
          Friend Requests
        </Typography>
        <Button sx={{ fontSize: 11, color: "darkblue", textTransform: "none" }}>
          See all
        </Button>
      </Box>

      {/* ----------------------------REQUESTS SIDE */}
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
          <IconButton aria-label="Acept" color="primary" size="small">
            <CheckIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Acept" color="error" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

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
          <IconButton aria-label="Acept" color="primary" size="small">
            <CheckIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Acept" color="error" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

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
          <IconButton aria-label="Acept" color="primary" size="small">
            <CheckIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Acept" color="error" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

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
          <IconButton aria-label="Acept" color="primary" size="small">
            <CheckIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Acept" color="error" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
