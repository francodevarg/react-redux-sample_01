import './App.css';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores';


function App() {
  return (
    <div className="App">
      <main>
        <h1>Manager</h1>
        <Jugadores/>
        <EquipoSeleccionado></EquipoSeleccionado>
      </main>
    </div>
  );
}

export default App;
