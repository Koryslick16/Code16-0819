import React from "react";
import "./signup.css";
import { LuEye } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { RxLockClosed } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";

const Signup = () => {
  return (
    <div className="main">
      <form class="form">
        <h3 style={{
            textAlign: "center",
            marginBottom: "25px"
        }}>Sign Up for E-Learning</h3>
        <div class="flex-column">
          <label>Email </label>
        </div>
        <div class="inputForm">
          <MdAlternateEmail/>
          <input type="text" class="input" placeholder="Enter your Email" />
        </div>

        <div class="flex-column">
          <label>Password </label>
        </div>
        <div class="inputForm">
         <RxLockClosed/>
          <input
            type="password"
            class="input"
            placeholder="Enter your Password"
          />
          <LuEye />
        </div>

        <div class="flex-row">
          <div>
            <input type="checkbox" />
            <label className="remember">Remember me </label>
          </div>
          <span class="span">Forgot password?</span>
        </div>
        <button class="button-submit">Sign In</button>
        <p class="p">
          Don't have an account? <span class="span">Sign Up</span>
        </p>
        <p class="p line">Or With</p>

        <div class="flex-row">
          <button class="btn google">
            <FcGoogle />
            Google
          </button>
          <button class="btn apple">
            <IoLogoApple />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
