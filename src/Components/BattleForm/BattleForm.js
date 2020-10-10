import React from "react";
import PlayersNameForm from "./PlayersNameForm";
import MissionSelector from "./MissionSelector";
import SecondaryObjectivesForm from "./SecondaryObjectivesForm";
import StartingPlayerForm from "./StartingPlayerForm";

class BattleForm extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            step: 'player-names',
            mission: null,
            player1: null,
            player1_objectives: null,
            player2: null,
            player2_objectives: null,
            starting_player: null
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
        this.setState({
            mission: data.mission,
            step: 'secondary-objectives-player1'
        })
    }

    submitObjectivesForm = (data) => {
        const player = data.player;
        console.log("submitting objectives for player", player)
        if (player === this.state.player1) {
            this.setState({
                player1_objectives: data.objectives,
                step: 'secondary-objectives-player2'
            });
        }
        if (player === this.state.player2) {
            console.log("which is player 2")
            this.setState({
                player2_objectives: data.objectives,
                step: 'starting-player'
            })
        }
    }

    submitStartingPlayerForm = (data) => {
        const startingPlayer = data.startingPlayer
        this.setState({starting_player: startingPlayer})

        if (this.props.onSubmit) {
            this.props.onSubmit(this.state)
        }
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

        if (this.state.step === 'secondary-objectives-player1') {
            return (
                <SecondaryObjectivesForm
                    player={ this.state.player1 }
                    suggestedObjective={ this.state.mission.suggestedSecondaryObjective() }
                    onSubmit={ this.submitObjectivesForm }
                />
            )
        }

        if (this.state.step === 'secondary-objectives-player2') {
            return (
                <SecondaryObjectivesForm
                    player={ this.state.player2 }
                    suggestedObjective={ this.state.mission.suggestedSecondaryObjective() }
                    onSubmit={ this.submitObjectivesForm }
                />
            )
        }

        if (this.state.step === 'starting-player') {
            return (
                <StartingPlayerForm
                    player1={this.state.player1}
                    player2={this.state.player2}
                    onSubmit={this.submitStartingPlayerForm}
                />
            )
        }
    }
}

export default BattleForm;