import React, { useState } from 'react';
import './App.css';
import Question from '../components/Question';

function App() {
  const [test, setTest] = useState();

  return (
    <div className="App">
       <Question />
    </div>
  );
}

export default App;
