import React from 'react';
import {AppProvider} from './app-context';
import Test from './test';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>hello, world!</h1>
        <Test />
      </div>
    </AppProvider>
  );
}

export default App;
