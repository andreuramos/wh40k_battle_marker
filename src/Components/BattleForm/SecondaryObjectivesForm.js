import React from "react";
import Button from "../Common/Button";
import "./SecondaryObjectivesForm.css";
import Modal from "../Common/Modal";
import GetSecondaryObjectives from "../../Core/Application/GetSecondaryObjectives";
import SecondaryObjectivesSelector from "./SecondaryObjectivesSelector";
import GetObjectiveByKey from "../../Core/Application/GetObjectiveByKey";

class SecondaryObjectivesForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            selectorOpened: false,
            selectingSlot: null,
            selectedObjectives: [
                this.props.suggestedObjective,
                null,
                null
            ],
            allObjectives: [],
            objectiveOptions: []
        }
    }

    componentDidMount() {
        GetSecondaryObjectives.execute().then((objectives) => {
            let all_objectives = objectives
            all_objectives.push(this.props.suggestedObjective)
            this.setState({allObjectives: all_objectives})
            this.updateSelectableObjectives()
        })
    }

    updateSelectableObjectives = () => {
        const selectableObjectives = this.state.allObjectives.filter((element) => {
            for (let index in this.state.selectedObjectives) {
                const selectedObjective = this.state.selectedObjectives[index]
                if (selectedObjective !== null && element.category() === selectedObjective.category()) {
                    return false
                }
            }
            return true;
        }).map((element) => {
            return {text: element.name(), value:element.key()}
        })
        this.setState({objectiveOptions: selectableObjectives})
    }

    unselectObjective = (slot) => {
        let selectedObjectives = this.state.selectedObjectives
        selectedObjectives[slot] = null;
        this.setState({
            selectedObjectives: selectedObjectives
        });
        this.updateSelectableObjectives()
    }

    openSelector = (slot) => {
        this.unselectObjective(slot)
        this.setState({selectorOpened: true, selectingSlot: slot});
    }

    exitSelector = () => {
        this.setState({selectorOpened: false, selectingSlot: null});
    }

    selectObjective = (data) => {
        if (!data.selectedObjective) {
            this.unselectObjective(this.state.selectingSlot)
            this.setState({
                selectingSlot: null,
                selectorOpened: false
            })
            return
        }

        GetObjectiveByKey.execute(data.selectedObjective).then((objective) => {
            const current_selecting_slot = this.state.selectingSlot;
            let selected_objectives = this.state.selectedObjectives;
            selected_objectives[current_selecting_slot] = objective;
            this.setState({
                selectedObjectives: selected_objectives,
                selectingSlot: null,
                selectorOpened: false
            });
            this.updateSelectableObjectives()
        });
    }

    handleSubmit = (event) => {
        const data = {
            player: this.props.player,
            objectives: this.state.selectedObjectives
        }
        this.setState({
            selectedObjectives: [
                this.props.suggestedObjective,
                null,
                null
            ]
        })
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
                        <SecondaryObjectivesSelector
                            options={this.state.objectiveOptions}
                            onSubmit={this.selectObjective}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default SecondaryObjectivesForm;