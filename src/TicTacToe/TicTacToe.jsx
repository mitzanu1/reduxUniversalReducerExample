import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "../store/actions";

const TicTacToe = () => {
  const next = useSelector(() => actions.get(`next`));
  let sq = (n) => <Square identifier={n} />;

  return (
    <>
      <div> Next Move {next}</div>
      <div className="board">
        <div>
          {sq(0)}
          {sq(1)}
          {sq(2)}
        </div>
        <div>
          {sq(3)}
          {sq(4)}
          {sq(5)}
        </div>
        <div>
          {sq(6)}
          {sq(7)}
          {sq(8)}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;

export function Square(props) {
  const id = props.identifier;

  useEffect(() => {
    actions.set(`square${id}`, "");
  }, []);

  const value = useSelector(() => actions.get(`square${id}`));

  let onClick = () => {
    if (value === "") {
      const next = actions.get("next");
      actions.update(`square${id}`, (value) => next);
      actions.update(`next`, (value) => (value === "X" ? "O" : "X"));
    }
  };
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

actions.set("next", "X");
