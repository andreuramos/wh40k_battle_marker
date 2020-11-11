import React, {Component} from "react";
import './Button.css';

class Button extends Component
{
    render() {
        const classes = "button " + (this.props.type ? this.props.type: "primary-button");
        return <div
            className={classes}
            onClick={this.props.onClick}
            id={this.props.id}
            style={this.props.style}
        >{this.props.text}</div>;
    }
}

export default Button;
