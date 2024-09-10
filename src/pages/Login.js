import React, { useState } from "react";
import "./login.css";
import { signInWithGoogle, signup } from "./../firebase"; // Import signup if it's defined in your firebase.js
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // For toggling between sign in and sign up
  const [name, setName] = useState(""); // For sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithGoogle();
      navigate("/repos"); // Redirect to Repos after successful login
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signup(name, email, password);
      navigate("/repos"); // Redirect to Repos after successful signup
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {error && <p className="error-message">{error}</p>}

        {isSignUp && (
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={isSignUp ? handleSignup : handleGoogleSignIn}
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : isSignUp
            ? "Sign Up"
            : "Sign In with Google"}
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}
        >
          {loading ? "Processing..." : "Sign In with Google"}
        </button>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignUp((prev) => !prev)}
            style={{ cursor: "pointer", color: "blue", marginLeft: "5px" }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
