import React from "react";
import Button from "../Common/Button";
import "../Common/Form.css";

class PlayersNameForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: ''
        }
    }

    handleChange = (event) => {
        if (event.target.name === 'player1') {
            this.setState({player1: event.target.value});
        } else {
            this.setState({player2: event.target.value});
        }
    }

    submitForm = () => {
        if (this.props.onSubmit) {
            const data = {
                player1: this.state.player1,
                player2: this.state.player2
            };
            this.props.onSubmit(data);
        }
    }

    render() {
        return (
            <div>
                <form className="form-group">
                    <div className="input-group">
                        <label htmlFor="player1">Player 1 Name</label>
                        <input
                            className="text-input"
                            type="text"
                            name="player1"
                            autoComplete="off"
                            value={this.state.player1}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="player2">Player 2 Name</label>
                        <input
                            className="text-input"
                            type="text"
                            name="player2"
                            autoComplete="off"
                            value={this.state.player2}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
                <Button id="submit-player-form" text="Start Battle" onClick={this.submitForm} />
            </div>
        )
    }
}

export default PlayersNameForm;