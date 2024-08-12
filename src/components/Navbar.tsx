"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";

import { UserButton } from "@clerk/nextjs";

//import Link from "next/link";
import { Link } from "@mui/material";
import {
  ChatBubble,
  Group,
  Home,
  Login,
  LoginRounded,
  SettingsBackupRestore,
} from "@mui/icons-material";
import { ClerkLoaded } from "@clerk/nextjs";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import Notifications from "@mui/icons-material/Notifications";
import Divider from "@mui/material/Divider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          boxShadow: 0,
          backgroundColor: "#212121",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "lightgray",
          }}
        >
          {/*------------------------------------------------------- LOGO */}
          <Typography
            /* variant="h5" */
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "lightgray",
              },
              fontWeight: "bold",
              fontSize: "h6.fontSize",
              fontFamily: "Monospace",
            }}
          >
            Micky Social
          </Typography>

          {/*------------------------------------------------------- ICONS */}
          <ClerkLoaded>
            <SignedIn>
              <Box
                sx={{
                  backgroundColor: "",
                  display: { xs: "none", md: "flex" },
                  width: { xs: "100%", sm: "auto", md: "25%" },
                  justifyContent: "space-between",
                }}
              >
                <Tooltip title="Home" arrow>
                  <IconButton size="small" color="inherit">
                    <Badge>
                      <Home />
                      <Typography
                        fontSize={14}
                        display="flex"
                        alignItems="flex-end"
                        marginLeft={1}
                        fontFamily="sans-serif"
                      >
                        Home
                      </Typography>
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Friends" arrow>
                  <IconButton size="small" color="inherit">
                    <Badge>
                      <Group />

                      <Typography
                        fontSize={14}
                        display="flex"
                        alignItems="flex-end"
                        marginLeft={1}
                        fontFamily="sans-serif"
                      >
                        Friends
                      </Typography>
                    </Badge>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Stories" arrow>
                  <IconButton size="small" color="inherit">
                    <Badge>
                      <SettingsBackupRestore />
                    </Badge>

                    <Typography
                      fontSize={14}
                      display="flex"
                      alignItems="flex-end"
                      marginLeft={1}
                      fontFamily="sans-serif"
                    >
                      Stories
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
            </SignedIn>
          </ClerkLoaded>

          {/*------------------------------------------------------- SEARCH */}
          <Search
            sx={{
              width: { xs: "100%", sm: "auto", md: "400px" },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{
                "aria-label": "search",
                sx: {
                  fontSize: 12,
                },
              }}
              sx={{ width: { xs: "100%" } }}
            />
          </Search>

          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/*------------------------------------------------------- ICONS */}

          {/*------------------------------------------------------- PROFILE */}
          <ClerkLoaded>
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "flex",
                },
              }}
            >
              <SignedIn>
                <IconButton
                  size="small"
                  aria-label="show messages"
                  color="inherit"
                  sx={{ marginRight: "15px" }}
                >
                  <Badge color="error">
                    <ChatBubble sx={{ fontSize: "20px" }} />
                  </Badge>
                </IconButton>

                <Divider orientation="vertical" variant="middle" flexItem />

                <IconButton
                  size="small"
                  aria-label="show notifications"
                  color="inherit"
                  sx={{ marginRight: "15px" }}
                >
                  <Badge color="error">
                    <Notifications sx={{ fontSize: "20px" }} />
                  </Badge>
                </IconButton>

                <UserButton />
              </SignedIn>

              <SignedOut>
                <IconButton size="small" color="inherit">
                  <Badge>
                    <LoginRounded />
                    <Link
                      href="/sign-in"
                      underline="none"
                      fontStyle="none"
                      fontFamily="sans-serif"
                      fontSize={14}
                      color="whitesmoke"
                    >
                      <Typography
                        display="flex"
                        alignItems="flex-end"
                        marginLeft={1}
                      >
                        Login
                      </Typography>
                    </Link>
                  </Badge>
                </IconButton>
              </SignedOut>
            </Box>
          </ClerkLoaded>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
