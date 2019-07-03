const newShipmentId = e => {
  const uuidv1 = require("uuid/v1");
  const numbers = uuidv1();
  console.log(e);

  e.setState({
    newShipmentId: numbers
  });
};

export default newShipmentId;
