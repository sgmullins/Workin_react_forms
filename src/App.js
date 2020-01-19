import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const App = () => {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
