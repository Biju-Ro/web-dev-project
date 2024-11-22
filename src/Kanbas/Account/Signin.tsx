import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-3">
      <h1 className="text-center mb-4">Sign In</h1>
      <div className="mb-3">
        <label htmlFor="wd-username" className="form-label fw-semibold">
          Username
        </label>
        <input
          type="text"
          value={credentials.username || ""}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
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
          value={credentials.password || ""}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="form-control"
          placeholder="Enter your password"
          id="wd-password"
        />
      </div>
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-3"
      >
        Sign In
      </button>
      <div className="text-center">
        <Link
          id="wd-signup-link"
          to="/Kanbas/Account/Signup"
          className="text-decoration-none"
        >
          Don't have an account? <span className="fw-bold">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}
