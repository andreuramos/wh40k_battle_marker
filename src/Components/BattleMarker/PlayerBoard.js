import React from "react";
import "./PlayerBoard.css";
import MissionBoard from "./MissionBoard";

class PlayerBoard extends React.Component
{
    render() {
        return (
            <div className="player-board">
                <div className="player-board-header">
                    <span>{this.props.player.name()}</span>
                </div>
                <div className="player-board-body">
                    <div className="player-board-score">
                        <div className="player-board-score-trophy">
                            <span>{this.props.player.score()}</span>
                        </div>
                    </div>
                    <div className="player-board-missions">
                        <MissionBoard player={this.props.player} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerBoard;