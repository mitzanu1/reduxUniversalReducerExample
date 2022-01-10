import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import TicTacToe from "./TicTacToe/TicTacToe";
import Nav from "./Nav/Nav";
import setTheme from "./util";

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
