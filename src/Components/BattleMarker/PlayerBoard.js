import React from "react";
import "./PlayerBoard.css";
import MissionBoard from "./MissionBoard/MissionBoard";

class PlayerBoard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            player: this.props.player
        }
    }

    onMissionCompleted = (mission) => {
        const player = this.state.player;
        player.addCompletedMission(mission);
        this.setState({
            player: player
        })
    }

    render() {
        return (
            <div className={this.props.ongoingTurn ? 'active-player-board' : 'player-board'}>
                <div className="player-board-header">
                    <span>{this.state.player.name()}</span>
                </div>
                <div className="player-board-body">
                    <div className="player-board-score">
                        <div className="player-board-score-trophy">
                            <span className="player-board-score-points">{this.state.player.score()}</span>
                        </div>
                    </div>
                    <div className="player-board-missions">
                        <MissionBoard
                            player={this.state.player}
                            onAddMission={this.onMissionCompleted}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBoard;