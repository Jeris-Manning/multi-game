import React, { useReducer } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Reducer, { init } from "./Reducer";
import GameSelect from "./GAME_SELECT/GameSelect";
import Poker from "./POKER/Poker";
import Keno from "./KENO/Keno";

function App() {
  const [state, dispatch] = useReducer(Reducer, init);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <GameSelect state={state} dispatch={dispatch} />
        </Route>
        <Route path="/poker">
          <Poker state={state} dispatch={dispatch} />
        </Route>
        <Route path="/keno">
          <Keno state={state} dispatch={dispatch} />
        </Route>
      </Switch>
    </>
  );
}
export default App;
