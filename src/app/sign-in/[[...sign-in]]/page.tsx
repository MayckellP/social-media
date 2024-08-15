"use client";
//!-----------------------------------------------------------REACT
import { useEffect, useState, forwardRef } from "react";

//-----------------------------------------------------------MUI
import { Box, Typography, Icon } from "@mui/material";

//--------------FORM
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";

//!--------------PASSWORD VISIBILITY
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//!--------------ICONS
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//!-----------------------------------------------------------CLERK
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

//!-----------------------------------------------------------NEXT
import Image from "next/image";
import Link from "next/link";

//?-----------------------------------------------------------INPUT EMAIL
const MUIInput = forwardRef(function MUIInput(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Email"
      variant="outlined"
      size="medium"
      sx={{ width: "80%" }}
    />
  );
});

//?-----------------------------------------------------------INPUT PASSWORD
const MUIPassword = forwardRef(function MUIPassword(props, ref) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "80%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        inputRef={ref}
        {...props}
        type={showPassword ? "text" : "password"}
        size="medium"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
});

//?-----------------------------------------------------------INPUT CODE RESET PASSWORD
const MUICode = forwardRef(function MUICode(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Code"
      variant="outlined"
      size="medium"
      sx={{ width: "80%" }}
    />
  );
});

//?-----------------------------------------------------------INPUT NEW PASSWORD
const MUINewPassword = forwardRef(function MUINewPassword(props, ref) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "80%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        New password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        inputRef={ref}
        {...props}
        type={showPassword ? "text" : "password"}
        size="medium"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
});

