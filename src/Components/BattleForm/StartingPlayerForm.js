import React from "react";
import Button from "../Common/Button";
import RadioInput from "../Common/RadioInput";
import RadioButton from "../Common/RadioButton";

export default class StartingPlayerForm extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            startingPlayer: this.props.player1
        }
    }

    handleChange = (player) => {
        this.setState({startingPlayer: player})
    }

    submitStartingPlayer = () => {
        const data = {startingPlayer: this.state.startingPlayer}
        if (this.props.onSubmit) {
            this.props.onSubmit(data)
        }
    }

    render() {
        return (
            <div>
                <span>Select the starting player</span>
                <RadioInput name="starting" onChange={this.handleChange} default={this.state.startingPlayer}>
                    <RadioButton value={this.props.player1} text={this.props.player1}/>
                    <RadioButton value={this.props.player2} text={this.props.player2}/>
                </RadioInput>
                <div className="navigation-buttons">
                    { this.props.onBack ?
                        <Button text="Back" onClick={this.props.onBack} type="none" style={{'width': '30%'}}/> : null
                    }
                    <Button text='Start Battle' onClick={this.submitStartingPlayer} style={{'width': '70%'}}/>
                </div>
            </div>
        )
    }
}
