import React from "react";

function Charts() {
  return (
    <>
      <li className="treeview">
        <a href="#">
          <i className="fa fa-pie-chart" />
          <span>Charts</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li>
            <a href="#">
              <i className="fa fa-circle-o" /> ChartJS
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}

export default Charts;
