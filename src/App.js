import React from 'react';
import './App.css';
import StartBattleButton from "./Components/StartBattleButton";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ongoingBattle: null
        }
    }
  render() {
      return (
          <div className="App">
              <div className="App-body">
                  { this.state.ongoingBattle == null ?
                      <img src='/logo.webp' className="App-logo" alt="Under construction"/> : null
                  }
                  { this.state.ongoingBattle == null ?
                      <StartBattleButton/> : null
                  }
              </div>
          </div>
      );
  }
}

export default App;
