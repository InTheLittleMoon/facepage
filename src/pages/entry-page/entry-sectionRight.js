import React, { useState } from "react";
import { Link } from "react-router-dom";

//imported images
import emailIcon from "../../assets/images/entry-page-right-section-email-icon.png";
import passwordIcon from "../../assets/images/entry-page-right-section-password-icon.png";

//for password logics
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

export default function SectionRight() {
  //held states
  const [passwordShowStatus, setPasswordShowStatus] = useState("password");
  const [passwordIconStatus, setPasswordIconStatus] = useState(eyeOff);

  //gets current date for entry page
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let currentDay = weekday[d.getDay()];

  //random greetings for login
  const greetingsOne = [
    "Hope your",
    "I bet your",
    "Sounds like your",
    "Looking like your",
  ];

  let displayGreetingsPartOne =
    greetingsOne[Math.floor(Math.random() * greetingsOne.length)];

  const greetingsTwo = [
    "is going great!",
    "is nothing but sunshine!",
    "gets even better!",
    "ends with free pizza!",
    "is feeling like a million bucks!",
    "has you feeling powerful!",
    "is amazing!",
  ];

  let displayGreetingsPartTwo =
    greetingsTwo[Math.floor(Math.random() * greetingsTwo.length)];

  //password logics
  const passwordInputHandler = () => {
    if (passwordIconStatus === eyeOff) {
      setPasswordIconStatus((prevState) => {
        let newState = eye;
        return newState;
      });
      setPasswordShowStatus((prevState) => {
        let newState = "text";
        return newState;
      });
    } else {
      setPasswordIconStatus((prevState) => {
        let newState = eyeOff;
        return newState;
      });
      setPasswordShowStatus((prevState) => {
        let newState = "password";
        return newState;
      });
    }
  };

  //submit logic
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="entry-page_right-section-container">
      <div className="right-section-welcome-container">
        {/* welcome / non member sign up link */}
        <h1>Facepage</h1>
        <h1>
          Welcome! {displayGreetingsPartOne} {currentDay}{" "}
          {displayGreetingsPartTwo}
        </h1>
        <h2>Don't have an account?</h2>
        <button>Sign Up</button>
      </div>
      {/* right section halfway divider */}
      <hr class="rounded" />
      {/* existing member sign in */}
      <div className="right-section-sign-in-container">
        <h3>Already a member? Welcome back!</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitHandler(event);
          }}
        >
          {/* email container */}
          <div className="sign-in-email-container">
            <img alt="email-icon" src={emailIcon}></img>
            <label for="email" />
            <input
              required
              className="sign-in-input"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          {/* password container */}
          <div className="sign-in-password-container">
            <img alt="password-icon" src={passwordIcon}></img>
            <label for="password" />
            <input
              required
              className="sign-in-input"
              name="password"
              placeholder="Password"
              type={passwordShowStatus}
            ></input>
            <span
              onClick={(event) => {
                event.preventDefault();
                passwordInputHandler();
              }}
            >
              <Icon icon={passwordIconStatus} />
            </span>
          </div>
          <button type="submit">Sign In</button>
        </form>
        {/* forgot log in */}
        <Link to="/">Forgot Username/Password?</Link>
      </div>
    </div>
  );
}
