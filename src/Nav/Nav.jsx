import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../store/actions";
import setTheme from "../util";

const Nav = () => {
  const theme = useSelector(()=>actions.get('theme'))

  const click = () => {
    actions.update('theme', value =>  value === 'dark' ? 'light' : 'dark')
  }

 React.useEffect(()=>{theme && setTheme(theme)},[theme])


  return (
    <div className="nav">
      <Link to="/">
        <button >Counter</button>
      </Link>
      <Link to="/tictac">
        <button>Tictactoe</button>
      </Link>
      <button onClick={click}>click</button>
    </div>
  );
};

export default Nav;
