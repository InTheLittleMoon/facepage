import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/navigation/main-navigation";

//imported pages
import MainPage from "./pages/main-page";

export default function App() {
  //every user will need:
  //user id
  //name
  //photo
  //past posts(dummy start data 1-5 posts)
  //all posts/photos/comments must be 'likeable'

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          {/* non logged-in users should be brought straight here */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
