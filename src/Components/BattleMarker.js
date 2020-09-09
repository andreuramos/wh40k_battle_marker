import React, {Component} from "react";
import Button from "./Common/Button";

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
            <div>
                <span>this is the battle marker for {this.state.battle.name()} started at <b>{this.state.battle.startedAt().toDateString()}</b></span>
                <Button onClick={this.handleEndBattle} text="End Battle"/>
            </div>
        );
    }
}

export default BattleMarker;