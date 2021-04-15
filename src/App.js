import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  /* state = {
    isVisible: false
  } */
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  const toggleVisibility = () => {
    /* this.setState({ isVisibile: !this.state.isVisible }) */
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>Workshop -- React Hooks </h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isVisible && <Counter />}
    </div>
  );
}

export default App;
