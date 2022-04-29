import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Inventory from './components/Inventory';

function App() {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [status, setStatus] = useState('in-stock');

  const filterHandler = () => {
    switch (status) {
      case 'in-stock':
        setFilteredInventory(inventory.filter((item) => item.deleted !== true));
        break;
      case 'deleted':
        setFilteredInventory(inventory.filter((item) => item.deleted === true));
        break;
      default:
        setFilteredInventory(inventory);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [inventory, status]);

  return (
    <div className="App">
      <header>
        <h1>My Inventory Tracker</h1>
      </header>
      <Input
        inventory={inventory}
        setInventory={setInventory}
        setStatus={setStatus}
      />
      <Inventory
        filteredInventory={filteredInventory}
        inventory={inventory}
        setInventory={setInventory}
      />
    </div>
  );
}

export default App;
