import * as React from "react";
import { Typography, Box, TextField } from "@mui/material";
import "./register.css";
import { google_icon } from "../constants";
import { FullWidthTextField } from "@mui/material";
const Register = () => {
  return (
    <div className="register">
      <section className="login__card">
        <h2 className="sign__up--text">Sign up</h2>
        <div className="continue__with--card">
          <img src={google_icon} alt="google_icon" />
          <span>Continue with Google</span>
        </div>
        <div className="continue__with--card">
          <i class="fa-brands fa-square-facebook"></i>
          <span>Continue with Facebook</span>
        </div>
        <div className="continue__with--card">
          <i class="fa-brands fa-apple"></i>
          <span>Continue with Facebook</span>
        </div>
        <section className="or__line">
          <hr className="line" />
          <span>or</span>
          <hr className="line" />
        </section>
        <section>
          {" "}
          <Box
            sx={{
              width: 300,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Box>
        </section>
      </section>
    </div>
  );
};

export default Register;
