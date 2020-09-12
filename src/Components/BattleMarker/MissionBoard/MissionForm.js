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
            missionPoints: 0
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitForm = () => {
        if (this.props.onSubmit) {
            const mission = new CompletedMission(
                this.state.missionName,
                this.state.missionPoints
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
                            className="text-input"
                            type="text"
                            name="missionName"
                            autoComplete="off"
                            value={this.state.missionName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="mission-points">Points</label>
                        <input
                            className="text-input"
                            type="number"
                            name="missionPoints"
                            autoComplete="off"
                            value={this.state.missionPoints}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
                <Button id="submit-mission-form" text="Complete" onClick={this.submitForm} />
            </div>
        )
    }
}

export default MissionForm;