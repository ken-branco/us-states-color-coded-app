import React, { useState } from 'react';
import './styles.css';
import StateMap from './stateMap';
import colorCodes from './colorCodes.json'; // Import the JSON file

const App = () => {
  const [selectedMap, setSelectedMap] = useState(colorCodes.map1); // Default to map1

  const handleMapChange = (mapId) => {
    if (mapId === 'map1') setSelectedMap(colorCodes.map1);
    else if (mapId === 'map2') setSelectedMap(colorCodes.map2);
    else if (mapId === 'map3') setSelectedMap(colorCodes.map3);
  };

  return (
    <div className="app">
      <header>
        <h1>Interactive U.S. States Map</h1>
      </header>

      <div className="controls">
        {/* Buttons for map selection */}
        <button onClick={() => handleMapChange('map1')}>Map 1</button>
        <button onClick={() => handleMapChange('map2')}>Map 2</button>
        <button onClick={() => handleMapChange('map3')}>Map 3</button>
      </div>

      <StateMap selectedMap={selectedMap} />
    </div>
  );
};

export default App;
