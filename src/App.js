import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import Example from './components/Example';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Boilerplate by Indra!</h1>
      <h2 className={count > 10 ? 'warning' : null}>Current Count: { count }</h2>
      <button onClick={() => setCount(count - 1)}>Kurangi (-)</button>
      <button onClick={() => setCount(count + 1)}>Tambah (+)</button>
    </div>
  );
}

export default hot(module)(App);