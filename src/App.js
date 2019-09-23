import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Graph from './components/Graph'
import AddGraph from './components/AddGraph'

function App() {

  return (
    <main>
      <h1>Spider Graphs</h1>
      <AddGraph />
      <Graph />
    </main>
  );
}

export default App;
