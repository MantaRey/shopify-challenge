import React, { useState } from 'react';

const DeletionForm = ({ item, inventory, setInventory, setDeleting }) => {
  const [deletionComment, setDeletionComment] = useState('');

  const deletionCommentHandler = (e) => {
    setDeletionComment(e.target.value);
  };

  const deleteItemHandler = (e) => {
    e.preventDefault();
    setInventory(
      inventory.map((current) => {
        if (current.id === item.id) {
          return {
            ...current,
            deleted: true,
            deletion_comment: deletionComment,
          };
        }
        return current;
      })
    );
    setDeleting(false);
  };

  return (
    <form>
      <input
        onChange={deletionCommentHandler}
        value={deletionComment}
        placeholder="Deletion Comment"
        type="text"
        className="item-input"
      />
      <button onClick={deleteItemHandler} className="item-button" type="submit">
        Delete
      </button>
    </form>
  );
};

export default DeletionForm;
