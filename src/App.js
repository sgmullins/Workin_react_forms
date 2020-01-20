import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Router>
        <LoginForm path="/login" />
        <RegisterForm path="/" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
