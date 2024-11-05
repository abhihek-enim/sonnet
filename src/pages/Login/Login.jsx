import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login">
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" && (
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            required
          />
        )}

        <input
          className="form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">{currState}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy. </p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" && (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Click here</span>
            </p>
          )}
          {currState === "Login" && (
            <p className="login-toggle">
              Create Account{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
