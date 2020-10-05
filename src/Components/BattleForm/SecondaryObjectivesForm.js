import React from "react";
import GetObjectiveByKey from "../../Core/Application/GetObjectiveByKey";
import Button from "../Common/Button";
import "./SecondaryObjectivesForm.css";
import Modal from "../Common/Modal";
import Select from "../Common/Select";

class SecondaryObjectivesForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player: props.player,
            selectorOpened: false,
            selectingSlot: null,
            selectedObjectives: [
                this.props.suggestedObjective,
                null,
                null
            ]
        }
    }

    openSelector = (slot) => {
        this.setState({selectorOpened: true, selectingSlot: slot});
    }

    exitSelector = () => {
        this.setState({selectorOpened: false, selectingSlot: null});
    }

    handleSubmit = (event) => {
        const data = {
            player: this.state.player,
            objectives: this.state.selectedObjectives
        }

        if (this.props.onSubmit) {
            this.props.onSubmit(data)
        }
    }

    render() {
        return (
            <div>
                <span>Secondary Objectives for {this.props.player}</span>
                <div className='objectives-block'>
                { this.state.selectedObjectives.map( (objective, i) => {
                    return (
                        <div
                            className={ objective ? 'objective selected-objective' : 'objective'}
                            key={i}
                            onClick={() => {this.openSelector(i)}}
                        >
                            { objective ? objective.name() : 'Select an objective' }
                        </div>
                    )
                })}
                </div>
                <Button text='Next' onClick={this.handleSubmit} />
                <Modal
                    title="Select Secondary Objective"
                    show={this.state.selectorOpened}
                    onClose={this.exitSelector}
                    >
                    <div>
                        Select objective
                    </div>
                </Modal>
            </div>
        )
    }
}

export default SecondaryObjectivesForm;