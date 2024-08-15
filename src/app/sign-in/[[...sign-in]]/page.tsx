"use client";

import { useState } from "react";
import { Box, Paper, Typography, Icon } from "@mui/material";
import Image from "next/image";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fab from "@mui/material/Fab";

import Link from "next/link";

import { forwardRef } from "react";
import { useSignIn } from "@clerk/nextjs";

const screenHeight = window.innerHeight;

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

const MUIInputError = forwardRef(function MUIInputError(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      error
      id="outlined-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
    />
  );
});

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setError("Por favor, ingrese un correo electrónico válido.");
    } else {
      setError("");
    }
  };

  return (
    <Box
      minHeight={`${screenHeight}px`}
      height={`${screenHeight}px`}
      maxHeight={`${screenHeight}px`}
      sx={{ display: "flex", flexDirection: "column", bgcolor: "#1976d2" }}
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
          className="drop-shadow-lg"
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
          <SignIn.Step name="start">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 5,
                paddingY: 2,
              }}
            >
              <Box display="flex" flexDirection="column" gap={2}>
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

              <Box
                marginY={3}
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

              <Box
                display="flex"
                flexDirection="column"
                margin="auto"
                sx={{ width: "100%" }}
                gap={6}
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

              <Box
                marginY={3}
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
                    fontSize={13.5}
                    fontWeight="bold"
                    sx={{ color: "#1976d2" }}
                  >
                    Create an account
                  </Typography>
                </Link>
              </Box>
            </Box>
          </SignIn.Step>

          {/* <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <h1>Check your email</h1>
              <p>
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code">
                <Clerk.Label>Email code</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
            </SignIn.Strategy>

            <SignIn.Strategy name="password">
              <h1>Enter your password</h1>

              <Clerk.Field name="password">
                <Clerk.Label>Password</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
              <SignIn.Action navigate="forgot-password">
                Forgot password?
              </SignIn.Action>
            </SignIn.Strategy>

            <SignIn.Strategy name="reset_password_email_code">
              <h1>Check your email</h1>
              <p>
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code">
                <Clerk.Label>Email code</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Continue</SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step> */}

          <SignIn.Step name="forgot-password">
            <h1>Forgot your password?</h1>

            <SignIn.SupportedStrategy name="reset_password_email_code">
              Reset password
            </SignIn.SupportedStrategy>

            <SignIn.Action navigate="previous">Go back</SignIn.Action>
          </SignIn.Step>

          <SignIn.Step name="reset-password">
            <h1>Reset your password</h1>

            <Clerk.Field name="password">
              <Clerk.Label>New password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="confirmPassword">
              <Clerk.Label>Confirm password</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>Reset password</SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </Box>
      {/* 
      <SignIn
        appearance={{
          variables: { colorPrimary: "#1D4ED8" },
        }}
      /> */}
    </Box>
  );
}
