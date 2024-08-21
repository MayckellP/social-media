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
import * as SignUp from "@clerk/elements/sign-up";

//!-----------------------------------------------------------NEXT
import Image from "next/image";
import Link from "next/link";

//!-----------------------------------------------------------USE-DEBOUNCE / DELAY
import { useDebouncedCallback } from "use-debounce";

//?-----------------------------------------------------------INPUT NAME

const MUIName = forwardRef(function MUIName(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Name"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
      type="text"
    />
  );
});

//?-----------------------------------------------------------INPUT LASTNAME
const MUILastName = forwardRef(function MUILastName(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Lastname"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
      type="text"
    />
  );
});

//?-----------------------------------------------------------INPUT EMAIL
const MUINumber = forwardRef(function MUINumber(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Number"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
      type="tel"
    />
  );
});

//?-----------------------------------------------------------INPUT EMAIL
const MUIMail = forwardRef(function MUIMail(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Email"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
      type="email"
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
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        inputRef={ref}
        {...props}
        type={showPassword ? "text" : "password"}
        size="medium"
        required
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

//?-----------------------------------------------------------INPUT PHONE CODE
const MUIPhoneCode = forwardRef(function MUICode(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Phone Code"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
    />
  );
});

//?-----------------------------------------------------------INPUT EMAIL CODE
const MUIMailCode = forwardRef(function MUICode(props, ref) {
  return (
    <TextField
      inputRef={ref}
      {...props}
      label="Email Code"
      variant="outlined"
      size="medium"
      sx={{ width: "100%" }}
      required
    />
  );
});

export default function Page() {
  const [username, SetUsername] = useState("");

  const showName = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      SetUsername(e.target.value);
    },
    500
  );

  //*-----------------------------------------------------------TAKE THE SCREEN HEIGHT
  /*  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); */
  return (
    <Box
      /* minHeight="100vh"
      height="100vh" */
      //maxHeight={`${screenHeight}px`}
      sx={{ bgcolor: "#1976d2" }}
    >
      {/* --------------------------------------------------------TOP SIDE - LOGO */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          width: "100%",
          height: "10%",
          minHeight: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/Logo_white.svg"}
          alt="Logo_white"
          width={150}
          height={150}
          className="drop-shadow-lg my-3"
        />
      </Box>

      {/* --------------------------------------------------------BOT SIDE - FORM*/}
      <Box
        sx={{
          bgcolor: "white",
          width: "100%",
          height: "90%",
          borderRadius: "75px 75px 0 0",
        }}
      >
        <SignUp.Root>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            padding={5}
          >
            {/* --------------------------------------------------------TITLE*/}
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                fontWeight="bold"
                fontFamily="unset"
                textAlign="center"
                fontSize={25}
              >
                Create your account
              </Typography>
              <Box
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
                  Already have an account?
                </Typography>
                <Link href={"/sign-in"}>
                  <Typography
                    fontFamily="inherit"
                    textAlign="center"
                    fontSize={13}
                    fontWeight="bold"
                    sx={{ color: "#1976d2" }}
                  >
                    Sign In
                  </Typography>
                </Link>
              </Box>
            </Box>

            {/* --------------------------------------------------------SOCIAL CONNECTIONS */}
            <Stack
              spacing={3}
              direction="column"
              justifyContent="space-evenly"
              paddingX={5}
            >
              <Clerk.Connection name="google" asChild>
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "white",
                    border: "1px solid #D9D9D9", // Borde gris claro
                    "&:hover": {
                      backgroundColor: "#F1F1F1", // Gris muy claro en hover
                    },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textTransform: "none",
                  }}
                >
                  <GoogleIcon
                    sx={{ color: "#4285F4", marginRight: 1.5 }}
                    fontSize="medium"
                  />
                  Sign Up with Google
                </Button>
              </Clerk.Connection>
              {/* --------------------------------------------------------DIVIDER */}
              <Box display="flex" alignItems="center" justifyContent="center">
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
            </Stack>

            {/* --------------------------------------------------------INPUTS FORM */}

            <Box display="flex" flexDirection="column" gap={5}>
              <SignUp.Step name="start">
                <Box display="flex" flexDirection="column" gap={1.5}>
                  <Stack direction="row" justifyContent="space-between">
                    {/* --------------------------------------------------------FIRSTNAME & USERNAME */}

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{ width: "49%" }}
                    >
                      <Clerk.Field name="fistname">
                        <Clerk.Input asChild onChange={showName}>
                          <MUIName />
                        </Clerk.Input>
                        <Clerk.FieldError>
                          <Typography color="error">
                            Invalid name format
                          </Typography>
                        </Clerk.FieldError>
                      </Clerk.Field>

                      <Clerk.Field name="username" className="hidden">
                        <Clerk.Input asChild value={username} />
                      </Clerk.Field>
                    </Box>

                    {/* --------------------------------------------------------LASTNAME*/}

                    <Box
                      display="flex"
                      flexDirection="column"
                      sx={{ width: "49%" }}
                    >
                      <Clerk.Field name="lastname">
                        <Clerk.Input asChild>
                          <MUILastName />
                        </Clerk.Input>
                        <Clerk.FieldError>
                          <Typography color="error">
                            Invalid name format
                          </Typography>
                        </Clerk.FieldError>
                      </Clerk.Field>
                    </Box>
                  </Stack>

                  {/* --------------------------------------------------------PHONENUMBER */}
                  <Clerk.Field name="phoneNumber">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Clerk.Input asChild type="tel">
                        <MUINumber />
                      </Clerk.Input>
                      <Clerk.FieldError>
                        <Typography color="error">
                          Invalid email format
                        </Typography>
                      </Clerk.FieldError>
                    </Box>
                  </Clerk.Field>

                  {/* --------------------------------------------------------EMAIL */}
                  <Clerk.Field name="emailAddress">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Clerk.Input asChild>
                        <MUIMail />
                      </Clerk.Input>
                      <Clerk.FieldError>
                        <Typography color="error">
                          Invalid email format
                        </Typography>
                      </Clerk.FieldError>
                    </Box>
                  </Clerk.Field>

                  {/* --------------------------------------------------------PASSWORD */}
                  <Clerk.Field name="password">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Clerk.Input asChild>
                        <MUIPassword />
                      </Clerk.Input>
                      <Clerk.FieldError>
                        <Typography color="error">
                          Invalid password format
                        </Typography>
                      </Clerk.FieldError>
                    </Box>
                  </Clerk.Field>
                  <SignUp.Captcha />

                  {/* --------------------------------------------------------BUTTOM */}
                  <SignUp.Action submit asChild>
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "auto",
                        textTransform: "none",
                        width: "80%",
                      }}
                    >
                      Continue
                      <ArrowForwardIosIcon
                        sx={{ color: "white", marginLeft: 1.5 }}
                        fontSize="medium"
                      />
                    </Button>
                  </SignUp.Action>
                </Box>
              </SignUp.Step>

              {
                <SignUp.Step name="continue" className="w-100">
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    sx={{ width: "100%" }}
                  >
                    {/* --------------------------------------------------------USERNAME */}
                    <Clerk.Field name="username">
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Clerk.Input asChild>
                          <MUIName />
                        </Clerk.Input>
                        <Clerk.FieldError>
                          <Typography color="error">
                            Invalid name format
                          </Typography>
                        </Clerk.FieldError>
                      </Box>
                    </Clerk.Field>

                    {/* --------------------------------------------------------EMAIL */}
                    <Clerk.Field name="username">
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Clerk.Input asChild>
                          <MUILastName />
                        </Clerk.Input>
                        <Clerk.FieldError>
                          <Typography color="error">
                            Invalid name format
                          </Typography>
                        </Clerk.FieldError>
                      </Box>
                    </Clerk.Field>

                    {/* --------------------------------------------------------BUTTOM */}
                    <SignUp.Action submit asChild>
                      <Button
                        variant="contained"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          margin: "auto",
                          textTransform: "none",
                          width: "80%",
                        }}
                      >
                        Continue
                        <ArrowForwardIosIcon
                          sx={{ color: "white", marginLeft: 1.5 }}
                          fontSize="medium"
                        />
                      </Button>
                    </SignUp.Action>
                  </Box>
                </SignUp.Step>
              }

              <SignUp.Step name="verifications" className="w-100 text-center">
                <SignUp.Strategy name="phone_code">
                  <Typography
                    fontWeight="bold"
                    fontFamily="unset"
                    textAlign="center"
                    fontSize={15}
                    sx={{ color: "Black", marginBottom: 2 }}
                  >
                    Check your Phone!
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    fontFamily="unset"
                    textAlign="center"
                    fontSize={12}
                    sx={{ color: "gray", marginBottom: 2 }}
                  >
                    We send you a verification code by SMS.
                  </Typography>
                  <Clerk.Field name="code">
                    <Clerk.Input asChild>
                      <MUIPhoneCode />
                    </Clerk.Input>
                    <Clerk.FieldError>
                      <Typography color="error">
                        Invalid password format
                      </Typography>
                    </Clerk.FieldError>
                  </Clerk.Field>
                  <SignUp.Action submit asChild>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "none", marginTop: 2 }}
                    >
                      Verify
                    </Button>
                  </SignUp.Action>
                </SignUp.Strategy>

                <SignUp.Strategy name="email_code">
                  <Typography
                    fontWeight="bold"
                    fontFamily="unset"
                    textAlign="center"
                    fontSize={15}
                    sx={{ color: "Black", marginBottom: 2 }}
                  >
                    Check your Email!
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    fontFamily="unset"
                    textAlign="center"
                    fontSize={12}
                    sx={{ color: "gray", marginBottom: 2 }}
                  >
                    We send you a verification code.
                  </Typography>
                  <Clerk.Field name="code">
                    <Clerk.Input asChild>
                      <MUIMailCode />
                    </Clerk.Input>
                    <Clerk.FieldError>
                      <Typography color="error">
                        Invalid password format
                      </Typography>
                    </Clerk.FieldError>
                  </Clerk.Field>
                  <SignUp.Action submit asChild>
                    <Button
                      variant="contained"
                      sx={{ textTransform: "none", marginTop: 2 }}
                    >
                      Verify
                    </Button>
                  </SignUp.Action>
                </SignUp.Strategy>
              </SignUp.Step>
            </Box>
          </Box>
        </SignUp.Root>
      </Box>
    </Box>
  );
}
