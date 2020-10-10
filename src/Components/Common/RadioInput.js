import React from "react";

export default class RadioInput extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default ? this.props.default : null
        }
    }

    handleChange = (value) => {
        if (value === this.state.value) return
        this.setState({value: value})
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    }

    render() {
        return (
            <div>
                { this.props.children.map((el, i) => {
                    const checked = el.props.value === this.state.value;
                    return React.cloneElement(el, {
                        name: this.props.name,
                        key: i,
                        checked: checked,
                        onClick: this.handleChange
                    })
                })}
            </div>
        )
    }
}