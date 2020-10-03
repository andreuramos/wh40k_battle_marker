import React from "react";
import GetObjectiveByKey from "../../Core/Application/GetObjectiveByKey";
import Button from "../Common/Button";

class SecondaryObjectivesForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player: props.player,
            loading: true,
            objectives: [
                this.props.suggestedObjective,
                null,
                null
            ]
        }
    }

    handleSubmit = (event) => {
        const data = {
            player: this.state.player,
            objectives: this.state.objectives
        }

        if (this.props.onSubmit) {
            this.props.onSubmit(data)
        }
    }

    render() {
        if (this.state.loading) {
            return <div><span>Loading ...</span></div>
        }
        return (
            <div>
                <span>Secondary Objectives for {this.props.player}</span>
                <div className='objectives-block'>
                { this.state.objectives.map( (objective, i) => {
                    return (
                        <div className={ objective ? 'objective selected-objective' : 'objective'} key={i}>
                            { objective ? objective.name() : 'Select an objective' }
                        </div>
                    )
                })}
                </div>
                <Button text='Next' onClick={this.handleSubmit} />
            </div>
        )
    }
}

export default SecondaryObjectivesForm;