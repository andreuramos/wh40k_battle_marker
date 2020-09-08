import React from 'react';
import './App.css';
import StartBattleButton from "./Components/StartBattleButton";
import Battle from "./Core/Domain/Battle";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ongoingBattle: null
        }
    }

    startBattle() {
        this.setState({
            ongoingBattle: new Battle()
        });
    }

  render() {
      return (
          <div className="App">
              <div className="App-body">
                  { this.state.ongoingBattle == null ?
                      <img src='/logo.webp' className="App-logo" alt="Under construction"/> : null
                  }
                  { this.state.ongoingBattle == null ?
                      <StartBattleButton onClick={this.startBattle.bind(this)} /> : null
                  }
              </div>
          </div>
      );
  }
}

export default App;
