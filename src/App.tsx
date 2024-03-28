import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
} from "react-router-dom";
import { Character } from './pages/Characters/Characters';
import { Header } from './pages/Header/Header';
import { Container } from '@mui/system';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Character title="Character" />} />
          <Route path="/episodes/*" element={<Character title="Episodes" />} />
          <Route path="/locations/*" element={<Character title="Locations" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
