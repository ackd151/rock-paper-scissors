import { useState } from "react";
import BaseGame from "./components/BaseGame";
import "./styles/App.css";

function App() {
  const [isBaseGame, setIsBaseGame] = useState(true);
  return <div className='page'>{isBaseGame && <BaseGame />}</div>;
}

export default App;
