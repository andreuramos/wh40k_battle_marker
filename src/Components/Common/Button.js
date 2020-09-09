import React, {Component} from "react";
import './Button.css';

class Button extends Component
{
    render() {
        return <div
            className="primary-button"
            onClick={this.props.onClick}
            id={this.props.id}
        >{this.props.text}</div>;
    }
}

export default Button;