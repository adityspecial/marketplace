// App.jsx
import React from 'react';
import { World } from './Components/Globe';

const globeConfig = {
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  globeColor: "#1d072e",
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9
};

const sampleData = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.0060,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#4CAF50"
  },
  {
    order: 2,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.4,
    color: "#2196F3"
  }
];

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      position: 'relative'
    }}>
      <World 
        globeConfig={globeConfig} 
        data={sampleData}
      />
    </div>
  );
}

export default App;