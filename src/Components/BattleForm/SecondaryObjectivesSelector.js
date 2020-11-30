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
            selectedObjectiveDescription: null
        };
    }

    selectObjective = (value) => {
        const option = this.state.objectiveOptions.find( item => item.value === value)
        let description = null;
        if (option) description = option.description

        this.setState({
            selectedObjective: value,
            selectedObjectiveDescription: description
        })
    }

    submitForm = () => {
        if (!this.props.onSubmit) return;

        const data = {
            selectedObjective: this.state.selectedObjective
        };
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

                { this.state.selectedObjective ?
                    <div
                        className="description-block"
                        dangerouslySetInnerHTML={{ __html: this.state.selectedObjectiveDescription }}
                    /> : null
                }

                <Button text='Select' onClick={this.submitForm} id="submit-selected-objective"/>
            </div>
        )
    }
}

export default SecondaryObjectivesSelector;
