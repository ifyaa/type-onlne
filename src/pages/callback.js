import React from "react";
import { Link } from "gatsby";
import { logout } from "../utils/auth";

const Callback = () => {
  return (
    <>
      <p>Callback</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/posts">Mark</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/tags">tags</Link>{" "}
          </li>
          <li>
            <Link to="/account/">My Account</Link>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#logout"
              onClick={e => {
                logout();
                e.preventDefault();
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Callback;
