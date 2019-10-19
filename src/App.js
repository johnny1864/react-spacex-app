import React from 'react';
import './App.css';

function App() {
  let baseUrl = 'https://api.spacexdata.com/v3/launches/latest';
  function getData() {
    fetch(`${baseUrl}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  getData();
  return (
    <div className="App">
      <header></header>
    </div>
  );
}

export default App;
