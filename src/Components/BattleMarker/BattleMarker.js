import React, {Component} from "react";
import Button from "../Common/Button";
import "./BattleMarker.css";
import PlayerBoard from "./PlayerBoard";
import Timer from "./Timer";

class BattleMarker extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            battle: this.props.battle,
        }
    }

    handleNextTurn = () => {
        const battle = this.state.battle;
        battle.nextTurn();
        this.setState({battle:battle});
    }

    handleEndBattle = () => {
        const battle = this.state.battle;
        battle.finish();
        this.props.handleEndBattle(battle);
    }

    render() {
        const lastTurn = this.state.battle.round() === 5 && this.state.battle.activePlayer() === 2;
        return (
            <div className="battle-marker">
                <div className="marker-board">
                    <PlayerBoard player={this.state.battle.player1()} ongoingTurn={this.state.battle.activePlayer() === 1} />
                    <div className="center-board">
                        <div className='round-counter'>
                            <div className='round-counter-title'>ROUND</div>
                            <span className='round-counter-value'>{this.state.battle.round()}</span>
                        </div>
                        <Timer start={this.state.battle.startedAt()} />
                    </div>
                    <PlayerBoard player={this.state.battle.player2()} ongoingTurn={this.state.battle.activePlayer() === 2} />
                </div>
                <div className="marker-footer">
                    <Button
                        onClick={ lastTurn ? this.handleEndBattle : this.handleNextTurn }
                        text={ lastTurn ? "End Battle" : "Next Turn" }
                    />
                </div>
            </div>
        );
    }
}

export default BattleMarker;