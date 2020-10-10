import React from "react";

export default class RadioButton extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked ? true : false
        }
    }

    handleClick = () => {
        if (this.state.checked) {
            return
        }

        this.setState({checked: true})

        if (this.props.onClick) {
            this.props.onClick(this.props.value)
        }
    }

    render() {
        const input_id = this.props.name + this.props.value;
        return (
            <div>
                <label htmlFor={input_id}>{this.props.text}</label>
                <input
                    type="radio"
                    id={input_id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleClick}
                    checked={this.state.checked}
                />
            </div>
        )
    }
}