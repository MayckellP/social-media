import { Box, Paper, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Link from "next/link";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function UserInfoCard({ userId }: { userId?: String }) {
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

      <Card sx={{ maxWidth: 345, border: "none", boxShadow: "none" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            fontWeight="bold"
            color="GrayText"
            fontSize={12}
            fontFamily="sans-serif"
          >
            User Information
          </Typography>
          <Button
            sx={{
              fontSize: 11,
              color: "darkblue",
              textTransform: "none",
            }}
          >
            See all
          </Button>
        </Box>

        {/* ----------------------------BODY */}
        <CardContent sx={{ padding: 0 }}>
          <Typography
            gutterBottom
            fontWeight="bold"
            fontSize={13}
            component="div"
          >
            Lloyd Fleiming
          </Typography>
          <Typography variant="body2" fontSize={12} color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          {/* ----------------------------------------------LIVING */}

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <PlaceIcon sx={{ fontSize: 14, color: "GrayText" }} />
            <Typography sx={{ fontSize: 12, color: "GrayText" }}>
              Living in <span className="font-bold">Denver</span>
            </Typography>
          </Box>

          {/* ----------------------------------------------STUDIES */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <SchoolIcon sx={{ fontSize: 14, color: "GrayText" }} />
            <Typography sx={{ fontSize: 12, color: "GrayText" }}>
              Went to <span className="font-bold">Edgar High School</span>
            </Typography>
          </Box>

          {/* ----------------------------------------------WORK */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <WorkIcon sx={{ fontSize: 14, color: "GrayText" }} />
            <Typography sx={{ fontSize: 12, color: "GrayText" }}>
              Work at <span className="font-bold">Google Inc.</span>
            </Typography>
          </Box>

          {/* ----------------------------------------------LINKS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <InsertLinkIcon sx={{ fontSize: 14, color: "GrayText" }} />
              <Typography sx={{ fontSize: 12, color: "blue" }}>
                <Link href="https://micky-dev.com">micky-dev</Link>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <EventNoteIcon sx={{ fontSize: 14, color: "GrayText" }} />
              <Typography sx={{ fontSize: 12, color: "GrayText" }}>
                Joined Novermber 2024
              </Typography>
            </Box>
          </Box>

          <Button
            sx={{ width: "100%", textTransform: "none" }}
            color="primary"
            size="small"
            variant="contained"
          >
            Following
          </Button>
          <Button
            color="error"
            sx={{
              fontSize: 9,
              alignSelf: "flex-end",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Block user
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
