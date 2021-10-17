import React, { useReducer } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CreditReducer, { init } from "./CreditReducer";
import Landing from "./GAME_SELECT/GameSelect";
import Poker from "./POKER/Poker";
import Keno from "./KENO/Keno";

export const CreditContext = React.createContext(null);

function App() {
  const [creditState, creditDispatch] = useReducer(CreditReducer, init);

  return (
    <CreditContext.Provider value={{ creditState, creditDispatch }}>
      <div className="enrober">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/poker">
            <Poker />
          </Route>
          <Route path="/keno">
            <Keno />
          </Route>
        </Switch>
      </div>
    </CreditContext.Provider>
  );
}
export default App;
