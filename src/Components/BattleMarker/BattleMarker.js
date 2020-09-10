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

    handleEndBattle = () => {
        const battle = this.state.battle;
        battle.finish();
        this.props.handleEndBattle(battle);
    }

    render() {
        return (
            <div className="battle-marker">
                <div className="marker-board">
                    <PlayerBoard player={this.state.battle.player1()} />
                    <div className="center-board">
                        <Timer start={this.state.battle.startedAt()} />
                    </div>
                    <PlayerBoard player={this.state.battle.player2()} />
                </div>
                <div className="marker-footer">
                    <Button onClick={this.handleEndBattle} text="End Battle"/>
                </div>
            </div>
        );
    }
}

export default BattleMarker;