const newItemId = e => {
  const uuidv1 = require("uuid/v1");
  const numbers = uuidv1();
  console.log(e);

  e.setState({
    newItemId: numbers
  });
};

export default newItemId;
