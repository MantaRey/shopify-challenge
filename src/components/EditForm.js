import React, { useState } from 'react';

const EditForm = ({ item, inventory, setInventory, setEditing }) => {
  const [itemName, setItemName] = useState(item.name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemDescriptionHandler = (e) => {
    setItemDescription(e.target.value);
  };
  const itemQuantityHandler = (e) => {
    setItemQuantity(e.target.value);
  };
  const updateItemHandler = (e) => {
    e.preventDefault();
    setInventory(
      inventory.map((current) => {
        if (current.id === item.id) {
          return {
            ...current,
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity,
          };
        }
        return current;
      })
    );
    setEditing(false);
  };
  return (
    <form>
      <input
        onChange={itemNameHandler}
        value={itemName}
        placeholder="Name"
        type="text"
        className="item-input"
      />
      <input
        onChange={itemDescriptionHandler}
        value={itemDescription}
        placeholder="Description"
        type="text"
        className="item-input"
      />
      <input
        onChange={itemQuantityHandler}
        value={itemQuantity}
        placeholder="Quantity"
        type="text"
        className="item-input"
      />
      <button onClick={updateItemHandler} className="item-button" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditForm;
