import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, PATHS } from './paths';
import { Container } from './components/container';
import { LoginComponent } from './components/login';
import { RegComponent } from './components/reg';

function App() {
  return (
    <div className="App">
      <Container>
        <RegComponent />
      </Container>
    </div>
  );
}

export default App;
