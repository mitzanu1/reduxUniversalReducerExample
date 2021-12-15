import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button>Counter</button>
      </Link>
      <Link to="/tictac">
        <button>Tictactoe</button>
      </Link>
    </div>
  );
};

export default Nav;
