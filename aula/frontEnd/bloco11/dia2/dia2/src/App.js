// import './App.css';
// import Pokemon from './Pokemon'
import Pokedex from './Pokedex'
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Pokedex pokelist={ pokemons }/>
    </div>
  );
}

export default App;
