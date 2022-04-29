import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({ inventory, setInventory, setStatus }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemDescriptionHandler = (e) => {
    setItemDescription(e.target.value);
  };
  const itemQuantityHandler = (e) => {
    setItemQuantity(e.target.value);
  };
  const submitItemHandler = (e) => {
    e.preventDefault();
    setInventory([
      ...inventory,
      {
        name: itemName,
        description: itemDescription,
        quantity: itemQuantity,
        deleted: false,
        comment: '',
        id: uuidv4(),
      },
    ]);
    setItemName('');
    setItemDescription('');
    setItemQuantity('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
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
      <button onClick={submitItemHandler} type="submit">
        Add Item
      </button>
      <div className="select">
        <select onChange={statusHandler} name="items" className="filter-items">
          <option value="in-stock">In Stock</option>
          <option value="deleted">Deleted</option>
        </select>
      </div>
    </form>
  );
};

export default Input;
