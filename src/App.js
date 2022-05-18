import { useState } from "react";
import Game from "./components/Game";
import "./styles/App.css";

function App() {
  const [isBaseGame, setIsBaseGame] = useState(true);
  return (
    <div className='page'>
      <Game base={isBaseGame} />
    </div>
  );
}

export default App;
