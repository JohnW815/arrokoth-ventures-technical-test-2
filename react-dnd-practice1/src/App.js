import './App.css';

import Board from './Components/Board/Board'
import { observe } from './Components/Game/Game'

function App() {


  return (
    <div className="App">
        <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
