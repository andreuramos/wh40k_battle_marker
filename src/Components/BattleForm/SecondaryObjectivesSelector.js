import React, {Component} from "react";
import Select from "../Common/Select";
import Button from "../Common/Button";

class SecondaryObjectivesSelector extends Component
{
    constructor(props) {
        super(props);
        let objectiveOptions = this.props.options
        objectiveOptions.unshift({text:'Select objective', value:null})
        this.state = {
            objectiveOptions: objectiveOptions,
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
                />
                <Button text='Select' onClick={this.submitForm} />
            </div>
        )
    }
}

export default SecondaryObjectivesSelector;