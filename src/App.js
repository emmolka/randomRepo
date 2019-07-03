import React from "react";
import Login from "./Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { Route, Redirect } from "react-router";

const checkLogIn = () => !!window.localStorage.getItem("token");

function App() {
  let isLoggedIn = checkLogIn();

  console.log(isLoggedIn);
  // this is a test
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() =>
          isLoggedIn ? <Redirect to="/main" /> : <Redirect to="/login" />
        }
      />

      <Route path="/login" component={Login} />
      <Route
        path="/main"
        render={props => <Main {...props} isLoggedIn={checkLogIn()} />}
      />
    </BrowserRouter>
  );
}

export default App;
