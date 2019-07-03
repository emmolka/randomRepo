import React from "react";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import { Route, Redirect } from "react-router";

const checkLogIn = () => !!window.localStorage.getItem("token");

function App() {
  let isLoggedIn = checkLogIn();

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
