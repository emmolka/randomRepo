import React from "react";

const Item = props => {
  return (
    <tbody>
      <tr role="row" className="odd">
        <td className="sorting_1">{props.itemName}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.deleteItem}
          >
            Delete Item
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
