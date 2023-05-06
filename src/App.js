import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//components
//import MainNavigation from "./components/navigation/main-navigation";
import "./App.css";

//imported pages
import EntryPage from "./pages/entry-page/entry-page";
import UserProfilePage from "./pages/user-profile-page/user-profile-page";
// insert this later: <MainNavigation />

export default function App() {
  //GOALS:
  //start screen:
  //small showcase on left/slogan/logo
  //login section on right

  //every user will need:
  //user id
  //name
  //photo
  //past posts(dummy start data 1-5 posts)
  //all posts/photos/comments must be 'likeable'

  return (
    <Router>
      <main className="app-container">
        <Switch>
          <Route path="/login">
            {/* all users, regardless of login status, should be brought here */}
            <EntryPage />
          </Route>
          <Route path="/user/:uID">
            <UserProfilePage />
          </Route>
          {/* redirects to entry screen */}
          <Redirect to="/user/p1" />
        </Switch>
      </main>
    </Router>
  );
}
