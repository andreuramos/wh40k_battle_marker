import React, {Component} from "react";
import Select from "../Common/Select";
import Button from "../Common/Button";
import "./SecondaryObjectivesSelector.css"

class SecondaryObjectivesSelector extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            objectiveOptions: this.props.options,
            selectedObjective: null,
            selectedObjectiveDescription: null,
            customObjective: false,
            customObjectiveName: "",
            customObjectiveDescription: ""
        };
        this.submitForm = this.submitForm.bind(this)
    }

    selectObjective = (value) => {
        const option = this.state.objectiveOptions.find( item => item.value === value)
        let customObjective = false;
        let description = null;
        if (option) description = option.description
        if (value === 'custom') {
            customObjective = true;
            description = null;
        }

        this.setState({
            selectedObjective: value,
            selectedObjectiveDescription: description,
            customObjective: customObjective
        })
    }

    handleCustomNameChange = (event) => {
        this.setState({customObjectiveName: event.target.value});
    }

    handleCustomDescriptionChange = (event) => {
        this.setState({customObjectiveDescription: event.target.value})
    }

    submitForm = () => {
        if (!this.props.onSubmit) return;

        const data = {
            selectedObjective: this.state.selectedObjective
        };

        if (this.state.customObjective) {
            console.log("submitting custom objective")
            data.selectedObjectiveDescription = this.state.customObjectiveDescription
            data.selectedObjectiveName = this.state.customObjectiveName
        }

        this.props.onSubmit(data)
    }

    render() {
        return (
            <div>
                <Select
                    options={ this.state.objectiveOptions }
                    name='select-objective'
                    onChange={ this.selectObjective }
                    defaultText="None selected"
                    group={ true }
                />

                { this.state.selectedObjective && ! this.state.customObjective ?
                    <div
                        className="description-block"
                        dangerouslySetInnerHTML={{ __html: this.state.selectedObjectiveDescription }}
                    /> : null
                }

                { this.state.customObjective ?
                    <div className="custom-objective">
                        <label>Name</label>
                        <input
                            className="text-input custom-objective-name"
                            value={this.state.customObjectiveName}
                            onChange={this.handleCustomNameChange}
                        />
                        <label>Description</label>
                        <input
                            className="text-input custom-objective-description"
                            value={this.state.customObjectiveDescription}
                            onChange={this.handleCustomDescriptionChange}
                        />
                    </div> : null
                }

                <Button text='Select' onClick={this.submitForm} id="submit-selected-objective"/>
            </div>
        )
    }
}

export default SecondaryObjectivesSelector;
