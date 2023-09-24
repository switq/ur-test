import React, { useState } from 'react';
import './App.css';
import Alternative from '../components/Alternative';
import { v4 as uuid4 } from 'uuid';
import { Ialternative } from '../types/alternative';

function App() {
  const [alternativa, setAlternativa] = useState<Ialternative>({
    name: 'oomg',
    selected: false,
    id: uuid4()
  })

   
  return (
    <div className="App">
      <Alternative alternativa={alternativa} setAlternativa={setAlternativa}></Alternative>
    </div>
  );
}

export default App;
