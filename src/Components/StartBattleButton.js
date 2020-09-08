import React, {Component} from "react";

class StartBattleButton extends Component
{
    render() {
        return <div className="Start-button" onClick={this.props.onClick}>Start Battle</div>;
    }
}

export default StartBattleButton;