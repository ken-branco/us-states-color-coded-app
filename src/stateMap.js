import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StateMap = ({ selectedMap }) => {
  const mapRef = useRef();

  // Example GeoJSON data for U.S. states (you would replace this with actual data)
  const geojsonData = require('./us-states.json'); // Use a GeoJSON file with state shapes
  
//   const colorCodeMap = [
//     [1, 'green'], // Map 1 - Green for 1
//     [2, 'orange'], // Map 2 - Orange for 2
//     [3, 'red'], // Map 3 - Red for 3
//   ];

  const colorScale = (value) => {
    switch (value) {
      case 1:
        return 'green';
      case 2:
        return 'orange';
      case 3:
        return 'red';
      default:
        return 'gray'; // Default color if value is missing
    }
  };

  const style = (feature) => {
    const stateValue = selectedMap[feature.properties.name]; // Assuming state name is used as key
    return {
      fillColor: colorScale(stateValue),
      weight: 2,
      opacity: 1,
      color: 'black',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  return (
    <MapContainer
      center={[37.8, -96]}
      zoom={4}
      style={{ height: '600px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={geojsonData} style={style} />
    </MapContainer>
  );
};

export default StateMap;
