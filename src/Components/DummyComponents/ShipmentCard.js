import React from "react";

const ShipmentCard = props => {
  return (
    <>
      <li className="treeview" onClick={props.onClick}>
        <a href="#">
          <i className="fa fa-folder" />
          <span>{props.name}</span>
        </a>
      </li>
    </>
  );
};

export default ShipmentCard;
