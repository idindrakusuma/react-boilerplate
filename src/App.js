import React, { useState } from 'react';
import Example from './components/Example';

import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello Kusuma y!</h1>
      <h2>Current Count: { count }</h2>
      <button onClick={() => setCount(count - 1)}>Kurangi (-)</button>
      <button onClick={() => setCount(count + 1)}>Tambah (+)</button>
      <div> ------- </div>
      <Example />
    </div>
  );
}

export default App;