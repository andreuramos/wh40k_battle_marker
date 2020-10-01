import React from "react";
import PlayersNameForm from "./PlayersNameForm";
import MissionSelector from "./MissionSelector";

class BattleForm extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            step: 'player-names',
            mission: null,
            player1: null,
            player2: null,
        }
    }

    submitPlayersForm = (data) => {
        this.setState({
            player1: data.player1,
            player2: data.player2,
            step: 'mission'
        })
    }

    submitMissionForm = (data) => {
        console.log(data)
        this.setState({
            mission: data.mission
        })
    }

    render()
    {
        if (this.state.step === 'player-names') {
            return (
                <div>
                    <PlayersNameForm onSubmit={this.submitPlayersForm}/>
                </div>
            )
        }

        if (this.state.step === 'mission') {
            return (
                <div>
                    <MissionSelector onSubmit={this.submitMissionForm}/>
                </div>
            )
        }
    }
}

export default BattleForm;