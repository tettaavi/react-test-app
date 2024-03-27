import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from "react-router-dom";
import { Character } from './pages/Characters/Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Character title="Character" />} />
      <Route path="/episodes/*" element={<Character title="Episodes" />} />
      <Route path="/locations/*" element={<Character title="Locations" />} />
    </Routes>
  );
}

export default App;
