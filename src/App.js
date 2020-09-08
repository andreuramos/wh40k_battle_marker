import React from 'react';
import './App.css';
import Button from "./Components/Button";
import BattleMarker from "./Components/BattleMarker";
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

    handleEndBattle = (battle) => {
        console.log("Battle ended", battle.startedAt());
        this.setState({ongoingBattle: null});
    }

  render() {
      return (
          <div className="App">
              <div className="App-body">
                  { this.state.ongoingBattle == null ?
                      <img src='/logo.webp' className="App-logo" alt="Under construction"/> : null
                  }
                  { this.state.ongoingBattle == null ?
                      <Button
                          onClick={this.startBattle.bind(this)}
                          text="Start Battle"
                      /> :
                      <BattleMarker
                          battle={this.state.ongoingBattle}
                          handleEndBattle={this.handleEndBattle}
                          />
                  }
              </div>
          </div>
      );
  }
}

export default App;
