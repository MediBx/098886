import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LearnRouter } from './components/LearnRouter/LearnRouter';
import MyComponent from './stateful components/MyComponent/MyComponent';

function App() {
  return (
    <div className="App">
      {/* <LearnRouter /> */}
      <MyComponent />
    </div>
  );
}

export default App;
