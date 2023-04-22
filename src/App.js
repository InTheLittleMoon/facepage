import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//components
import MainNavigation from "./components/navigation/main-navigation";
import "./App.css";

//imported pages
import EntryPage from "./pages/entry-page/entry-page";
// insert this later: <MainNavigation />

export default function App() {
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
    <div className="app-container">
      <Router>
        <main>
          <Switch>
            <Route path="/">
              {/* all users, regardless of login status, should be brought here */}
              <EntryPage />
            </Route>
            {/* redirects to entry screen */}
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
