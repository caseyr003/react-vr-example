import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene embedded arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>

        <a-marker type='barcode' value='5'>
          <a-box position='0 0.5 0' material='color: blue;'></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;

