import React from "react";
import Shipment from "./Shipment";
//import Charts from "./Charts";
import ShipmentCard from "./ShipmentCard";
import axios from "axios";
import Item from "./Item";
import NewShipmentCard from "./NewShipmentCard";
import NewShipmentInput from "./NewShipmentInput";

class Menu extends React.Component {
  state = {
    shipments: [], //shipment name shouldbethere
    openedShipmentId: "",
    openedShipmentName: "",
    isNewShipmentOpen: false,
    isShipmentOpen: false,
    newShipmentId: "",
    newShipmentName: "",
    newItemId: "",
    newItemName: ""
  };
  //Showing the shipment that was clicked
  showShipment = e => {
    if (this.state.openedShipmentId === e.id) {
      this.setState({
        isShipmentOpen: false,
        openedShipmentId: "",
        isNewShipmentOpen: false
      });
    } else {
      this.setState({
        openedShipmentId: e.id,
        openedShipmentName: e.name,
        isShipmentOpen: true,
        isNewShipmentOpen: false
      });
    }
  };
  //showing the shipment that has a possibility to add another ship
  showNewShipment = () => {
    if (this.state.isShipmentOpen) {
      this.setState({
        isShipmentOpen: false,
        isNewShipmentOpen: true,
        openedShipmentId: ""
      });
    } else {
      this.state.isNewShipmentOpen
        ? this.setState({ isNewShipmentOpen: false })
        : this.setState({ isNewShipmentOpen: true, openedShipmentId: "" });
    }
  };
  //Adding and deleting shipments functions
  addNewShipmentName = e => {
    this.setState({ newShipmentName: e.target.value });
  };
  addNewShipment = async event => {
    try {
      await axios.post(
        `https://api.shipments.test-y-sbm.com/shipment`,
        {
          id: this.state.newShipmentId,
          name: this.state.newShipmentName
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.token}`
          }
        }
      );
      this.addNewShipmentToState();
      this.clearInput();
      this.newShipmentId();
    } catch (e) {
      alert("Adding shipment failed");
    }
  };
  addNewShipmentToState = () => {
    const shipment = {
      id: this.state.newShipmentId,
      name: this.state.newShipmentName,
      items: []
    };
    const currentArray = [...this.state.shipments];
    const newArray = currentArray;
    newArray.push(shipment);
    this.setState({
      shipments: newArray
    });
  };
  deleteShipment = async event => {
    const shipmentId = this.state.openedShipmentId;
    try {
      await axios.delete(
        `https://api.shipments.test-y-sbm.com/shipment/${shipmentId}`,
        {
          headers: {
            Authorization: `bearer ${localStorage.token}`
          }
        }
      );
      this.deleteShipmentFromState();
    } catch (e) {
      alert("Deleting shipment failed");
    }
  };
  deleteShipmentFromState = () => {
    const shipmentId = this.state.openedShipmentId;
    const currentArray = [...this.state.shipments];
    const newArray = currentArray.filter(item => item.id !== shipmentId);
    this.setState({
      shipments: newArray
    });
  };
  clearInput = () => {
    this.setState({
      newShipmentName: "",
      newItemName: ""
    });
  };

  newShipmentId = () => {
    const uuidv1 = require("uuid/v1");
    const numbers = uuidv1();

    this.setState({
      newShipmentId: numbers
    });
  };

  addNewItemName = e => {
    this.setState({ newItemName: e.target.value });
  };
  addItem = async event => {
    try {
      await axios.post(
        `https://api.shipments.test-y-sbm.com/item`,
        {
          id: this.state.newItemId,
          code: this.state.newItemName,
          shipment_id: this.state.openedShipmentId,
          name: this.state.openedShipmentName
        },
        {
          headers: {
            Authorization: `bearer ${localStorage.token}`
          }
        }
      );
      this.addItemToState();
      this.newItemId();
      this.clearInput();
    } catch (e) {
      alert(e);
    }
  };
  addItemToState = () => {
    const item = {
      id: this.state.newItemId,
      code: this.state.newItemName,
      shipment_id: this.state.openedShipmentId
    };

    const currentArray = [...this.state.shipments];
    const newArray = currentArray;
    newArray.map(shipment => {
      if (shipment.id === this.state.openedShipmentId) {
        return shipment.items.push(item);
      }
    });
    this.setState({
      shipments: newArray
    });
  };
  deleteItem = async e => {
    try {
      await axios.delete(`https://api.shipments.test-y-sbm.com/item/${e.id}`, {
        headers: {
          Authorization: `bearer ${localStorage.token}`
        }
      });
      this.deleteItemFromState(e);
    } catch (e) {
      alert("Deleting item failed");
    }
  };

  deleteItemFromState = item => {
    const shipmentId = item.shipment_id;
    const itemId = item.id;
    const currentArray = [...this.state.shipments];
    const newArray = [];
    currentArray.map(shipment => {
      if (shipment.id === shipmentId) {
        const Shipment = shipment;
        const shipItems = shipment.items;
        const newItems = shipItems.filter(item => item.id !== itemId);
        Shipment.items = newItems;
        newArray.push(Shipment);
      } else {
        newArray.push(shipment);
      }
    });
    this.setState({ shipments: newArray });
  };
  newItemId = () => {
    const uuidv1 = require("uuid/v1");
    const numbers = uuidv1();

    this.setState({
      newItemId: numbers
    });
  };

  async componentDidMount() {
    this.newShipmentId();
    this.newItemId();
    try {
      const data = await axios.get(
        `https://api.shipments.test-y-sbm.com/shipment`,
        {
          headers: {
            Authorization: `bearer ${localStorage.token}`
          }
        }
      );
      const list = data.data.data.shipments;
      this.setState({
        shipments: list
      });
    } catch (e) {
      alert("Faild to load Shipments");
    }
  }
  render() {
    return (
      <>
        {/* <div className="content-wrapper" style={{ minHeight: "901px" }}> */}
        <aside className="main-sidebar">
          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">
            >{/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">LIST OF SHIPMENTS</li>
              <NewShipmentCard onClick={this.showNewShipment} />
              {this.state.shipments.map(shipment => (
                <ShipmentCard
                  shipment={shipment}
                  id={shipment.id}
                  name={shipment.name}
                  removeShipmentFromState={this.removeShipmentFromState}
                  key={shipment.id}
                  onClick={() => this.showShipment(shipment)}
                />
              ))}

              {/* <Charts /> */}
            </ul>
          </section>

          {/* /.sidebar */}
        </aside>
        <div className="content-wrapper" style={{ minHeight: "901px" }}>
          {this.state.shipments.map(shipment => {
            if (
              shipment.id === this.state.openedShipmentId &&
              this.state.isShipmentOpen
            ) {
              return (
                <Shipment
                  //name={item.name}
                  nameSHIP={shipment.name}
                  onChange={e => this.addNewItemName(e)}
                  onClick={this.addItem}
                  value={this.state.newItemName}
                  key={shipment.id}
                  listOfItems={shipment.items.map(item => {
                    return (
                      <Item
                        itemName={item.code}
                        key={item.id}
                        deleteItem={() => {
                          this.deleteItem(item);
                        }}
                      />
                    );
                  })}
                  deleteShipment={e => this.deleteShipment(e)}
                />
              );
            }
          })}
          {this.state.isNewShipmentOpen && (
            <NewShipmentInput
              onChange={e => this.addNewShipmentName(e)}
              buttonClick={this.addNewShipment}
              value={this.state.newShipmentName}
            />
          )}
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Menu;
