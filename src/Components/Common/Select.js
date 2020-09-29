import React from "react";
import "./Select.css"

class Select extends React.Component
{
    handleChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event.target.value)
        }
    }

    render() {
        return (
            <select className="form-select" name={this.props.name} onChange={this.handleChange}>
                {this.props.options.map((el, i) => {
                    return (<option value={el.value} key={i}>{el.text}</option>)
                })}
            </select>
        )
    }
}

export default Select;