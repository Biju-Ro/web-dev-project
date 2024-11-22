import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen" className="p-3">
      <h1 className="text-center mb-4">Sign Up</h1>

      <div className="mb-3">
        <label htmlFor="wd-username" className="form-label fw-semibold">
          Username
        </label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="form-control"
          placeholder="Enter your username"
          id="wd-username"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-password" className="form-label fw-semibold">
          Password
        </label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="form-control"
          placeholder="Enter your password"
          id="wd-password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-verify-password" className="form-label fw-semibold">
          Verify Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Re-enter your password"
          id="wd-verify-password"
        />
      </div>

      <button onClick={signup} className="btn btn-primary mb-3 w-100">
        Sign Up
      </button>

      <div className="text-center">
        <Link to="/Kanbas/Account/Signin" className="text-decoration-none">
          Already have an account? <span className="fw-bold">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
