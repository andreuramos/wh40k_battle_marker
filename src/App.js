import React from 'react';
import './App.css';
import BattleMarker from "./Components/BattleMarker/BattleMarker";
import Battle from "./Core/Domain/Battle";
import Button from "./Components/Common/Button";
import Modal from "./Components/Common/Modal";
import Player from "./Core/Domain/Player";
import BattleForm from "./Components/BattleForm/BattleForm";
import BattleBuilder from "./Core/Domain/BattleBuilder";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ongoingBattle: null,
            buildingBattle: false
        }
    }

    startBattle = (formData) => {
        const battle = BattleBuilder.fromForm(formData)
        this.setState({
            ongoingBattle: battle,
            buildingBattle: false
        });
    }

    handleEndBattle = (battle) => {
        console.log("Battle ended", battle.startedAt(), battle.endedAt(), battle);

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
                      <Button onClick={this.showModal} text="New Battle" />
                      :
                      <BattleMarker
                          battle={this.state.ongoingBattle}
                          handleEndBattle={this.handleEndBattle}
                          />
                  }
                  <Modal
                      title="Configure new battle"
                      show={this.state.buildingBattle}
                      onClose={this.cancelNewBattle}
                  ><div>
                      <BattleForm onSubmit={this.startBattle}/>
                  </div>
                  </Modal>
              </div>
          </div>
      );
  }
}

export default App;
