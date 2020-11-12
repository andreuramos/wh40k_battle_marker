import React from "react";
import PlayersNameForm from "./PlayersNameForm";
import MissionSelector from "./MissionSelector";
import SecondaryObjectivesForm from "./SecondaryObjectivesForm";
import StartingPlayerForm from "./StartingPlayerForm";
import "./BattleForm.css";
import ProgressBar from "../Common/ProgressBar";

const steps = [
    'player-names',
    'mission',
    'secondary-objectives-player1',
    'secondary-objectives-player2',
    'starting-player',
];

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
        if (player === this.state.player1) {
            this.setState({
                player1_objectives: data.objectives,
                step: 'secondary-objectives-player2'
            });
        }
        if (player === this.state.player2) {
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

    goBack = () => {
        const current_step_index = steps.indexOf(this.state.step);
        if (current_step_index > 0) {
            this.setState({step: steps[(current_step_index - 1)]});
        }
    }

    render()
    {
        let step;
        switch (this.state.step) {
            case 'player-names':
                step = <PlayersNameForm onSubmit={this.submitPlayersForm} />; break;
            case 'mission':
                step = <MissionSelector
                    onSubmit={ this.submitMissionForm }
                    onBack={ this.goBack }
                />; break;
            case 'secondary-objectives-player1':
                step = <SecondaryObjectivesForm
                    player={ this.state.player1 }
                    suggestedObjective={ this.state.mission.suggestedSecondaryObjective() }
                    onSubmit={ this.submitObjectivesForm }
                    onBack={ this.goBack }
                />; break;
            case 'secondary-objectives-player2':
                step = <SecondaryObjectivesForm
                    player={ this.state.player2 }
                    suggestedObjective={ this.state.mission.suggestedSecondaryObjective() }
                    onSubmit={ this.submitObjectivesForm }
                    onBack={ this.goBack }
                />; break;
            case 'starting-player':
                step = <StartingPlayerForm
                    player1={ this.state.player1 }
                    player2={ this.state.player2 }
                    onSubmit={ this.submitStartingPlayerForm }
                    onBack={ this.goBack }
                />; break;
            default:
                step = null
        }

        const percent = (steps.indexOf(this.state.step) + 1) / steps.length * 100;

        return (
            <div>
                <ProgressBar percent={percent}/>
                { step }
            </div>
        )
    }
}

export default BattleForm;
