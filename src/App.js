import React, { useReducer } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CreditReducer, { init } from "./CreditReducer";
import GameSelect from "./GAME_SELECT/GameSelect";
import CoinSelect from "./GAME_SELECT/CoinSelect";
import Poker from "./POKER/Poker";
import Keno from "./KENO/Keno";
// import SavageBox from "./SavageBox";
import HandFrog from "./POKER/Components/GameHeader/HandFrog";

export const CreditContext = React.createContext(null);

function App() {
  const [creditState, creditDispatch] = useReducer(CreditReducer, init);

  return (
    <CreditContext.Provider value={{ creditState, creditDispatch }}>
      <div className="enrober">
        <Switch>
          <Route exact path="/">
            <Poker />
          </Route>
          <Route path="/poker">
            <Poker game="Jacks or Better" />
          </Route>
          <Route path="/keno">
            <Keno />
          </Route>
          <Route path="/addcredit">
            <>
              <GameSelect />
              <CoinSelect />
            </>
          </Route>
          <Route path="/magicfrog">
            <HandFrog />
          </Route>
        </Switch>
      </div>
    </CreditContext.Provider>
  );
}
export default App;
