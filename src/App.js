import './App.css';
import Board from './components/Board';
import Row from './components/Row.js';
import Column from './components/Column.js';

function App() {
  return (
    <div className="App">
      <div className="board-and-row">
        <Row />
        <Board />
      </div>
      <Column />
    </div>
  );
}

export default App;
