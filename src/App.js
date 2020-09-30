import React from 'react';
import {AppProvider} from './app-context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>hello, world!</h1>
      </div>
    </AppProvider>
  );
}

export default App;
