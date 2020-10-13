import React from "react";
import Button from "../Common/Button";
import "../Common/Form.css";

class PlayersNameForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: '',
            errors: {}
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            errors: {}
        })
    }

    submitForm = () => {

        const errors = this.validate()
        if(errors.player1 || errors.player2) {
            this.setState({errors: errors})
            return
        }

        if (this.props.onSubmit) {
            const data = {
                player1: this.state.player1,
                player2: this.state.player2
            };
            this.props.onSubmit(data);
        }
    }

    validate = () => {
        let errors = {}
        if (this.state.player1.length < 3) {
            errors.player1 = "Name is too short"
        }
        if (this.state.player2.length < 3) {
            errors.player2 = "Name is too short"
        }
        if (this.state.player1 === this.state.player2) {
            errors.player2 = "Players cannot have the same name"
        }
        return errors;
    }

    render() {
        return (
            <div>
                <form className="form-group">
                    <div className="input-group">
                        <label htmlFor="player1">Player 1</label>
                        <input
                            className={this.state.errors.player1 ? "text-input error" : "text-input" }
                            type="text"
                            name="player1"
                            autoComplete="off"
                            value={this.state.player1}
                            onChange={this.handleChange}
                        />
                        { this.state.errors.player1 ?
                            <span className="error-message">{this.state.errors.player1}</span> : ""
                        }
                    </div>

                    <div className="input-group">
                        <label htmlFor="player2">Player 2</label>
                        <input
                            className={this.state.errors.player2 ? "text-input error" : "text-input"}
                            type="text"
                            name="player2"
                            autoComplete="off"
                            value={this.state.player2}
                            onChange={this.handleChange}
                        />
                        { this.state.errors.player2 ?
                            <span className="error-message">{this.state.errors.player2}</span> : ""
                        }
                    </div>
                </form>
                <Button id="submit-player-form" text="Next" onClick={this.submitForm} />
            </div>
        )
    }
}

export default PlayersNameForm;