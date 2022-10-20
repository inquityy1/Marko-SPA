import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="header">
      <div className="links">
        <Link onClick={() => {}} to="/">
          Home
        </Link>
      </div>
      <div className="links">
        <Link to="/second-page">First Page</Link>
      </div>
      <div className="links">
        <Link to="/third-page">Second Page</Link>
      </div>
      <div className="links">
        <Link to="/fourth-page">Third Page</Link>
      </div>
    </div>
  );
}
