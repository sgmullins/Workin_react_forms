import React, { useState, useRef } from "react";
import { Link } from "@reach/router";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#2D4B69"
    },
    "& label.Mui-focused": {
      color: "#2D4B69"
    },
    "& .MuiFilledInput-input": {
      backgroundColor: "white",
      width: 400,
      boxShadow: "3px 3px 8px -1px rgba(135,132,135,0.62)"
    }
  }
})(TextField);

const ColorButton = withStyles({
  root: {
    color: "white",
    backgroundColor: "#2D4B69",
    fontFamily: "Oswald",
    fontSize: 28,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 60,
    paddingRight: 60,
    fontWeight: 500,
    borderRadius: 6,
    "&:hover": {
      backgroundColor: "#29435D"
    }
  }
})(Button);

export default function LoginForm() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    email: "",
    inputType: "password"
  });
  const passwordValue = useRef(!values.showPassword);
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = e => {
    e.preventDefault();
    setValues({
      ...values,
      showPassword: !values.showPassword,
      inputType: passwordValue.current ? " " : "password"
    });
    passwordValue.current = !passwordValue.current;
  };
  //   console.log(values.showPassword);
  //   console.log(passwordValue.current);

  return (
    <div className="container">
      <div className="main">
        <h1>Join the WORKin Community</h1>
        <h4>Its FREE to find the best places to work remote</h4>
      </div>
      <div className="formInputs">
        <h4 className="heavyFont">Create an Account</h4>
        <form className="form">
          <label htmlFor="emailInput">
            <p className="heavyFont">Email</p>
            <CssTextField
              required
              id="emailInput"
              label="Email"
              variant="filled"
              onChange={handleChange("email")}
            />
          </label>
          <br />
          <label htmlFor="passwordInput">
            <div className="pwField">
              <p className="heavyFont">Password</p>
              <Link
                to=""
                style={{
                  fontSize: 12,
                  fontStyle: "italic",
                  fontFamily: "Open Sans",
                  letterSpacing: "initial"
                }}
                className="linkClass"
                onClick={handleClickShowPassword}
              >
                show
              </Link>
            </div>
            <CssTextField
              required
              id="passwordInput"
              label="Password"
              variant="filled"
              type={values.inputType}
              onChange={handleChange("password")}
            />
          </label>
          <br />
          <p className="terms">
            By signing up, you agree to the{" "}
            <Link className="linkClass" to="/">
              Terms and Conditions
            </Link>
          </p>
          <ColorButton variant="contained" size="large">
            Join Now
          </ColorButton>
          <div className="redirectLinks">
            <p>
              Already have an account?{" "}
              <Link className="linkClass" to="./signin">
                Sign In
              </Link>
            </p>
            <Link className="linkClass" to="./forgotPW">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
