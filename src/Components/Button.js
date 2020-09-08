import React, {Component} from "react";

class Button extends Component
{
    render() {
        return <div className="primary-button" onClick={this.props.onClick}>{this.props.text}</div>;
    }
}

export default Button;