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
                null,
                null,
                null
            ]
        }
    }

    componentDidMount() {
        this.loadObjective(this.props.suggestedObjective).then( objective => {
            let objectives = this.state.objectives;
            objectives[0] = objective
            this.setState({
                objectives: objectives,
                loading: false
            });
        })
    }

    async loadObjective(key) {
        await GetObjectiveByKey.execute(key).then(objective => {return objective});
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