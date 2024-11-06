import { useState } from "react";
import "./Login.css";
import { login, signUp } from "../../config/firebase";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signUp(userName, email, password);
    } else {
      login(email, password);
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (currState === "Sign Up") {
      if (newPassword.length < 8) {
        setPasswordError("Password must be at least 8 characters long.");
      } else if (!/[A-Z]/.test(newPassword)) {
        setPasswordError(
          "Password must contain at least one uppercase letter."
        );
      } else if (!/[a-z]/.test(newPassword)) {
        setPasswordError(
          "Password must contain at least one lowercase letter."
        );
      } else if (!/[0-9]/.test(newPassword)) {
        setPasswordError("Password must contain at least one digit.");
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
        setPasswordError(
          "Password must contain at least one special character."
        );
      } else {
        setPasswordError(""); // Clear error if password meets all criteria // Update the password state only if it's valid
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" && (
          <input
            value={userName}
            onChange={(e) => setUserName(e?.target?.value)}
            className="form-input"
            type="text"
            placeholder="Username"
            required
          />
        )}

        <input
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          className="form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
          type="password"
          placeholder="Password"
          required
        />
        {passwordError && (
          <p style={{ color: "red", fontSize: "10px" }}>{passwordError}</p>
        )}
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
