import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Character } from './pages/Characters/Characters';
import { Header } from './pages/Header/Header';
import { Container } from '@mui/system';
import { Episodes } from './pages/Episodes/Episodes';
import { Locations } from './pages/Locations/Locations';

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/characters" replace />}
          />
          <Route path="/characters/*" element={<Character />} />
          <Route path="/episodes/*" element={<Episodes />} />
          <Route path="/locations/*" element={<Locations />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
