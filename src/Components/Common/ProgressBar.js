import React from "react";
import "./ProgressBar.css";

export default class ProgressBar extends React.Component
{
    render()
    {
        return (
            <div>
                <div className="progress-bar-back">
                    <span className="progress-bar" style={{'width': this.props.percent + "%"}}/>
                </div>
            </div>
        )
    }
}
