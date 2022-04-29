import React from 'react';
import Item from './Item';

const Inventory = ({ filteredInventory, inventory, setInventory }) => {
  return (
    <div className="inventory-container">
      <ul className="inventory">
        {filteredInventory.map((item) => (
          <Item
            item={item}
            key={item.id}
            inventory={inventory}
            setInventory={setInventory}
          />
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
