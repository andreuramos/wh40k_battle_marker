import React, {Component} from "react";
import Button from "./Button";

class BattleMarker extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            battle: this.props.battle,
            handleEndBattle: this.props.handleEndBattle
        }
    }

    render() {
        return (
            <div>
                <span>this is the battle marker for battle started at <b>{this.state.battle.startedAt().toDateString()}</b></span>
                <Button onClick={() => this.state.handleEndBattle(this.state.battle)} text="End Battle"/>
            </div>
        );
    }
}

export default BattleMarker;