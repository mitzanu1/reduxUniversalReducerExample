import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import TicTacToe from "./TicTacToe/TicTacToe";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Counter />} />
          <Route path="/tictac" element={<TicTacToe />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