export default function Page() {
  //*-----------------------------------------------------------TAKE THE SCREEN HEIGHT
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      minHeight={`${screenHeight}px`}
      height={`${screenHeight}px`}
      maxHeight={`${screenHeight}px`}
      sx={{ bgcolor: "#1976d2" }}
    >
      {/* --------------------------------------------------------TOP SIDE - LOGO */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          width: "100%",
          height: "15%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/Logo_white.svg"}
          alt="Logo_white"
          width={200}
          height={200}
          className="drop-shadow-lg my-3"
        />
      </Box>

      {/* --------------------------------------------------------BOT SIDE - FORM*/}
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          height: "85%",
          borderRadius: "50px 50px 0 0",
        }}
      >
        <SignIn.Root>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              paddingY: 2,
            }}
          >
            {/* --------------------------------------------------------TITLE*/}
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                fontWeight="bold"
                fontFamily="unset"
                textAlign="center"
                fontSize={28}
              >
                LOGIN
              </Typography>
              <Typography
                fontWeight="bold"
                fontFamily="inherit"
                textAlign="center"
                fontSize={13}
                sx={{ color: "gray" }}
              >
                Welcome back! Select method to log in:
              </Typography>
            </Box>

            {/* --------------------------------------------------------SOCIAL CONNECTIONS */}
            <Stack
              spacing={3}
              direction="row"
              justifyContent="space-evenly"
              paddingX={5}
            >
              <Clerk.Connection name="google" asChild>
                <Fab
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #D9D9D9", // Borde gris claro
                    "&:hover": {
                      backgroundColor: "#F1F1F1", // Gris muy claro en hover
                    },
                  }}
                  variant="circular"
                  size="large"
                >
                  <GoogleIcon sx={{ color: "#4285F4" }} fontSize="medium" />
                </Fab>
              </Clerk.Connection>

              <Clerk.Connection name="github" asChild>
                <Fab
                  sx={{
                    backgroundColor: "#333", // GitHub Black
                    "&:hover": {
                      backgroundColor: "#24292e", // Ligeramente más claro en hover
                    },
                  }}
                  variant="circular"
                  size="large"
                >
                  <GitHubIcon sx={{ color: "white" }} fontSize="medium" />
                </Fab>
              </Clerk.Connection>

              <Clerk.Connection name="facebook" asChild>
                <Fab
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #D9D9D9", // Borde gris claro
                    "&:hover": {
                      backgroundColor: "#F1F1F1", // Gris muy claro en hover
                    },
                  }}
                  variant="circular"
                  size="large"
                >
                  <XIcon sx={{ color: "#1DA1F2" }} fontSize="medium" />
                </Fab>
              </Clerk.Connection>
            </Stack>

            {/* --------------------------------------------------------DIVIDER */}
            <Box
              marginY={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Divider variant="middle" sx={{ width: "30%" }} />
              <Typography
                fontWeight="bold"
                fontFamily="inherit"
                textAlign="center"
                fontSize={13}
                sx={{ color: "gray" }}
              >
                Or
              </Typography>
              <Divider variant="middle" sx={{ width: "30%" }} />
            </Box>

            {/* --------------------------------------------------------INPUT EMAIL */}
            <SignIn.Step name="start">
              <Box
                display="flex"
                flexDirection="column"
                margin="auto"
                sx={{ width: "100%" }}
                gap={5}
                textAlign="center"
              >
                <Clerk.Field name="identifier">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Clerk.Input asChild>
                      <MUIInput />
                    </Clerk.Input>
                    <Clerk.FieldError>
                      <Typography color="error">
                        Invalid email format
                      </Typography>
                    </Clerk.FieldError>
                  </Box>
                </Clerk.Field>

                <SignIn.Action submit asChild>
                  <Fab
                    aria-label="continue"
                    size="large"
                    variant="extended"
                    color="primary"
                    sx={{ width: "30%", margin: "auto" }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                  </Fab>
                </SignIn.Action>
              </Box>
            </SignIn.Step>

            {/* --------------------------------------------------------INPUT PASSWORD */}
            <SignIn.Step name="verifications">
              <SignIn.Strategy name="password">
                <Box
                  display="flex"
                  flexDirection="column"
                  margin="auto"
                  sx={{ width: "100%" }}
                  gap={5}
                  textAlign="center"
                >
                  <Clerk.Field name="password">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Clerk.Input asChild>
                        <MUIPassword />
                      </Clerk.Input>

                      {/* --------------------------------------------------------BUTTON FORGOT PASSWORD */}
                      <SignIn.Action navigate="forgot-password">
                        <Typography
                          fontFamily="inherit"
                          textAlign="center"
                          fontSize={13}
                          sx={{ color: "#1976d2" }}
                        >
                          Forgot password?
                        </Typography>
                      </SignIn.Action>
                    </Box>
                  </Clerk.Field>

                  <SignIn.Action submit asChild>
                    <Fab
                      aria-label="continue"
                      size="large"
                      variant="extended"
                      color="primary"
                      sx={{ width: "30%", margin: "auto" }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                    </Fab>
                  </SignIn.Action>
                </Box>
              </SignIn.Strategy>

              <SignIn.Strategy name="reset_password_email_code">
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Box>
                    <Typography fontWeight="bold" fontSize={18}>
                      Check your email!
                    </Typography>
                    <Typography color="gray" fontSize={12}>
                      We sent a code to <SignIn.SafeIdentifier />.
                    </Typography>
                  </Box>

                  <Clerk.Field name="code">
                    <Clerk.Input asChild>
                      <MUICode />
                    </Clerk.Input>
                    <Clerk.FieldError />
                  </Clerk.Field>

                  <SignIn.Action submit>
                    <Button variant="contained" sx={{ textTransform: "none" }}>
                      Verify
                    </Button>
                  </SignIn.Action>
                </Box>
              </SignIn.Strategy>
            </SignIn.Step>

            {/* --------------------------------------------------------BUTTON RESET PASSWORD - SEND CODE */}
            <SignIn.Step name="forgot-password">
              <Stack
                spacing={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <SignIn.SupportedStrategy name="reset_password_email_code">
                  <Button variant="contained" sx={{ textTransform: "none" }}>
                    Reset password
                  </Button>
                </SignIn.SupportedStrategy>

                <SignIn.Action navigate="previous" asChild>
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      width: "50%",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Back
                  </Button>
                </SignIn.Action>
              </Stack>
            </SignIn.Step>

            {/* --------------------------------------------------------INPUT NEW PASSWORD */}
            <SignIn.Step name="reset-password">
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Typography fontWeight="bold" fontSize={18}>
                  Reset your password
                </Typography>

                <Clerk.Field name="password">
                  <Clerk.Input asChild>
                    <MUINewPassword />
                  </Clerk.Input>
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignIn.Action submit asChild>
                  <Button variant="contained" sx={{ textTransform: "none" }}>
                    Resset
                  </Button>
                </SignIn.Action>
              </Box>
            </SignIn.Step>

            <Box
              marginY={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <Typography
                fontFamily="inherit"
                textAlign="center"
                fontSize={13}
                sx={{ color: "gray" }}
              >
                Dont have an account?
              </Typography>
              <Link href={"/sign-up"}>
                <Typography
                  fontFamily="inherit"
                  textAlign="center"
                  fontSize={13}
                  fontWeight="bold"
                  sx={{ color: "#1976d2" }}
                >
                  Create an account
                </Typography>
              </Link>
            </Box>
          </Box>
        </SignIn.Root>
      </Box>
    </Box>
  );
}
