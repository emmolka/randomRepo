import React from "react";
import { Redirect } from "react-router";
//import Shipment from "../Shipment/Shipment";

import Header from "./Header";
import Menu from "./Menu";

import Shipment from "./Shipment";
//import AddButton from "../Buttons/AddButton/AddButton";
//import "./Main.css";
//import LogOut from "../LogOut/LogOut";
//import { IoIosAddCircleOutline } from "react-icons/io";
//import clearInputs from "../Modules/clearModule/Clear";
//import openClose from "../Modules/openClose/openClose";
//import newId from "../Modules/newId/newId";
class Main extends React.Component {
  render() {
    const { props } = this;

    if (!props.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <Header props={props} />
        <Menu />
      </>
    );
  }
}

export default Main;
