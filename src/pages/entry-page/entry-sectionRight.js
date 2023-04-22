import React from "react";

export default function SectionRight() {
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
      {/* divider */}
      <hr class="rounded" />
      {/* existing member sign in */}
      <div className="right-section-sign-in-container">
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
        >
          <label for="email" />
          <input
            className="sign-in-input"
            name="email"
            placeholder="Email"
          ></input>
          <label for="password" />
          <input
            className="sign-in-input"
            name="password"
            placeholder="Password"
          ></input>
        </form>
      </div>
    </div>
  );
}
