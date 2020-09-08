import React from 'react';
import './App.css';
import Button from "./Components/Common/Button";
import BattleMarker from "./Components/BattleMarker";
import Battle from "./Core/Domain/Battle";
import Modal from "./Components/Common/Modal";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ongoingBattle: null,
            buildingBattle: false
        }
    }

    startBattle() {
        this.setState({
            ongoingBattle: new Battle(),
            buildingBattle: false
        });
    }

    handleEndBattle = (battle) => {
        console.log("Battle ended", battle.startedAt());
        this.setState({ongoingBattle: null});
    }

    showModal = () => {
        this.setState({buildingBattle: true});
    }

    cancelNewBattle = () => {
        console.log("cancelling new battle")
        this.setState({buildingBattle: false});
    }

  render() {
      return (
          <div className="App">
              <div className="App-body">
                  { this.state.ongoingBattle == null ?
                      <img src='/logo.webp' className="App-logo" alt="Under construction"/> : null
                  }
                  { this.state.ongoingBattle == null ?
                      <div>
                          <Button
                              onClick={this.startBattle.bind(this)}
                              text="Start Battle"
                          />
                          <div>
                              <Button onClick={this.showModal} text="Modal Start Battle" />
                              <Modal
                                  title="Start new battle"
                                  show={this.state.buildingBattle}
                                  onClose={this.cancelNewBattle}
                              >here goes the form</Modal>
                          </div>
                      </div>
                      :
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
