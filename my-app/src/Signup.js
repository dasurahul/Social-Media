import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailAddressHandler = (event) => {
    setEmailAddress(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const bioHandler = (event) => {
    setBio(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      name.length === 0 ||
      emailAddress.length === 0 ||
      password.length === 0 ||
      bio.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }
    console.log({
      name,
      emailAddress,
      password,
      bio,
    });
    setName("");
    setEmailAddress("");
    setPassword("");
    setBio("");
  };
  return (
    <div className="signup-page">
      <div className="form-container">
        <div className="title">
          <h1 className="center black mb-2">Social Media App</h1>
          <p className="center gray mb-2">
            Sign up to share ideas, thoughts and information.
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            onChange={nameHandler}
            value={name}
          />
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            onChange={emailAddressHandler}
            value={emailAddress}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={passwordHandler}
            value={password}
          />
          <input
            className="input"
            type="text"
            placeholder="Bio"
            onChange={bioHandler}
            value={bio}
          />
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
