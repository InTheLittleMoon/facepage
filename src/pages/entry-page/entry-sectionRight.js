import React from "react";
import { useState } from "react";

//imported images
import emailIcon from "../../assets/images/entry-page-right-section-email-icon.png";
import passwordIcon from "../../assets/images/entry-page-right-section-password-icon.png";
import showPasswordIcon from "../../assets/images/entry-page-right-section-show-password-icon.png";

export default function SectionRight() {
  //held states
  const [passwordShowStatus, setPasswordShowStatus] = useState(false);

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

  //submit logic
  const submitHandler = (event) => {
    event.preventDefault();
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
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
        >
          {/* email container */}
          <div className="sign-in-email-container">
            <img alt="email-icon" src={emailIcon}></img>
            <label for="email" />
            <input
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
              className="sign-in-input"
              name="password"
              placeholder="Password"
              onChange={(event) => {}}
            ></input>
            <img alt="show password icon" src={showPasswordIcon}></img>
          </div>
        </form>
      </div>
    </div>
  );
}
