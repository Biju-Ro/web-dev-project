import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { confirmPassword, ...signupData } = user;
      const currentUser = await client.signup(signupData);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (error) {
      console.error("Caught: ", error);
      setError("Signup failed");
    }
  };

  return (
    <div
      id="wd-signup-screen"
      className="d-flex flex-column align-items-center justify-content-center vh-100"
    >
      <div className="card p-4 shadow-sm" style={{ width: "300px" }}>
        <h3 className="text-center mb-4">Sign up</h3>
        <input
          placeholder="username"
          className="form-control mb-2"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="form-control mb-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="confirm password"
          className="form-control mb-2"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        {error && (
          <div className="alert alert-danger mb-2" role="alert">
            {error}
          </div>
        )}
        <button
          onClick={signup}
          className="btn btn-primary w-100 mb-2"
          disabled={!user.username || !user.password || !user.confirmPassword}
        >
          Sign up
        </button>
        <Link to="/Kanbas/Account/Signin" className="text-center">
          Sign in
        </Link>
      </div>
    </div>
  );
}
