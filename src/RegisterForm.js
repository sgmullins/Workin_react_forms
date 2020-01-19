import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <p variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        workIN
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

const useStyles = makeStyles({
  paper: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#d6e1eb",

    boxShadow: "7px 8px 8px 0px rgba(135, 132, 135, 0.62)",
    paddingTop: "40px",
    paddingBottom: "40px"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#2D4B69"
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: 24
  },
  submit: {
    margin: "24px 0 16px",
    backgroundColor: "#2D4B69",
    fontFamily: "Oswald",
    fontSize: 28,
    color: "white",
    boxShadow: "3px 3px 8px -1px rgba(135,132,135,0.62)",
    "&:hover": {
      backgroundColor: "#29435D"
    }
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2D4B69"
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#2D4B69"
    }
  },
  inputError: {
    backgroundColor: "white",
    borderRadius: 5,
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2D4B69"
    }
  },
  linkClass: {
    color: "#289cd6",
    textDecoration: "none",
    fontFamily: "Open Sans",
    letterSpacing: "initial",
    fontSize: 14,
    fontWeight: 600
  }
});

export default function RegisterForm() {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    email: "",
    lastName: "",
    firstName: ""
  });

  const classes = useStyles();

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>Sign up</h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                className={classes.input}
                onChange={handleChange("firstName")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                className={classes.input}
                onChange={handleChange("lastName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.input}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange("password")}
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={
                  values.password !== values.confirmPassword ? true : false
                }
                name="ConfirmPassword"
                label="Confirm Password"
                type="password"
                id="ConfirmPassword"
                onChange={handleChange("confirmPassword")}
                className={
                  values.password !== values.confirmPassword
                    ? classes.inputError
                    : classes.input
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" className={classes.linkClass}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
