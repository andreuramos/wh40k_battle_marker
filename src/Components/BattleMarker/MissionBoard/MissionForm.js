import React from "react";
import Button from "../../Common/Button";
import "../../Common/Form.css";
import CompletedMission from "../../../Core/Domain/CompletedMission";
import Select from "../../Common/Select";


class MissionForm extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            objective: null,
            missionPoints: 0,
            objectives: this.props.playerObjectives.map((el) => {return {text: el.name(), value: el.key()}}),
            errors: {}
        }
    }

    handlePointsChange = (e) => {
        this.setState({missionPoints: e.target.value});
    }

    handleObjectiveChange = (obj) => {
        const objective = this.props.playerObjectives.filter(el => el.key() === obj)[0]
        this.setState({objective: objective})
    }

    validate() {
        let errors = {}
        if (!this.state.objective) {
            errors.objective = "You must select an objective"
        }
        if (this.state.missionPoints < 1) {
            errors.missionPoints = "Points must be greater than 0"
        }
        return errors
    }

    submitForm = () => {
        const errors = this.validate()
        if (errors.objective || errors.missionPoints) {
            this.setState({errors: errors})
            return
        }

        if (this.props.onSubmit) {
            const mission = new CompletedMission(
                this.state.objective.name(),
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
                        <Select
                            name="objective"
                            options={this.state.objectives}
                            defaultText="Select an objective"
                            onChange={this.handleObjectiveChange}
                        />
                        { this.state.errors.objective ?
                            <span className="error-message">{this.state.errors.objective}</span> : ""
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
                            onChange={this.handlePointsChange}
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