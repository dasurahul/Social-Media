import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="title">
          <h1 class="center black mb-2">Social Media App</h1>
          <p className="center gray mb-2">
            Sign up to share ideas, thoughts and information.
          </p>
        </div>
        <form>
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email Address" />
          <input className="input" type="password" placeholder="Password" />
          <input className="input" type="text" placeholder="Bio" />
          <button className="button">Sign Up</button>
        </form>
        <div className="center black mb-2">
          Have an account?{" "}
          <Link className="link" to="/">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
