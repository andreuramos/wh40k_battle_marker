import React, {Component} from "react";
import Select from "../Common/Select";
import Button from "../Common/Button";

class SecondaryObjectivesSelector extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            objectiveOptions: this.props.options,
            selectedObjective: null
        };
    }

    selectObjective = (value) => {
        this.setState({selectedObjective: value})
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
                    options={this.state.objectiveOptions}
                    name='select-objective'
                    onChange={this.selectObjective}
                    defaultText="Select an Objective"
                    group={true}
                />
                <Button text='Select' onClick={this.submitForm} />
            </div>
        )
    }
}

export default SecondaryObjectivesSelector;