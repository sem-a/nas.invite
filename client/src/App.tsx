import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, PATHS } from './paths';

function App() {
  return (
    <div className="App">
      <Link to={BASE_URL + PATHS.created}>Создать приглашение</Link>
    </div>
  );
}

export default App;
