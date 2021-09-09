import React,{useState,useEffect} from "react";

import Board from './Components/Board/Board'
import { observe } from './Components/Game/Game'

function App() {

  const [knightPosition,setKnightPosition] = useState([])

  useEffect(() => {
    observe((position) =>
        setKnightPosition(position)
    )
  },[])

  return (
    <div className="App">
      <Board knightPosition={knightPosition} />
    </div>
  );


}

export default App;
