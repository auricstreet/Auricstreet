"use client";
import { useState } from "react";
import "./login.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import CosmicBackgrounds from "../components/CosmicBackgrounds";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setError("Incorrect password. This page is for Auric students. Please contact our team.");
  };

  return (
    <>
    <Navbar></Navbar>

    <section className="login-wrapper">
        
        <div className="auric-login-bg">
  <div className="auric-stars"></div>
  <div className="auric-nebula"></div>
  <div className="auric-spark-layer"></div>
  <CosmicBackgrounds></CosmicBackgrounds>
      <ParticlesBackground></ParticlesBackground>
</div>

<div className="auric-login-welcome cinematic-welcome">
  <h1 className="auric-welcome-title">WELCOME AURICIAN</h1>
  <p className="auric-welcome-sub">Access the Auric Portal</p>
</div>
      <div className="login-card">
      <div className="auric-gate"></div>

        <h2 className="login-title">AURIC STUDENT LOGIN</h2>
        <p className="login-subtext">
          Hi there. This page is exclusively for our students.<br />
          If you are an Aurician, kindly login.
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn">
            Log In
          </button>

          <a className="forgot-link" href="#">Forgot Password?</a>
        </form>

      </div>
    </section>
    <Footer></Footer>
    </>
  );
}