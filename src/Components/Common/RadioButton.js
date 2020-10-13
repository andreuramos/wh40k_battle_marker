import React from "react";

export default class RadioButton extends React.Component
{
    handleChange = (e) => {
        if (this.props.checked) return

        if (this.props.onClick) {
            this.props.onClick(this.props.value)
        }
    }

    render() {
        const input_id = this.props.name + this.props.value;
        return (
            <div className="form-radio-button">
                <input
                    type="radio"
                    id={input_id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleChange}
                    checked={this.props.checked}
                />
                <label htmlFor={input_id}>{this.props.text}</label>
            </div>
        )
    }
}