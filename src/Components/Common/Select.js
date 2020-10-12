import React from "react";
import "./Select.css"

class Select extends React.Component
{
    handleChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event.target.value)
        }
    }

    getOptionGroups() {
        return this.props.options
            .map(el => {
                return el.optiongroup
            })
            .filter((item, idx, arr) => arr.indexOf(item) === idx)
            .map( group => {
                const options = this.props.options.filter( opt => opt.optiongroup === group)
                return {
                    label: group,
                    options: options
                }
            })
    }

    optiongroup = (label, options) => {
        return (
            <optgroup label={label} key={label}>
                {options.map( (element,i) => {
                    return <option value={element.value} key={i}>{element.text}</option>
                })}
            </optgroup>
        )
    }

    render() {

        return (
            <select className="form-select" name={this.props.name} onChange={this.handleChange}>
                { this.props.defaultText ? <option value="">{ this.props.defaultText }</option> : '' }
                { this.props.group ?
                    this.getOptionGroups().map( (group) => {return this.optiongroup(group.label, group.options)})
                :
                    this.props.options.map((el, i) => {
                        return (<option value={el.value} key={i}>{el.text}</option>)
                    })
                }
            </select>
        )
    }
}

export default Select;