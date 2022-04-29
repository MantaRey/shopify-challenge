import React, { useState } from 'react';
import EditForm from './EditForm';
import DeletionForm from './DeletionForm';

const Item = ({ item, inventory, setInventory }) => {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const initiateEditHandler = () => {
    setEditing(!editing);
    setDeleting(false);
  };

  const initiateDeleteHandler = () => {
    setDeleting(!deleting);
    setEditing(false);
  };

  const restoreDeletedItemHandler = () => {
    setInventory(
      inventory.map((current) => {
        if (current.id === item.id) {
          return {
            ...current,
            deleted: false,
          };
        }
        return current;
      })
    );
  };

  return (
    <>
      <div className="item">
        <li className="item-details">Name: {item.name}</li>
        <li className="item-details">Description: {item.description}</li>
        <li className="item-details">Quantity: {item.quantity}</li>
        {!item.deleted && (
          <button onClick={initiateEditHandler} className="edit-btn">
            <i className="fas fa-pen"></i>
          </button>
        )}
        {!item.deleted && (
          <button onClick={initiateDeleteHandler} className="delete-btn">
            <i className="fas fa-trash-alt"></i>
          </button>
        )}
        {item.deleted && (
          <button onClick={restoreDeletedItemHandler} className="add-btn">
            <i className="fas fa-plus-square"></i>
          </button>
        )}
      </div>
      {item.deleted && (
        <div className="item-comment">
          Comment: {item.deletion_comment ? item.deletion_comment : 'N/A'}
        </div>
      )}
      {editing && (
        <EditForm
          item={item}
          inventory={inventory}
          setInventory={setInventory}
          setEditing={setEditing}
        />
      )}
      {deleting && (
        <DeletionForm
          item={item}
          inventory={inventory}
          setInventory={setInventory}
          setDeleting={setDeleting}
        />
      )}
    </>
  );
};

export default Item;
