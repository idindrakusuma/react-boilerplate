import '@babel/polyfill';
/**
 * import @babel/polyfill
 * this package for handler older browser
 * IF target browser new browser or Chrome > 69. You can remove this file
 */

import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import ExampleLazy from './components/Lazy';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React Boilerplate!</h1>
      <h2 className={count > 10 ? 'warning' : null}>
        Current Count:
        {count}
      </h2>
      <button className="btn btn-warning-outline " type="button" onClick={() => setCount(count - 1)}>
        Kurangi (-)
      </button>
      <button className="btn btn-warning" type="button" onClick={() => setCount(count + 1)}>
        Tambah (+)
      </button>
      {/* only render when component needed */}
      {count > 10 ? (
        <React.Suspense fallback={null}>
          <ExampleLazy />
        </React.Suspense>
      ) : null}
    </div>
  );
}

export default hot(module)(App);
