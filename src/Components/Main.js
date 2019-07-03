import React from "react";
import { Redirect } from "react-router";

import Header from "./Header";
import ShipmentsAndItems from "./ShipmentsAndItems";

class Main extends React.Component {
  render() {
    const { props } = this;

    if (!props.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        {/* displaying main page */}
        <Header props={props} />
        <ShipmentsAndItems props={props} />
      </>
    );
  }
}

export default Main;
