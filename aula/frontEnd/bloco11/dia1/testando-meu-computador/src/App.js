import React from "react";
import './App.css'

const comp = ['dormir','comer','estudar','jogar','ler']

const task = (...comp) => {
  return (
    comp.map((element) => <li>{element}</li>))
};

function App() {
  return (
    <div className="App">
      {task(...comp)}
    </div>
  );
}

export default App;
