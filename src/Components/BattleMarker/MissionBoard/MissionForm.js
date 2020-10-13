import React from "react";
import Button from "../../Common/Button";
import "../../Common/Form.css";
import CompletedMission from "../../../Core/Domain/CompletedMission";


class MissionForm extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            missionName: '',
            missionPoints: 0,
            errors: {}
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    validate() {
        let errors = {}
        if (this.state.missionName.length < 3) {
            errors.missionName = "Mission name is too short"
        }
        if (this.state.missionPoints < 1) {
            errors.missionPoints = "Points must be greater than 0"
        }
        return errors
    }

    submitForm = () => {
        const errors = this.validate()
        if (errors.missionName || errors.missionPoints) {
            this.setState({errors: errors})
            return
        }

        if (this.props.onSubmit) {
            const mission = new CompletedMission(
                this.state.missionName,
                this.state.missionPoints,
                this.props.round
            );
            this.props.onSubmit(mission);
        }
    }

    render() {
        return (
            <div className="mission-form" data-testid='mission-form'>
                <form className="form-group">
                    <div className="input-group">
                        <label htmlFor="mission-name">Mission</label>
                        <input
                            className={this.state.errors.missionName ? "text-input error" : "text-input"}
                            type="text"
                            name="missionName"
                            autoComplete="off"
                            value={this.state.missionName}
                            onChange={this.handleChange}
                        />
                        { this.state.errors.missionName ?
                            <span className="error-message">{this.state.errors.missionName}</span> : ""
                        }
                    </div>

                    <div className="input-group">
                        <label htmlFor="mission-points">Points</label>
                        <input
                            className={this.state.errors.missionPoints ? "text-input error" : "text-input"}
                            type="number"
                            name="missionPoints"
                            autoComplete="off"
                            value={this.state.missionPoints}
                            onChange={this.handleChange}
                        />
                        { this.state.errors.missionPoints ?
                            <span className="error-message">{this.state.errors.missionPoints}</span> : ""
                        }
                    </div>
                </form>
                <Button id="submit-mission-form" text="Complete" onClick={this.submitForm} />
            </div>
        )
    }
}

export default MissionForm;